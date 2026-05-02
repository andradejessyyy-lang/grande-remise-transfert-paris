/**
 * Services data — single source of truth for both /services and home preview.
 */
import type { LucideIcon } from "lucide-react";
import { Plane, CalendarClock, Crown } from "lucide-react";

export type Service = {
  slug: string;
  index: string; // editorial number, e.g. "01"
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string; // 1 sentence shown in cards
  description: string; // longer, used on /services page
  bullets: string[]; // included items
};

export const services: Service[] = [
  {
    slug: "transfert-gare-aeroport",
    index: "01",
    icon: Plane,
    title: "Transfert Gare & Aéroport",
    shortTitle: "Transferts",
    tagline:
      "Accueil personnalisé, suivi de vol, prise en charge sans attente — Paris et Île-de-France.",
    description:
      "Notre service de transfert privé couvre tous les aéroports parisiens (CDG, Orly, Le Bourget, Beauvais) et les principales gares (Gare du Nord, Gare de Lyon, Montparnasse, Saint-Lazare, Austerlitz, Est). Suivi de vol/train automatique, accueil avec pancarte personnalisée, bagages pris en charge.",
    bullets: [
      "Suivi de vol/train automatique",
      "Accueil avec pancarte personnalisée",
      "60 minutes d'attente offertes (aéroport)",
      "Bagages pris en charge",
      "Eau minérale, presse du jour",
      "Tarif forfaitaire — pas de surprise",
    ],
  },
  {
    slug: "mise-a-disposition",
    index: "02",
    icon: CalendarClock,
    title: "Mise à disposition",
    shortTitle: "Mise à dispo",
    tagline:
      "Un chauffeur dédié pour vos rendez-vous, à l'heure ou à la demi-journée.",
    description:
      "Idéal pour vos déplacements professionnels, shopping, visites client ou tournées Paris intra-muros. Vous gardez le contrôle de votre planning ; nous gardons le contrôle de la route. Forfait flexible 2h, demi-journée (4h) ou journée complète (8h).",
    bullets: [
      "Forfaits 2h / 4h / 8h",
      "Chauffeur en costume sombre",
      "Véhicule à votre disposition exclusive",
      "Itinéraires modifiables en temps réel",
      "Discrétion absolue",
      "WiFi à bord (sur demande)",
    ],
  },
  {
    slug: "evenement-vip",
    index: "03",
    icon: Crown,
    title: "Événement VIP — Journée complète",
    shortTitle: "VIP",
    tagline:
      "Mariage, soirée, conférence, tournée VIP — un service sur mesure, du matin au soir.",
    description:
      "Pour vos événements d'exception : mariages, soirées privées, séminaires, lancements produit, tournées artistes. Coordination préalable avec votre équipe, repérages, planning détaillé, chauffeur formé aux protocoles VIP. Possibilité de flotte multi-véhicules.",
    bullets: [
      "Repérage et coordination préalable",
      "Chauffeur formé protocoles VIP",
      "Flotte multi-véhicules sur demande",
      "Eau, champagne, fleurs (en option)",
      "Confidentialité contractuelle",
      "Disponibilité 24/24 le jour J",
    ],
  },
];
