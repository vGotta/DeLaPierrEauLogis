"use client"
import { useState } from "react"
import { services } from "@/lib/services"
import styles from "./DevisForm.module.css"

type Status = "idle" | "loading" | "success" | "error"
type Fields = typeof EMPTY_FORM
type FormErrors = Partial<Record<keyof Fields, string>>

const EMPTY_FORM = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  service: "",
  surface: "",
  ville: "",
  message: "",
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}$/

function validate(data: Fields): FormErrors {
  const e: FormErrors = {}
  if (!data.prenom.trim()) e.prenom = "Prénom requis"
  if (!data.nom.trim()) e.nom = "Nom requis"
  if (!data.email.trim() || !EMAIL_RE.test(data.email)) e.email = "Adresse email invalide"
  if (!data.service) e.service = "Veuillez sélectionner un service"
  if (!data.ville.trim()) e.ville = "Ville requise"
  if (!data.message.trim()) e.message = "Description requise"
  if (data.message.length > 2000) e.message = "2000 caractères maximum"
  return e
}

export default function DevisForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [formData, setFormData] = useState<Fields>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof Fields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fieldErrors = validate(formData)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "devis" }),
      })
      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>✓</span>
        <h3>Demande envoyée !</h3>
        <p>Nous avons bien reçu votre demande de devis. Nous vous recontacterons dans les plus brefs délais.</p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Identité */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Vos coordonnées</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="prenom">Prénom *</label>
            <input
              className={`${styles.input} ${errors.prenom ? styles.inputError : ""}`}
              id="prenom"
              name="prenom"
              type="text"
              maxLength={100}
              placeholder="Jean"
              value={formData.prenom}
              onChange={handleChange}
            />
            {errors.prenom && <span className={styles.fieldErrorMsg}>{errors.prenom}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="nom">Nom *</label>
            <input
              className={`${styles.input} ${errors.nom ? styles.inputError : ""}`}
              id="nom"
              name="nom"
              type="text"
              maxLength={100}
              placeholder="Dupont"
              value={formData.nom}
              onChange={handleChange}
            />
            {errors.nom && <span className={styles.fieldErrorMsg}>{errors.nom}</span>}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email *</label>
            <input
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              id="email"
              name="email"
              type="email"
              maxLength={254}
              placeholder="jean.dupont@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className={styles.fieldErrorMsg}>{errors.email}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="telephone">Téléphone</label>
            <input
              className={styles.input}
              id="telephone"
              name="telephone"
              type="tel"
              maxLength={20}
              placeholder="06 XX XX XX XX"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
        </div>
      </fieldset>

      {/* Projet */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Votre projet</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="service">Type de service *</label>
            <select
              className={`${styles.input} ${errors.service ? styles.inputError : ""}`}
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Sélectionnez un service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.title}</option>
              ))}
              <option value="autre">Autre / Je ne sais pas encore</option>
            </select>
            {errors.service && <span className={styles.fieldErrorMsg}>{errors.service}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="surface">Surface approximative (m²)</label>
            <input
              className={styles.input}
              id="surface"
              name="surface"
              type="text"
              maxLength={50}
              placeholder="ex: 80 m²"
              value={formData.surface}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="ville">Ville / Département *</label>
          <input
            className={`${styles.input} ${errors.ville ? styles.inputError : ""}`}
            id="ville"
            name="ville"
            type="text"
            maxLength={100}
            placeholder="Paris (75), Lyon (69)..."
            value={formData.ville}
            onChange={handleChange}
          />
          {errors.ville && <span className={styles.fieldErrorMsg}>{errors.ville}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">
            Description du projet *
            <span className={styles.charCount}>{formData.message.length}/2000</span>
          </label>
          <textarea
            className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
            id="message"
            name="message"
            rows={5}
            maxLength={2000}
            placeholder="Décrivez votre projet : nature des travaux, contraintes particulières, délais souhaités..."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className={styles.fieldErrorMsg}>{errors.message}</span>}
        </div>
      </fieldset>

      {status === "error" && (
        <p className={styles.errorMsg}>
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
        </p>
      )}

      <button
        type="submit"
        className={`btn-primary ${styles.submit}`}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
      </button>

      <p className={styles.mention}>* Champs obligatoires — Réponse sous 48h</p>
    </form>
  )
}
