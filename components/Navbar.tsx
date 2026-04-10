"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo/logo.jpeg"
            alt={SITE_NAME}
            width={52}
            height={52}
            className={styles.logoImg}
          />
          <span className={styles.logoText}>
            DeLaPierr<span>Eau</span>Logis
          </span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/devis" className={`btn-primary ${styles.navCta}`} onClick={() => setMenuOpen(false)}>
            Devis gratuit
          </Link>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? styles.burgerOpen : ""} />
          <span className={menuOpen ? styles.burgerOpen : ""} />
          <span className={menuOpen ? styles.burgerOpen : ""} />
        </button>
      </div>
    </header>
  )
}
