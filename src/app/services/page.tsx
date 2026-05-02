import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";
import { paris } from "@/lib/images";

export const metadata = {
  title: "Services — Transferts, Mise à disposition, VIP",
  description:
    "Trois services de chauffeur privé à Paris : transferts gare et aéroport, mise à disposition à l'heure ou à la demi-journée, événements VIP.",
};

// Contextual photography paired to each service.
//   Service 1 (Transfert)        → airport terminal
//   Service 2 (Mise à dispo)     → chauffeur / business context
//   Service 3 (Événement VIP)    → event / red carpet
const serviceImage = [paris.airport, paris.chauffeur, paris.event] as const;

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO — Champs-Élysées */}
      <section className="relative min-h-[55vh] flex items-end text-paper isolate overflow-hidden">
        <Image
          src={paris.champsElysees.src}
          alt={paris.champsElysees.alt}
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
                Services
              </span>
            </div>
            <h1 className="h-hero mt-5 text-paper">
              Trois services,
              <br />
              <em className="text-luxe-bright italic font-light">
                un même niveau d&apos;exigence.
              </em>
            </h1>
            <p className="lede mt-6 max-w-2xl text-paper/85">
              Que ce soit pour un transfert de 20 minutes ou une journée VIP
              complète, le même protocole : chauffeur formé, véhicule premium
              récent, tarif convenu à la réservation.
            </p>
          </div>
        </Container>
      </section>

      {/* SERVICE BLOCKS — alternating image / text */}
      {services.map((s, idx) => {
        const Icon = s.icon;
        const flipped = idx % 2 === 1;
        const img = serviceImage[idx];
        return (
          <section
            key={s.slug}
            id={s.slug}
            className="section-y bg-paper-pure border-t border-line-faint"
          >
            <Container>
              <div
                className={`grid gap-12 lg:grid-cols-2 items-center ${
                  flipped ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image side */}
                <div className="relative aspect-card overflow-hidden bg-ink">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    quality={85}
                  />
                </div>

                {/* Text side */}
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-serif font-light text-4xl text-luxe">
                      {s.index}
                    </span>
                    <Icon className="h-6 w-6 text-ink-soft" aria-hidden />
                  </div>
                  <h2 className="h-section mt-5">{s.title}</h2>
                  <p className="lede mt-5 max-w-prose">{s.description}</p>

                  <div className="mt-8 border-t border-line-faint pt-6">
                    <div className="kicker mb-4">Inclus dans la prestation</div>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="body-copy flex items-start gap-2.5"
                        >
                          <Check
                            className="h-4 w-4 text-luxe mt-1 flex-shrink-0"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-9">
                    <Button href="/contact" variant="default" arrow>
                      Réserver ce service
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
