import { availability, type Availability } from '~/data/availability'

/**
 * Source unique de vérité pour le statut de disponibilité.
 * Aujourd'hui : constante TypeScript. Si on bascule plus tard sur une env var
 * ou sur Supabase, on ne change que ce fichier.
 */
export const useAvailability = (): Availability => availability
