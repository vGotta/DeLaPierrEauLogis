import { Metadata } from "next"
import { services } from "@/lib/services"
import { pagesMetadata } from "@/lib/metadata"
import ServiceCard from "@/components/ServiceCard"
import styles from "@/styles/services.module.css"

export const metadata: Metadata = pagesMetadata.services

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <p className={styles.eyebrow}>Ce que nous faisons</p>
          <h1 className="section-title">
            Nos <span>services</span>
          </h1>
          <p className={styles.intro}>
            Une expertise polyvalente, du gros œuvre classique aux installations techniques les plus exigeantes.
            Du particulier au professionnel, partout en France.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
