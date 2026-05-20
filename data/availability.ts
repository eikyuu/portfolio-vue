export type AvailabilityStatus = 'available' | 'busy'

export interface Availability {
  status: AvailabilityStatus
  /**
   * Date ISO (yyyy-mm-dd) à partir de laquelle je serai de nouveau disponible.
   * Utilisée uniquement quand status === 'busy' pour afficher
   * « Carnet plein — dispo dès le ... » dans la variante étendue.
   */
  availableFrom?: string
}

/**
 * Pour changer ton statut : édite ce fichier puis push.
 * - status: 'available' → bullet vert pulsant + texte de dispo
 * - status: 'busy'      → bullet rouge fixe + (optionnel) date de retour
 */
export const availability: Availability = {
  status: 'available',
  // availableFrom: '2026-09-01',
}
