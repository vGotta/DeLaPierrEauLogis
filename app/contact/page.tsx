"use client"
import { useState } from "react"
import Link from "next/link"
import { CONTACT_EMAIL, ZONE } from "@/lib/constants"
import styles from "@/styles/contact.module.css"

type Status = "idle" | "loading" | "success" | "error"

const EMPTY_FORM = { nom: "", email: "", message: "" }
type Fields = typeof EMPTY_FORM
type FormErrors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}$/

function validate(data: Fields): FormErrors {
  const e: FormErrors = {}
  if (!data.nom.trim()) e.nom = "Nom requis"
  if (!data.email.trim() || !EMAIL_RE.test(data.email)) e.email = "Adresse email invalide"
  if (!data.message.trim()) e.message = "Message requis"
  if (data.message.length > 2000) e.message = "2000 caractères maximum"
  return e
}

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle")
  const [formData, setFormData] = useState<Fields>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof Fields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fieldErrors = validate(formData)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "contact" }),
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <p className={styles.eyebrow}>Écrivez-nous</p>
          <h1 className="section-title">
            <span>Contact</span>
          </h1>
          <p className={styles.intro}>
            Une question, un projet, une demande d&apos;information ? Nous sommes à votre écoute.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>

            {/* Infos contact */}
            <aside className={styles.infos}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📧</span>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={styles.infoValue}>{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <p className={styles.infoLabel}>Zone d&apos;intervention</p>
                  <p className={styles.infoValue}>{ZONE}</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>⏱️</span>
                <div>
                  <p className={styles.infoLabel}>Délai de réponse</p>
                  <p className={styles.infoValue}>Sous 48h ouvrées</p>
                </div>
              </div>
              <div className={styles.devisPromo}>
                <p className={styles.devisPromoText}>Vous avez un projet ? Obtenez un devis détaillé gratuitement.</p>
                <Link href="/devis" className="btn-primary">demander un devis gratuit</Link>
              </div>
            </aside>

            {/* Formulaire */}
            <div className={styles.formWrap}>
              {status === "success" ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✓</span>
                  <h3>Message envoyé !</h3>
                  <p>Merci pour votre message. Nous vous répondrons sous 48h.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <h2 className={styles.formTitle}>Envoyez-nous un message</h2>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="nom">Nom complet *</label>
                    <input
                      className={`${styles.input} ${errors.nom ? styles.inputError : ""}`}
                      id="nom"
                      name="nom"
                      type="text"
                      maxLength={100}
                      placeholder="Jean Dupont"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                    {errors.nom && <span className={styles.fieldErrorMsg}>{errors.nom}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email *</label>
                    <input
                      className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                      id="email"
                      name="email"
                      type="email"
                      maxLength={254}
                      placeholder="jean.dupont@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className={styles.fieldErrorMsg}>{errors.email}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">
                      Message *
                      <span className={styles.charCount}>{formData.message.length}/2000</span>
                    </label>
                    <textarea
                      className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                      id="message"
                      name="message"
                      rows={6}
                      maxLength={2000}
                      placeholder="Votre message..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className={styles.fieldErrorMsg}>{errors.message}</span>}
                  </div>

                  {status === "error" && (
                    <p className={styles.errorMsg}>
                      Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                    </p>
                  )}

                  <button
                    type="submit"
                    className={`btn-primary ${styles.submit}`}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Envoi..." : "Envoyer le message"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
