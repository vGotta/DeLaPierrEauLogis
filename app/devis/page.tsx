import { Metadata } from "next"
import { pagesMetadata } from "@/lib/metadata"
import DevisForm from "@/components/DevisForm"
import styles from "@/styles/devis.module.css"

export const metadata: Metadata = pagesMetadata.devis

export default function DevisPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <p className={styles.eyebrow}>Gratuit & sans engagement</p>
          <h1 className="section-title">
            Demande de <span>devis</span>
          </h1>
          <p className={styles.intro}>
            Remplissez ce formulaire et nous vous recontacterons sous 48h pour étudier votre projet ensemble.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.formWrap}>
              <DevisForm />
            </div>
            <aside className={styles.aside}>
              <div className={styles.asideCard}>
                <h2 className={styles.asideTitle}>Comment ça marche ?</h2>
                <ol className={styles.steps}>
                  {[
                    { num: "1", text: "Vous remplissez le formulaire avec les détails de votre projet." },
                    { num: "2", text: "Nous étudions votre demande et vous recontactons sous 48h." },
                    { num: "3", text: "Nous convenons d'un rendez-vous sur place si nécessaire." },
                    { num: "4", text: "Vous recevez votre devis détaillé, clair et sans surprise." },
                  ].map((step) => (
                    <li key={step.num} className={styles.step}>
                      <span className={styles.stepNum}>{step.num}</span>
                      <span className={styles.stepText}>{step.text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.asideCard}>
                <h2 className={styles.asideTitle}>Besoin d&apos;aide ?</h2>
                <p className={styles.asideText}>
                  Vous préférez nous écrire directement ? Contactez-nous par email.
                </p>
                <a
                  href="mailto:delapierreaulogis@gmail.com"
                  className={styles.emailLink}
                >
                  delapierreaulogis@gmail.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
