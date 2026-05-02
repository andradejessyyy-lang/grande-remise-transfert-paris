import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { destinations, getFare } from "@/lib/vehicles";
import { paris } from "@/lib/images";
import { phone } from "@/lib/contact";

export const metadata = {
  title: "Tarifs — Grille forfaitaire Paris IDF",
  description:
    "Grille tarifaire chauffeur privé Paris : forfaits aller simple vers les aéroports CDG, Orly, Le Bourget, Beauvais et les gares parisiennes (Nord, Lyon, Montparnasse, Saint-Lazare).",
};

const groups: Array<{ label: string; type: "airport" | "station" }> = [
  { label: "Aéroports", type: "airport" },
  { label: "Gares parisiennes", type: "station" },
];

export default function TarifsPage() {
  return (
    <>
      {/* HERO — Arc de Triomphe */}
      <section className="relative min-h-[55vh] flex items-end text-paper isolate overflow-hidden">
        <Image
          src={paris.arcDeTriomphe.src}
          alt={paris.arcDeTriomphe.alt}
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
                Tarifs
              </span>
            </div>
            <h1 className="h-hero mt-5 text-paper">
              Grille
              <br />
              <em className="text-luxe-bright italic font-light">
                forfaitaire.
              </em>
            </h1>
            <p className="lede mt-6 max-w-2xl text-paper/85">
              Tous nos prix sont fixes, TTC, et incluent l&apos;accueil
              personnalisé, le suivi de vol/train, 60 minutes d&apos;attente
              offertes côté aéroport, l&apos;eau minérale et la presse à bord.
            </p>
          </div>
        </Container>
      </section>

      {/* PRICING TABLES */}
      {groups.map((group, gi) => {
        const dests = destinations.filter((d) => d.type === group.type);
        return (
          <section
            key={group.type}
            className="section-y bg-paper-pure border-t border-line-faint"
          >
            <Container>
              <div className="eyebrow-line">
                <span className="text-[11px] uppercase tracking-kicker font-medium text-luxe">
                  0{gi + 1} — {group.label}
                </span>
              </div>
              <h2 className="h-section mt-4 mb-12">{group.label}</h2>

              <div className="border border-ink bg-paper-pure overflow-hidden">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] text-[11px] uppercase tracking-kicker bg-ink text-paper">
                  <div className="px-5 py-4">Destination</div>
                  <div className="px-5 py-4 text-right">Éco</div>
                  <div className="px-5 py-4 text-right">Première / SUV</div>
                  <div className="px-5 py-4 text-right">Van Premium</div>
                </div>

                {dests.map((d, i) => (
                  <div
                    key={d.slug}
                    className={`grid grid-cols-[2fr_1fr_1fr_1fr] items-center text-[15px] ${
                      i % 2 === 1 ? "bg-paper-tint" : ""
                    }`}
                  >
                    <div className="px-5 py-5">
                      <div className="font-medium">{d.label}</div>
                      <div className="text-[12px] text-ink-mute mt-0.5">
                        {d.zone}
                      </div>
                    </div>
                    <div className="px-5 py-5 text-right font-serif font-medium text-xl">
                      {getFare(d.slug, "eco")}€
                    </div>
                    <div className="px-5 py-5 text-right font-serif font-medium text-xl">
                      {getFare(d.slug, "suv")}€
                    </div>
                    <div className="px-5 py-5 text-right font-serif font-medium text-xl text-luxe">
                      {getFare(d.slug, "van")}€
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[12px] text-ink-mute mt-4">
                Tarifs TTC · valables 24/24 · au départ/à destination de Paris
                intra-muros.
              </p>
            </Container>
          </section>
        );
      })}

      {/* CTA */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <Image
            src={paris.haussmann.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            quality={80}
          />
        </div>
        <div className="absolute inset-0 scrim-full" aria-hidden />
        <Container className="relative py-20 md:py-24 text-center">
          <h2 className="h-section text-paper">
            Une destination
            <br />
            <em className="text-luxe-bright italic font-normal">
              hors grille ?
            </em>
          </h2>
          <p className="lede mt-6 max-w-prose mx-auto text-paper/80">
            Pour Disneyland, Versailles, Reims, Honfleur, Deauville ou tout
            autre trajet sur mesure : devis personnalisé en moins d&apos;1
            heure.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-10">
            <Button href="/contact" variant="luxe" arrow>
              Demander un devis
            </Button>
            <Button href={`tel:${phone.tel}`} variant="ghost-dark">
              {phone.displayInternational}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
