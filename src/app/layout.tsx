import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import PhoneFab from "@/components/site/PhoneFab";

// Editorial luxury pairing #1 from ui-ux-pro-max skill.
// Playfair for headings, Inter for body — high contrast, premium feel.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grande Remise Transfert Paris · Chauffeur privé haut de gamme",
    template: "%s · Grande Remise Transfert Paris",
  },
  description:
    "Chauffeur privé à Paris. Transfert aéroport et gare, mise à disposition, événements VIP. Service haut de gamme, flotte premium, réservation 24/7.",
  metadataBase: new URL("https://grande-remise-transfert-paris.com"),
  openGraph: {
    title: "Grande Remise Transfert Paris · Chauffeur privé haut de gamme",
    description:
      "Service de chauffeur privé à Paris : transferts aéroport, mise à disposition, événements VIP. Réservation 24/7.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <PhoneFab />
      </body>
    </html>
  );
}
