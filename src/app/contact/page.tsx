import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import BookingForm from "@/components/booking/BookingForm";
import { paris } from "@/lib/images";
import { phone, email, social } from "@/lib/contact";

export const metadata = {
  title: "Contact & Réservation",
  description:
    "Réservez votre chauffeur privé à Paris. Formulaire en ligne avec simulateur de prix, ou appelez-nous au 06 02 43 96 96 — 24/7.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO — Tour Eiffel */}
      <section className="relative min-h-[55vh] flex items-end text-paper isolate overflow-hidden">
        <Image
          src={paris.tourEiffel.src}
          alt={paris.tourEiffel.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10 animate-fade-in"
          quality={85}
        />
        <div className="absolute inset-0 -z-10 scrim-full" aria-hidden />
        <Container className="py-16 md:py-24 animate-fade-up">
          <div className="max-w-3xl">
            <div className="eyebrow-line text-luxe-bright">
              <span className="text-[11px] uppercase tracking-kicker font-medium">
                Contact
              </span>
            </div>
            <h1 className="h-hero mt-5 text-paper">
              Réservation
              <br />
              <em className="text-luxe-bright italic font-light">
                en ligne.
              </em>
            </h1>
            <p className="lede mt-6 max-w-2xl text-paper/85">
              Renseignez votre trajet et obtenez une estimation instantanée.
              Confirmation par téléphone ou email sous 30 minutes (1 heure la
              nuit).
            </p>
          </div>
        </Container>
      </section>

      {/* FORM + INFO */}
      <section
        id="reservation"
        className="section-y bg-paper-pure border-t border-line-faint"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
            {/* Form (interactive client component) */}
            <div id="simulateur">
              <BookingForm />
            </div>

            {/* Info column */}
            <aside className="space-y-9">
              <div>
                <div className="eyebrow-line">
                  <span className="text-[11px] uppercase tracking-kicker font-medium text-luxe">
                    Téléphone · 24/7
                  </span>
                </div>
                <a
                  href={`tel:${phone.tel}`}
                  className="block font-serif text-3xl md:text-4xl font-light mt-3 hover:text-luxe transition-colors"
                >
                  {phone.displayInternational}
                </a>
                <p className="body-copy mt-3">
                  Pour les réservations urgentes (moins de 4h) ou les demandes
                  hors grille tarifaire, l&apos;appel reste le plus rapide.
                </p>
              </div>

              <div className="border-t border-line-faint pt-8 space-y-6">
                <div className="flex items-start gap-3">
                  <Mail
                    className="h-5 w-5 text-luxe mt-0.5 flex-shrink-0"
                    aria-hidden
                  />
                  <div>
                    <div className="kicker">Email</div>
                    <a
                      href={`mailto:${email.reservation}`}
                      className="block mt-1 hover:text-luxe transition-colors"
                    >
                      {email.reservation}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="h-5 w-5 text-luxe mt-0.5 flex-shrink-0"
                    aria-hidden
                  />
                  <div>
                    <div className="kicker">WhatsApp</div>
                    <a
                      href={social.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="block mt-1 hover:text-luxe transition-colors"
                    >
                      {phone.displayInternational}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-5 w-5 text-luxe mt-0.5 flex-shrink-0"
                    aria-hidden
                  />
                  <div>
                    <div className="kicker">Zone d&apos;intervention</div>
                    <p className="mt-1">Paris · Île-de-France</p>
                    <p className="body-copy mt-1">
                      Possibilité de longues distances sur devis (Reims, Lille,
                      Deauville, Eurodisney…).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="h-5 w-5 text-luxe mt-0.5 flex-shrink-0"
                    aria-hidden
                  />
                  <div>
                    <div className="kicker">Disponibilité</div>
                    <p className="mt-1">24h/24 · 7j/7</p>
                    <p className="body-copy mt-1">
                      Y compris jours fériés. Réservation conseillée 24h à
                      l&apos;avance pour les transferts.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
