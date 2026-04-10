import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants"

const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiter en mémoire : 5 requêtes / 15 min par IP
const rateMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 15 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}$/
const ALLOWED_SERVICES = new Set([
  "maconnerie-generale",
  "travaux-publics-viabilisation",
  "agroalimentaire",
  "taille-de-pierre-enrochement",
  "autre",
  "",
])

function clean(val: unknown, max: number): string {
  return typeof val === "string" ? val.trim().slice(0, max) : ""
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"

  if (checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans 15 minutes." },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()

    const type      = clean(body.type, 10)
    const nom       = clean(body.nom, 100)
    const prenom    = clean(body.prenom, 100)
    // Suppression des caractères de contrôle pour éviter l'injection de headers email
    const email     = clean(body.email, 254).replace(/[\r\n\t]/g, "")
    const telephone = clean(body.telephone, 20).replace(/[^\d\s+\-().]/g, "")
    const service   = clean(body.service, 60)
    const surface   = clean(body.surface, 50)
    const ville     = clean(body.ville, 100)
    const message   = clean(body.message, 2000)

    // Validation serveur
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 })
    }
    if (!message) {
      return NextResponse.json({ error: "Le message est requis." }, { status: 400 })
    }
    if (type === "contact") {
      if (!nom) {
        return NextResponse.json({ error: "Nom requis." }, { status: 400 })
      }
    }
    if (type === "devis") {
      if (!nom || !prenom) {
        return NextResponse.json({ error: "Nom et prénom requis." }, { status: 400 })
      }
      if (!ville) {
        return NextResponse.json({ error: "La ville est requise." }, { status: 400 })
      }
      if (service && !ALLOWED_SERVICES.has(service)) {
        return NextResponse.json({ error: "Service invalide." }, { status: 400 })
      }
    }

    const isDevis = type === "devis"
    const subject = isDevis
      ? `[Devis] Nouvelle demande de ${prenom} ${nom} — ${SITE_NAME}`
      : `[Contact] Message de ${nom} — ${SITE_NAME}`

    const emailBody = isDevis
      ? `
Nouvelle demande de devis reçue via le site ${SITE_NAME}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COORDONNÉES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom : ${prenom} ${nom}
Email : ${email}
Téléphone : ${telephone || "Non renseigné"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service souhaité : ${service || "Non précisé"}
Surface : ${surface || "Non renseignée"}
Ville / Département : ${ville || "Non renseigné"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}
      `.trim()
      : `
Nouveau message reçu via le site ${SITE_NAME}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
De : ${nom}
Email : ${email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}
      `.trim()

    const { error: sendError } = await resend.emails.send({
      from: "DeLaPierrEauLogis <contact@delapierreaulogis.fr>",
      to: "CONTACT_EMAIL",
      replyTo: email,
      subject,
      text: emailBody,
    })

    if (sendError) {
      console.error("Erreur Resend :", sendError)
      return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur API contact :", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
