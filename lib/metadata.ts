import { Metadata } from "next"
import { SITE_NAME, SITE_DESCRIPTION } from "./constants"

export const defaultMetadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "maçonnerie",
    "construction",
    "BTP",
    "rénovation",
    "travaux publics",
    "VRD",
    "agroalimentaire",
    "chambres froides",
    "revêtements sol",
    "France",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

export const pagesMetadata: Record<string, Metadata> = {
  "a-propos": {
    title: "À propos",
    description: "Découvrez DeLaPierrEauLogis, entreprise polyvalente du BTP intervenant partout en France.",
  },
  services: {
    title: "Nos services",
    description:
      "Maçonnerie, travaux publics, agroalimentaire, chambres froides",
  },
  realisations: {
    title: "Nos réalisations",
    description: "Galerie de nos chantiers : maisons, laboratoires, cuisines professionnelles et plus encore.",
  },
  devis: {
    title: "Demande de devis",
    description: "Demandez un devis gratuit pour votre projet de construction ou rénovation.",
  },
  contact: {
    title: "Contact",
    description: "Contactez DeLaPierrEauLogis pour votre projet BTP partout en France.",
  },
}
