export interface Service {
  slug: string
  title: string
  shortDesc: string
  description: string[]
  details: string[]
  icon: string
  image: string
}

export const services: Service[] = [
  {
    slug: "maconnerie-generale",
    title: "Maçonnerie générale",
    shortDesc: "Réalisation de murs, fondations, dalles et travaux de maçonnerie du gros œuvre à la finition.",
    description: [
      "Spécialisé en maçonnerie générale, j’interviens pour la réalisation de murs, fondations, dalles et travaux du gros œuvre à la finition.",
      "Que ce soit en construction neuve ou en rénovation, chaque chantier est étudié pour garantir solidité, durabilité et adaptation au terrain.",
      "Mon objectif est simple : proposer des solutions fiables, adaptées à votre projet et à votre budget, sans compromis sur la qualité.",
    ],
    details: [
      "Murs en agglos, clôtures et soutènement",
      "Fondations et dalles béton",
      "Ouvertures et modifications de structure",
      "Travaux de gros œuvre en neuf et rénovation",
      "Reprise et renforcement de maçonnerie existante",
      "Adaptation aux contraintes du terrain (accès difficile, pente, etc.)",
    ],
    icon: "/images/icons/maconnerie.svg",
    image: "/images/services/maconnerie.jpeg",
  },
  {
    slug: "travaux-publics-viabilisation",
    title: "Travaux publics & viabilisation",
    shortDesc: "Viabilisation de terrain et travaux de réseaux : eau, électricité, PTT, raccordements et aménagements extérieurs.",
    description: [
      "Spécialisé en travaux publics et viabilisation, j’interviens pour préparer et rendre un terrain prêt à bâtir.",
      "Raccordements aux réseaux (eau, électricité, PTT), terrassement et aménagements extérieurs : chaque chantier est réalisé en tenant compte des contraintes techniques et de l’environnement.",
      "Mon objectif est de proposer une solution claire, fiable et adaptée à votre projet, sans mauvaise surprise.",
      "Chaque terrain est différent. J’analyse les contraintes (accès, pente, réseaux existants) afin de mettre en place une solution adaptée dès le départ.",
      "Une viabilisation bien réalisée permet d’éviter des problèmes et des coûts supplémentaires par la suite.",
    ],
    details: [
      "Viabilisation complète de terrain",
      "Raccordements eau, électricité et PTT",
      "Création de tranchées techniques",
      "Terrassement et préparation du terrain",
      "Aménagements extérieurs et accès chantier",
      "Intervention en accès difficile",
    ],
    icon: "/images/icons/vrd.svg",
    image: "/images/services/vrd.jpg",
  },
  {
    slug: "agroalimentaire",
    title: "Agroalimentaire",
    shortDesc: "Aménagement de locaux professionnels dans le respect des normes sanitaires et techniques.",
    description: [
      "J’interviens sur des chantiers agroalimentaires et techniques en collaboration avec des entreprises spécialisées, pour la réalisation et l’aménagement de locaux professionnels.",
      "Construction de chambres froides positives et négatives, création de laboratoires (boulangerie, médical…) et intervention sur cuisines professionnelles : chaque chantier est réalisé dans le respect des contraintes sanitaires et techniques.",
      "Mon rôle est d’assurer une mise en œuvre terrain propre, précise et fiable, en coordination avec les différents intervenants du projet.",
      "Ce type de chantier nécessite une organisation rigoureuse et une parfaite coordination entre les différents corps de métier.",
      "J’interviens dans ce cadre avec une exigence constante sur la qualité d’exécution, la propreté et le respect des normes.",
    ],
    details: [
      "Montage de chambres froides positives et négatives",
      "Création et aménagement de laboratoires (boulangerie, médical…)",
      "Intervention sur cuisines professionnelles (écoles, hôpitaux, collectivités…)",
      "Travaux en environnement sensible ou occupé",
      "Mise en conformité des espaces techniques",
      "Travaux réalisés en coordination avec les autres corps de métier",
    ],
    icon: "/images/icons/agro.svg",
    image: "/images/services/agro.jpeg",
  },
  {
    slug: "taille-de-pierre-enrochement",
    title: "Taille de pierre & enrochement",
    shortDesc: "Réalisation d'ouvrages en pierre, enrochement et aménagements extérieurs solides et esthétiques.",
    description: [
      "Spécialisé en taille de pierre et enrochement, j’interviens pour la réalisation d’ouvrages solides, durables et intégrés à leur environnement.",
      "Que ce soit pour du soutènement, de la stabilisation de terrain ou de l’aménagement extérieur, chaque projet est étudié pour allier efficacité technique et rendu esthétique.",
      "L’objectif est de créer des ouvrages qui tiennent dans le temps tout en s’intégrant naturellement au terrain.",
      "Chaque terrain a ses contraintes. Je m’adapte à la nature du sol, à la pente et à l’environnement pour proposer une solution adaptée et durable.",
      "Un bon enrochement ou un ouvrage en pierre, c’est avant tout une question de mise en œuvre et d’expérience terrain.",
    ],
    details: [
      "Enrochement de soutènement",
      "Stabilisation de terrain en pente",
      "Aménagements extérieurs en pierre",
      "Création de murs en pierre",
      "Intégration paysagère",
      "Intervention en terrain difficile",
    ],
    icon: "/images/icons/pierre.svg",
    image: "/images/services/pierre.jpeg",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
