import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { pagesMetadata } from "@/lib/metadata"
import { ZONE } from "@/lib/constants"
import styles from "@/styles/about.module.css"

export const metadata: Metadata = pagesMetadata["a-propos"]

const VALUES = [
  {
    icon: "🏗️",
    title: "Polyvalence",
    desc: "Maçonnerie traditionnelle, travaux publics, agroalimentaire, chambres froides, revêtements techniques — une seule entreprise pour tous vos besoins.",
  },
  {
    icon: "🎯",
    title: "Précision",
    desc: "Chaque chantier est réalisé dans les règles de l'art, avec une attention particulière aux détails et aux normes en vigueur.",
  },
  {
    icon: "🤝",
    title: "Engagement",
    desc: "Respect des délais, transparence sur les coûts et suivi personnalisé du début à la fin du chantier.",
  },
  {
    icon: "🔬",
    title: "Expertise technique",
    desc: "Une double compétence rare : maçonnerie classique et installations agroalimentaires spécialisées aux normes sanitaires strictes.",
  },
]

const TIMELINE = [
  { year: "Début", label: "Premières armes dans la maçonnerie traditionnelle" },
  { year: "+5 ans", label: "Spécialisation en travaux publics et VRD" },
  { year: "+10 ans", label: "Développement de l'expertise agroalimentaire et chambres froides" },
  { year: "Aujourd'hui", label: "Intervention sur toute la France, tous types de chantiers" },
]

export default function AProposPage() {
  return (
    <div className={styles.page}>
      {/* EN-TÊTE */}
      <div className={styles.header}>
        <div className="container">
          <p className={styles.eyebrow}>Qui sommes-nous</p>
          <h1 className="section-title">
            L&apos;entreprise <span>DeLaPierrEauLogis</span>
          </h1>
          <p className={styles.intro}>
            Une entreprise du bâtiment polyvalente, fondée sur la passion du métier et l&apos;exigence du travail bien fait.
          </p>
        </div>
      </div>

      {/* PRÉSENTATION */}
      <section className={`section ${styles.presentationSection}`}>
        <div className="container">
          <div className={styles.presentationGrid}>
            <div className={styles.presentationText}>
              <h2 className={styles.subTitle}>
                Du gros œuvre aux <span>installations techniques</span>
              </h2>
              <p>
                DeLaPierrEauLogis est une entreprise de maçonnerie et de construction spécialisée dans les projets techniques et professionnels. Nous intervenons aussi bien sur des projets de construction neuve, de rénovation, de travaux publics que sur des installations agroalimentaires complexes.
              </p>
              <p>
                Notre force : une double compétence rare qui nous permet d&apos;accompagner aussi bien un particulier qui souhaite construire sa maison qu&apos;un professionnel ayant besoin d&apos;une cuisine collective ou d&apos;une chambre froide aux normes sanitaires les plus strictes.
              </p>
              <p>
                Nous intervenons <strong>{ZONE}</strong> et adaptons chaque chantier aux contraintes spécifiques du client et de l&apos;environnement.
              </p>
              <Link href="/services" className="btn-primary" style={{ marginTop: "1.5rem" }}>
                Découvrir nos services
              </Link>
            </div>
            <div className={styles.logoBlock}>
              <Image
                src="/images/logo/logo.jpeg"
                alt="Logo DeLaPierrEauLogis"
                width={280}
                height={280}
                className={styles.logoImg}
              />
              <div className={styles.logoCaption}>
                <span className={styles.logoCaptionName}>DeLaPierr<span>Eau</span>Logis</span>
                <span className={styles.logoCaptionSub}>Maçonnerie & Construction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className="section-title" style={{ color: "white" }}>
            Nos <span>valeurs</span>
          </h2>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <h2 className="section-title">Notre <span>parcours</span></h2>
          <div className={styles.timeline}>
            {TIMELINE.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div>
              <h2 className={styles.ctaTitle}>Travaillons ensemble</h2>
              <p className={styles.ctaText}>Un projet ? Contactez-nous pour un devis gratuit et sans engagement.</p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/devis" className="btn-primary">demander un devis gratuit</Link>
              <Link href="/contact" className="btn-outline">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
