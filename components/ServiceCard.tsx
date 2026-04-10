import Link from "next/link"
import Image from "next/image"
import { Service } from "@/lib/services"
import styles from "./ServiceCard.module.css"

interface Props {
  service: Service
}

export default function ServiceCard({ service }: Props) {
  return (
    <Link href={`/services/${service.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.desc}>{service.shortDesc}</p>
        <span className={styles.cta}>Découvrir →</span>
      </div>
    </Link>
  )
}
