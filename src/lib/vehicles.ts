/**
 * Vehicle catalog — single source of truth.
 * Used by /vehicules, /tarifs and the home preview.
 */
import { cars } from "@/lib/images";

export type VehicleGamme = "eco" | "suv" | "van";

export type Vehicle = {
  gamme: VehicleGamme;
  name: string; // commercial name, e.g. "Mercedes Classe E"
  shortName: string; // tag, e.g. "Classe E"
  passengers: number;
  luggage: number;
  examples: string[]; // model examples for the gamme
  description: string;
  highlights: string[];
  image: { src: string; alt: string };
};

export const vehicles: Vehicle[] = [
  {
    gamme: "eco",
    name: "Berline Affaires",
    shortName: "Affaires",
    passengers: 3,
    luggage: 2,
    examples: ["Peugeot 508", "Volkswagen Passat", "Skoda Superb"],
    description:
      "Berline confortable et discrète pour vos déplacements quotidiens. Idéale pour transferts aéroport seul ou en couple.",
    highlights: ["Climatisation", "Eau minérale", "Suivi de course par SMS"],
    image: cars.berlineEco,
  },
  {
    gamme: "suv",
    name: "Berline Première / SUV",
    shortName: "Première",
    passengers: 4,
    luggage: 3,
    examples: ["Mercedes Classe E", "BMW Série 5", "Audi A6", "Mercedes GLE"],
    description:
      "Allemandes haut de gamme pour transferts d'affaires et VIP. Cuir, finitions premium, tenue de route irréprochable.",
    highlights: [
      "Cuir nappa",
      "WiFi à bord",
      "Chargeurs USB-C",
      "Vitres teintées",
    ],
    image: cars.mercedesPremium,
  },
  {
    gamme: "van",
    name: "Van Premium",
    shortName: "Van",
    passengers: 7,
    luggage: 7,
    examples: ["Mercedes Classe V", "Mercedes Vito Tourer"],
    description:
      "Van haut de gamme pour familles, équipes et délégations. Configuration salon possible (sièges en vis-à-vis), volume bagages exceptionnel.",
    highlights: [
      "Configuration salon",
      "Climatisation 3 zones",
      "Tablette amovible",
      "Volume bagages XL",
    ],
    image: cars.van,
  },
];

/**
 * Pricing matrix — flat fares between vehicle gamme × destination.
 * All prices in EUR, tax inclusive (TTC).
 *
 * NOTE: These are TEMPLATE PLACEHOLDER values for showcase purposes.
 * Real fares should be set per agency and version-controlled here.
 */
export type Destination = {
  slug: string;
  label: string;
  type: "airport" | "station";
  zone: string;
};

export const destinations: Destination[] = [
  // The "Paris ↔ " prefix makes the bidirectional, Paris-centric nature of
  // the forfait explicit. The grid applies to trips from OR to Paris.
  { slug: "cdg", label: "Paris ↔ Aéroport Roissy CDG", type: "airport", zone: "T1·T2·T3" },
  { slug: "orly", label: "Paris ↔ Aéroport d'Orly", type: "airport", zone: "Sud·Ouest" },
  { slug: "lbg", label: "Paris ↔ Aéroport du Bourget", type: "airport", zone: "Aviation d'affaires" },
  { slug: "bva", label: "Paris ↔ Aéroport Beauvais", type: "airport", zone: "Oise" },
  { slug: "gdn", label: "Paris ↔ Gare du Nord", type: "station", zone: "Paris 10ᵉ" },
  { slug: "gdl", label: "Paris ↔ Gare de Lyon", type: "station", zone: "Paris 12ᵉ" },
  { slug: "mtp", label: "Paris ↔ Gare Montparnasse", type: "station", zone: "Paris 15ᵉ" },
  { slug: "stl", label: "Paris ↔ Gare Saint-Lazare", type: "station", zone: "Paris 8ᵉ" },
];

/**
 * Pricing grid (EUR TTC) keyed by `${destinationSlug}-${gamme}`.
 * For template/showcase only. Real values wired up by the agency.
 */
export const tarifs: Record<string, number> = {
  // CDG
  "cdg-eco": 75,
  "cdg-suv": 110,
  "cdg-van": 145,
  // Orly
  "orly-eco": 65,
  "orly-suv": 95,
  "orly-van": 125,
  // Le Bourget
  "lbg-eco": 70,
  "lbg-suv": 100,
  "lbg-van": 135,
  // Beauvais
  "bva-eco": 180,
  "bva-suv": 240,
  "bva-van": 290,
  // Gare du Nord
  "gdn-eco": 45,
  "gdn-suv": 70,
  "gdn-van": 95,
  // Gare de Lyon
  "gdl-eco": 45,
  "gdl-suv": 70,
  "gdl-van": 95,
  // Gare Montparnasse
  "mtp-eco": 50,
  "mtp-suv": 75,
  "mtp-van": 100,
  // Gare Saint-Lazare
  "stl-eco": 45,
  "stl-suv": 70,
  "stl-van": 95,
};

/**
 * Lookup helper used by the price simulator.
 * Returns null if the combination isn't in the grid.
 */
export function getFare(
  destinationSlug: string,
  gamme: VehicleGamme,
): number | null {
  return tarifs[`${destinationSlug}-${gamme}`] ?? null;
}
