/**
 * Testimonials — données de social proof.
 *
 * NOTE TEMPLATE : ces témoignages sont fictifs (mockup). Pour un vrai client,
 * remplacer par de VRAIS témoignages clients (avec accord écrit pour la
 * publication, idéalement avec photo).
 *
 * Trois profils représentatifs des 3 services :
 *   1. Cadre dirigeant (Mise à disposition / business)
 *   2. Voyageur international (Transferts aéroport)
 *   3. Mariés / événementiel (VIP événement)
 */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  context: string; // service utilisé
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Service impeccable pour mes RDV professionnels. Le chauffeur est ponctuel à la minute près, le véhicule toujours irréprochable. La discrétion à la française.",
    author: "Marc D.",
    role: "Directeur Commercial",
    context: "Mise à disposition · 3× / semaine",
  },
  {
    quote:
      "De Roissy à mon hôtel rue Saint-Honoré, accueil avec pancarte personnalisée et bagages pris en charge. Tarif fixé à la réservation, zéro surprise.",
    author: "Léa K.",
    role: "Voyageuse internationale",
    context: "Transfert CDG → Paris 1ᵉʳ",
  },
  {
    quote:
      "Pour notre mariage à Versailles, trois véhicules coordonnés au quart d'heure près. Le chauffeur principal a même attendu sous la pluie pour ouvrir la portière. Service royal.",
    author: "Sophie & Antoine",
    role: "Jeunes mariés",
    context: "Événement VIP · journée complète",
  },
];

/**
 * Stats agrégées (à mettre à jour au fil du temps).
 */
export const stats = [
  { value: "4.9/5", label: "Note Google · 250 avis" },
  { value: "10 000+", label: "Courses effectuées" },
  { value: "2014", label: "Fondation de l'agence" },
  { value: "98 %", label: "Clients qui reviennent" },
] as const;
