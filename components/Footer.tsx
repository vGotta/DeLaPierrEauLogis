import Link from "next/link"
import { SITE_NAME, CONTACT_EMAIL, ZONE, NAV_LINKS } from "@/lib/constants"
import styles from "./Footer.module.css"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.brandName}>
            DeLaPierr<span>Eau</span>Logis
          </p>
          <p className={styles.tagline}>
            Maçonnerie · Travaux publics · Agroalimentaire
          </p>
          <p className={styles.zone}>📍 {ZONE}</p>
        </div>

        <nav className={styles.links}>
          <p className={styles.colTitle}>Navigation</p>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.contact}>
          <p className={styles.colTitle}>Contact</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.link}>
            {CONTACT_EMAIL}
          </a>
          <Link href="/devis" className="btn-primary" style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
            demander un devis gratuit
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} {SITE_NAME} — Tous droits réservés</p>
      </div>
    </footer>
  )
}
