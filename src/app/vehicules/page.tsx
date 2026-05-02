import Image from "next/image";
import { Check, Users, Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { illustrationByGamme } from "@/components/ui/VehicleIllustration";
import { vehicles } from "@/lib/vehicles";
import { paris } from "@/lib/images";
import { localVehicleImage } from "@/lib/vehicleAssets";

export const metadata = {
  title: "Nos véhicules — Berline, SUV, Van Premium",
  description:
    "Flotte de chauffeur privé à Paris : berline d'affaires, berline première / SUV haut de gamme, van premium 7 places. Mercedes Classe E, GLA et Classe V.",
};

export default function VehiculesPage() {
  return (
    <>
      {/* HERO with Paris background */}
      <section className="relative min-h-[55vh] flex items-end text-paper isolate overflow-hidden">
        <Image
          src={paris.haussmann.src}
          alt={paris.haussmann.alt}
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
                Notre flotte
              </span>
            </div>
            <h1 className="h-hero mt-5 text-paper">
              Trois gammes,
              <br />
              <em className="text-luxe-bright italic font-light">
                un même standard.
              </em>
            </h1>
            <p className="lede mt-6 max-w-2xl text-paper/85">
              Berlines allemandes, vans premium, finitions cuir et tablette.
              Tous nos véhicules ont moins de 4 ans, entretenus exclusivement
              chez le constructeur, contrôlés chaque semaine.
            </p>
          </div>
        </Container>
      </section>

      {vehicles.map((v, idx) => {
        const flipped = idx % 2 === 1;
        const Illustration = illustrationByGamme[v.gamme];
        const localPhoto = localVehicleImage(v.gamme);
        return (
          <section
            key={v.gamme}
            id={v.gamme}
            className="section-y bg-paper-pure border-t border-line-faint"
          >
            <Container>
              <div
                className={`grid gap-12 lg:grid-cols-2 items-center ${
                  flipped ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual: real local photo if uploaded, else SVG silhouette on dark slab */}
                {localPhoto ? (
                  <div className="relative aspect-card overflow-hidden vehicle-bg">
                    <Image
                      src={localPhoto}
                      alt={v.image.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain p-10"
                      quality={88}
                    />
                    <div
                      className="absolute top-5 left-5 text-[10px] uppercase tracking-kicker text-paper bg-ink/70 px-3 py-1.5 backdrop-blur-sm border border-paper/10"
                      aria-hidden
                    >
                      Gamme {v.gamme.toUpperCase()}
                    </div>
                  </div>
                ) : (
                  <div className="editorial-slab aspect-card text-luxe-bright p-12 relative">
                    <div
                      className="absolute top-5 left-5 text-[10px] uppercase tracking-kicker text-paper bg-ink/70 px-3 py-1.5 backdrop-blur-sm border border-paper/10"
                      aria-hidden
                    >
                      Gamme {v.gamme.toUpperCase()}
                    </div>
                    <Illustration
                      className="w-full max-w-[420px]"
                      ariaLabel={`Silhouette ${v.name}`}
                    />
                    <div className="kicker text-luxe-bright mt-6">
                      Mercedes
                    </div>
                  </div>
                )}

                <div>
                  <div className="eyebrow-line">
                    <span className="text-[11px] uppercase tracking-kicker font-medium text-luxe">
                      Gamme {v.gamme}
                    </span>
                  </div>
                  <h2 className="h-section mt-4">{v.name}</h2>
                  <p className="lede mt-5 max-w-prose">{v.description}</p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="stat">
                      <div className="flex items-center gap-2 text-ink-mute">
                        <Users className="h-4 w-4" aria-hidden />
                        <span className="text-[11px] uppercase tracking-kicker">
                          Passagers
                        </span>
                      </div>
                      <div className="font-serif text-3xl font-light mt-1">
                        {v.passengers}
                      </div>
                    </div>
                    <div className="stat">
                      <div className="flex items-center gap-2 text-ink-mute">
                        <Briefcase className="h-4 w-4" aria-hidden />
                        <span className="text-[11px] uppercase tracking-kicker">
                          Bagages
                        </span>
                      </div>
                      <div className="font-serif text-3xl font-light mt-1">
                        {v.luggage}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="kicker mb-3">Modèles types</div>
                    <ul className="flex flex-wrap gap-2">
                      {v.examples.map((ex) => (
                        <li
                          key={ex}
                          className="text-[12px] border border-line-soft px-3 py-1.5 rounded-full"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7">
                    <div className="kicker mb-3">Confort</div>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {v.highlights.map((h) => (
                        <li
                          key={h}
                          className="body-copy flex items-start gap-2.5"
                        >
                          <Check
                            className="h-4 w-4 text-luxe mt-1 flex-shrink-0"
                            aria-hidden
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button href="/contact" variant="default" arrow>
                      Réserver cette gamme
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
