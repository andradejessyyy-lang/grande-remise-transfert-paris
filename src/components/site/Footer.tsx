import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { phone, email, social } from "@/lib/contact";

/**
 * Footer — dark editorial slab with brand block, nav columns and legal.
 */
export default function Footer() {
  return (
    <footer className="bg-ink text-paper-pure">
      <div className="mx-auto max-w-layout section-x py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-serif text-3xl font-light leading-tight inline-block"
            >
              Grande Remise
              <br />
              <em className="text-luxe-bright not-italic font-normal">
                Transfert Paris
              </em>
            </Link>
            <p className="lede mt-5 max-w-prose text-paper-pure/70">
              Service de chauffeur privé haut de gamme à Paris et Île-de-France.
              Transferts, mise à disposition et événements VIP — 24/7.
            </p>

            <div
              aria-hidden
              className="rule-luxe-bright mt-8"
              style={{ background: "var(--luxe-bright)" }}
            />

            <ul className="mt-6 space-y-3 text-[14px] text-paper-pure/85">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-luxe-bright" aria-hidden />
                <a
                  href={`tel:${phone.tel}`}
                  className="hover:text-luxe-bright"
                >
                  {phone.displayInternational}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-luxe-bright" aria-hidden />
                <a
                  href={`mailto:${email.reservation}`}
                  className="hover:text-luxe-bright"
                >
                  {email.reservation}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-luxe-bright" aria-hidden />
                <span>Paris · Île-de-France</span>
              </li>
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" aria-hidden />

          {/* Services column */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] uppercase tracking-kicker font-medium text-paper-pure/60 mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="/services#transfert" className="hover:text-luxe-bright">
                  Transfert gare & aéroport
                </Link>
              </li>
              <li>
                <Link href="/services#mise-a-disposition" className="hover:text-luxe-bright">
                  Mise à disposition
                </Link>
              </li>
              <li>
                <Link href="/services#vip" className="hover:text-luxe-bright">
                  Événements VIP
                </Link>
              </li>
              <li>
                <Link href="/vehicules" className="hover:text-luxe-bright">
                  Notre flotte
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-luxe-bright">
                  Grille tarifaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Maison column */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] uppercase tracking-kicker font-medium text-paper-pure/60 mb-5">
              Maison
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="/contact" className="hover:text-luxe-bright">
                  Réservation
                </Link>
              </li>
              <li>
                <Link href="/contact#simulateur" className="hover:text-luxe-bright">
                  Simulateur de prix
                </Link>
              </li>
              <li>
                <a
                  href={social.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-luxe-bright"
                >
                  WhatsApp 24/7
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal strip */}
        <div className="mt-16 pt-8 border-t border-paper-pure/15 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[12px] text-paper-pure/55">
          <p>
            © {new Date().getFullYear()} Grande Remise Transfert Paris. Tous
            droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/mentions-legales" className="hover:text-paper-pure">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-paper-pure">
                CGV
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-paper-pure">
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
