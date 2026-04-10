"use client"
import { useState } from "react"
import Image from "next/image"
import { realisations, CATEGORIES } from "@/lib/realisations"
import styles from "@/styles/gallery.module.css"

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? realisations
    : realisations.filter((r) => r.category === activeCategory)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <p className={styles.eyebrow}>Notre travail</p>
          <h1 className="section-title">
            Nos <span>réalisations</span>
          </h1>
          <p className={styles.intro}>
            Chaque chantier raconte une histoire. Découvrez nos réalisations,
            des maisons individuelles aux installations industrielles.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filtres */}
          <div className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Compteur */}
          <p className={styles.count}>
            {filtered.length} réalisation{filtered.length > 1 ? "s" : ""}
          </p>

          {/* Grille */}
          <div className={styles.grid}>
            {filtered.map((item) => (
              <div key={item.id} className={styles.item}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.itemImg}
                />
                <div className={styles.overlay}>
                  <span className={styles.overlayTitle}>{item.title}</span>
                  <span className={styles.overlayTag}>{item.categoryLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
