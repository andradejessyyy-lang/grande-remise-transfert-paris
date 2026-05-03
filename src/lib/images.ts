/**
 * Image catalogue — Unsplash CDN URLs used as production-quality placeholders
 * until the agency's own photo shoot is delivered.
 *
 * All photos are Unsplash royalty-free. Replace with the agency's CDN before
 * launch. Each entry includes a French alt text for accessibility.
 *
 * Tip: append `?w=1920&q=80&auto=format&fit=crop` to URLs to get optimised
 * resolutions; Next/Image will further size them via the deviceSizes config.
 */

export const paris = {
  // Place de la Concorde / Champs-Élysées — golden hour, dramatic
  hero: {
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=2400&q=80&auto=format&fit=crop",
    alt: "La Tour Eiffel illuminée au crépuscule, vue depuis le Trocadéro",
  },
  // Arc de Triomphe vu depuis les Champs-Élysées (Wikimedia Commons, local).
  // Local file = no remote dependency, content guaranteed.
  arcDeTriomphe: {
    src: "/paris/arc-de-triomphe.jpg",
    alt: "L'Arc de Triomphe vu depuis l'avenue des Champs-Élysées",
  },
  // Photo dédiée pour le hero de la page /services (image fournie par l'agence).
  // Ancien fichier (Champs-Élysées Wikimedia) archivé dans /paris/originals/
  champsElysees: {
    src: "/paris/services-hero.avif",
    alt: "Visuel hero — page services",
  },
  // Place Vendôme / Opéra elegance
  placeVendome: {
    src: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=2000&q=80&auto=format&fit=crop",
    alt: "Avenue parisienne au coucher du soleil",
  },
  // Tour Eiffel close-up
  tourEiffel: {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=2000&q=80&auto=format&fit=crop",
    alt: "La Tour Eiffel de nuit",
  },
  // Pont Alexandre III — détail des sculptures dorées (Beaux-Arts Paris).
  // (Anciennement "haussmann" — clé conservée pour ne pas casser les imports,
  // mais la photo est en local et garantie.)
  haussmann: {
    src: "/paris/pont-alexandre-iii.jpg",
    alt: "Détail sculpté et doré du Pont Alexandre III à Paris",
  },
  // Aérogare 2E de Roissy CDG (architecture en arche bois — local).
  airport: {
    src: "/paris/aeroport-cdg.jpg",
    alt: "Aérogare 2 de l'Aéroport Roissy Charles-de-Gaulle",
  },
  // Chauffeur in suit + Mercedes V-Class at Disneyland Paris.
  // Local production photo — no Unsplash dependency.
  chauffeur: {
    src: "/services/mise-a-disposition.webp",
    alt: "Chauffeur privé en costume devant un van Mercedes Classe V — Disneyland Paris",
  },
  // Galerie des Glaces, Château de Versailles (local).
  event: {
    src: "/paris/versailles-galerie-glaces.jpg",
    alt: "Galerie des Glaces du Château de Versailles — événement VIP",
  },
};

export const cars = {
  // Black luxury sedan, three-quarter view — Eco / Affaires
  berlineEco: {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop",
    alt: "Berline noire haut de gamme garée en ville",
  },
  // Black Mercedes E-Class style — Première / SUV
  mercedesPremium: {
    src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1600&q=80&auto=format&fit=crop",
    alt: "Mercedes Classe E noire en livrée chauffeur",
  },
  // Black SUV (Mercedes G-Class style) — Première / SUV variant
  suv: {
    src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80&auto=format&fit=crop",
    alt: "SUV noir haut de gamme",
  },
  // Mercedes V-Class style luxury van — Van Premium
  van: {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600&q=80&auto=format&fit=crop",
    alt: "Van Mercedes noir, configuration salon",
  },
  // Luxury car interior — used as alt visuals
  interior: {
    src: "https://images.unsplash.com/photo-1503088604325-5b1efe1d10e7?w=1600&q=80&auto=format&fit=crop",
    alt: "Habitacle cuir d'une berline premium",
  },
};
