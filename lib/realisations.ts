export interface Realisation {
  id: string
  title: string
  category: "maconnerie" | "pierre" | "agro" | "vrd"
  categoryLabel: string
  image: string
  description?: string
}

export const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "maconnerie", label: "Maçonnerie générale" },
  { id: "pierre", label: "Taille de pierre & enrochement" },
  { id: "agro", label: "Agroalimentaire" },
  { id: "vrd", label: "Travaux publics & viabilisation" },
] as const

export const realisations: Realisation[] = [
  // ── MAÇONNERIE GÉNÉRALE ──────────────────────────────
  {
    id: "service-maconnerie-01",
    title: "Maçonnerie générale",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/services/maconnerie.jpeg",
  },
  {
    id: "villa-construction-01",
    title: "Construction villa — gros œuvre & soutènement",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/villa-construction-01.jpeg",
  },
  {
    id: "dalle-ferraillage-01",
    title: "Ferraillage dalle béton",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/dalle-ferraillage-01.jpg",
  },
  {
    id: "piscine-vue-aerienne-01",
    title: "Piscine ovale — vue aérienne",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/piscine-vue-aerienne-01.jpeg",
  },
  {
    id: "piscine-en-cours-01",
    title: "Piscine rectangulaire — en cours",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/piscine-en-cours-01.jpg",
  },

  // ── TAILLE DE PIERRE & ENROCHEMENT ───────────────────
  {
    id: "service-pierre-01",
    title: "Taille de pierre & enrochement",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/services/pierre.jpeg",
  },
  {
    id: "cave-ronde-finie-01",
    title: "Cave ronde en pierre sèche — terminée",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/cave-ronde-finie-01.jpeg",
  },
  {
    id: "cave-ronde-chantier-01",
    title: "Cave ronde en pierre — en cours",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/cave-ronde-en-cours-01.jpg",
  },
  {
    id: "batiment-pierre-chantier-01",
    title: "Bâtiment en pierre taillée — en cours",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/batiment-pierre-en-cours-01.jpg",
  },
  {
    id: "mur-pierre-agglo-01",
    title: "Mur en pierre — structure agglo",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/mur-pierre-agglo-01.jpeg",
  },
  {
    id: "mur-soutenement-chemin-01",
    title: "Mur de soutènement — chemin d'accès",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/mur-soutenement-chemin-01.jpg",
  },
  {
    id: "gros-plan-pierre-01",
    title: "Mur en pierre sèche — détail",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/gros-plan-pierre-seche-01.jpg",
  },
  {
    id: "douche-pierre-dallage-01",
    title: "Douche extérieure — pierre et dallage",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/douche-exterieure-pierre-01.jpg",
  },
  {
    id: "terrasse-piscine-pierre-01",
    title: "Terrasse piscine — mur en pierre",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/terrasse-piscine-pierre-01.jpg",
  },

  // ── AGROALIMENTAIRE ──────────────────────────────────
  {
    id: "service-agro-01",
    title: "Aménagement agroalimentaire",
    category: "agro",
    categoryLabel: "Agroalimentaire",
    image: "/images/services/agro.jpeg",
  },
  {
    id: "couloir-industriel-01",
    title: "Couloir industriel — chambres froides",
    category: "agro",
    categoryLabel: "Agroalimentaire",
    image: "/images/realisations/couloir-industriel-01.jpeg",
  },
  {
    id: "chambre-froide-finie-01",
    title: "Chambre froide — terminée",
    category: "agro",
    categoryLabel: "Agroalimentaire",
    image: "/images/realisations/chambre-froide-finie-01.jpeg",
  },
  {
    id: "chambre-froide-montage-01",
    title: "Chambre froide — montage panneaux",
    category: "agro",
    categoryLabel: "Agroalimentaire",
    image: "/images/realisations/chambre-froide-montage-01.jpeg",
  },

  // ── VIABILISATION ─────────────────────────────────────
  {
    id: "service-vrd-01",
    title: "Viabilisation de terrain",
    category: "vrd",
    categoryLabel: "Travaux publics & viabilisation",
    image: "/images/services/vrd.jpg",
  },
  {
    id: "vrd-jacuzzi-02",
    title: "Jacuzzi — en cours (2)",
    category: "vrd",
    categoryLabel: "Travaux publics & viabilisation",
    image: "/images/realisations/jacuzzi-en-cour-02.jpeg",
  },

  // ── MAÇONNERIE — photos supplémentaires ──────────────
  {
    id: "agrandissement-01",
    title: "Agrandissement — maçonnerie",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/agrandissement.jpeg",
  },
  {
    id: "coffrage-01",
    title: "Coffrage béton",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/caufrage-01.jpg",
  },
  {
    id: "dalle-02",
    title: "Dalle béton",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/dalle-01.jpg",
  },
  {
    id: "dalle-ferraillage-02",
    title: "Ferraillage dalle béton (2)",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/dalle-feraillage-02.jpg",
  },
  {
    id: "dalle-finie-01",
    title: "Dalle béton terminée",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/dalle-finie-01.jpg",
  },
  {
    id: "piscine-debut-01",
    title: "Piscine — début de chantier",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/debut-piscine-01.jpeg",
  },
  {
    id: "ferraillage-02",
    title: "Ferraillage béton armé",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/ferraillage-01.jpg",
  },
  {
    id: "jacuzzi-en-cours-01",
    title: "Jacuzzi — en cours (1)",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/jacuzzi-en-cour-01.jpg",
  },
  {
    id: "jacuzzi-en-cours-02",
    title: "Jacuzzi — en cours (2)",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/jacuzzi-en-cour-02.jpeg",
  },
  {
    id: "jacuzzi-fini-01",
    title: "Jacuzzi terminé",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/jacuzzi-fini-01.jpeg",
  },
  {
    id: "jacuzzi-02",
    title: "Jacuzzi encastré",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/jacuzzi.jpeg",
  },
  {
    id: "mur-fini-01",
    title: "Mur en agglo — terminé",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/mur-fini-01.jpg",
  },
  {
    id: "piscine-vue-aerienne-02",
    title: "Piscine ovale — vue aérienne (2)",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/piscine-vue-aerienne-02.jpeg",
  },
  {
    id: "soudure-ferraillage-01",
    title: "Ferraillage — soudure béton armé",
    category: "maconnerie",
    categoryLabel: "Maçonnerie générale",
    image: "/images/realisations/soudure-01.jpg",
  },

  // ── PIERRE — photos supplémentaires ──────────────────
  {
    id: "porte-pierre-01",
    title: "Ouverture en pierre taillée",
    category: "pierre",
    categoryLabel: "Taille de pierre & enrochement",
    image: "/images/realisations/porte-01.jpg",
  },
]

export function getRealisationsByCategory(category: string): Realisation[] {
  if (category === "all") return realisations
  return realisations.filter((r) => r.category === category)
}
