import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/services"
import { realisations } from "@/lib/realisations"
import { SITE_TAGLINE, ZONE } from "@/lib/constants"
import ServiceCard from "@/components/ServiceCard"
import styles from "@/styles/home.module.css"

const PREVIEW_IDS = [
  "villa-construction-01",
  "cave-ronde-finie-01",
  "chambre-froide-finie-01",
  "terrasse-piscine-pierre-01",
  "jacuzzi-fini-01",
  "service-vrd-01",
]
const previewPhotos = PREVIEW_IDS.map((id) => realisations.find((r) => r.id === id)!)

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Maçonnerie · BTP · Spécialités techniques</p>
          <h1 className={styles.heroTitle}>
            De la <span>Pierre</span><br />
            à votre <span>Logis</span>
          </h1>
          <p className={styles.heroSubtitle}>{SITE_TAGLINE}</p>
          <div className={styles.heroCtas}>
            <Link href="/services" className="btn-primary">Nos services</Link>
            <Link href="/devis" className="btn-outline">Devis gratuit</Link>
          </div>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>Domaines d&apos;expertise</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>+15</span>
            <span className={styles.statLabel}>Ans d&apos;expérience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>🇫🇷</span>
            <span className={styles.statLabel}>{ZONE}</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${styles.servicesSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Nos <span>expertises</span></h2>
            <p className={styles.sectionIntro}>
              Du particulier au professionnel, du simple chantier aux installations techniques les plus complexes.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className={styles.servicesMore}>
            <Link href="/services" className="btn-outline">Voir tous nos services</Link>
          </div>
        </div>
      </section>

      {/* POINTS FORTS */}
      <section className={styles.strengthsSection}>
        <div className="container">
          <h2 className="section-title" style={{ color: "white" }}>
            Pourquoi nous <span>choisir</span> ?
          </h2>
          <div className={styles.strengthsGrid}>
            {[
              { icon: "🔧", title: "Polyvalence totale", desc: "Du particulier au professionnel, neuf et rénovation, intérieur et extérieur." },
              { icon: "🏭", title: "Double compétence", desc: "Maçonnerie classique ET installations agroalimentaires spécialisées." },
              { icon: "📋", title: "Projet clé en main", desc: "Gestion complète : bâtiment, réseaux, extérieurs." },
              { icon: "✅", title: "Normes exigeantes", desc: "Expérience en milieux techniques : hygiène, sécurité, froid alimentaire." },
            ].map((item) => (
              <div key={item.title} className={styles.strengthCard}>
                <span className={styles.strengthIcon}>{item.icon}</span>
                <h3 className={styles.strengthTitle}>{item.title}</h3>
                <p className={styles.strengthDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉALISATIONS PREVIEW */}
      <section className={`section ${styles.realizationsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Nos <span>réalisations</span></h2>
            <p className={styles.sectionIntro}>Un aperçu de nos chantiers récents.</p>
          </div>
          <div className={styles.galleryGrid}>
            {previewPhotos.map((r) => (
              <Link key={r.id} href="/realisations" className={styles.galleryItem}>
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className={styles.galleryImage}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </Link>
            ))}
          </div>
          <div className={styles.servicesMore}>
            <Link href="/realisations" className="btn-primary">Voir toutes les réalisations</Link>
          </div>
        </div>
      </section>

      {/* CTA DEVIS */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div>
              <h2 className={styles.ctaTitle}>Un projet en tête ?</h2>
              <p className={styles.ctaText}>Contactez-nous pour un devis gratuit, rapide et sans engagement.</p>
            </div>
            <Link href="/devis" className="btn-primary">demander un devis gratuit</Link>
          </div>
        </div>
      </section>
    </>
  )
}
