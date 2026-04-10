import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { services, getServiceBySlug } from "@/lib/services"
import styles from "@/styles/services.module.css"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.shortDesc,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const otherServices = services.filter((s) => s.slug !== service.slug)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <Link href="/services" className={styles.back}>← Tous les services</Link>
          <h1 className="section-title">
            <span>{service.title}</span>
          </h1>
          <p className={styles.intro}>{service.shortDesc}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            <div>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className={styles.detailContent}>
              {service.description.map((para, i) => (
                <p key={i} className={styles.detailDesc}>{para}</p>
              ))}
              <div className={styles.detailList}>
                <h2 className={styles.detailListTitle}>Ce que nous réalisons</h2>
                <ul>
                  {service.details.map((item) => (
                    <li key={item} className={styles.detailItem}>
                      <span className={styles.detailCheck}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/devis" className="btn-primary" style={{ marginTop: "2rem" }}>
                demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className={`section ${styles.otherServices}`}>
        <div className="container">
          <h2 className="section-title">Nos autres <span>expertises</span></h2>
          <div className={styles.otherGrid}>
            {otherServices.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={styles.otherCard}>
                <strong>{s.title}</strong>
                <p>{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
