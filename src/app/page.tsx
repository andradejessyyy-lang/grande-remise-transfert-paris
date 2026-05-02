import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { illustrationByGamme } from "@/components/ui/VehicleIllustration";
import QuickEstimator from "@/components/booking/QuickEstimator";
import { services } from "@/lib/services";
import { vehicles, destinations, getFare } from "@/lib/vehicles";
import { paris } from "@/lib/images";
import { phone } from "@/lib/contact";
import { localVehicleImage } from "@/lib/vehicleAssets";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────
          HERO — Full-bleed Paris photography
          ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center text-paper isolate overflow-hidden">
        <Image
          src={paris.hero.src}
          alt={paris.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10 animate-fade-in"
          quality={90}
        />
        <div className="absolute inset-0 -z-10 scrim-full" aria-hidden />
        <div className="absolute inset-0 -z-10 grain" aria-hidden />

        <Container className="py-24 md:py-32">
          <div className="max-w-3xl animate-fade-up">
            <div className="eyebrow-line text-luxe-bright">
              <span className="text-[11px] uppercase tracking-kicker font-medium">
                Chauffeur privé · Paris · 24/7
              </span>
            </div>
            <h1 className="h-display mt-6">
              Le luxe de la
              <br />
              <em className="text-luxe-bright not-italic font-light">
                discrétion.
              </em>
            </h1>
            <p className="lede mt-7 max-w-xl text-paper/85">
              Service de chauffeur haut de gamme à Paris et en Île-de-France.
              Transferts aéroport et gare, mise à disposition, événements VIP.
              Accueil personnalisé, flotte premium, tarif forfaitaire.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 mt-10">
              <Button href="/contact" variant="luxe" arrow>
                Réserver une course
              </Button>
              <Button href="#simulateur" variant="ghost-dark">
                Estimer mon prix
              </Button>
            </div>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 max-w-3xl animate-fade-up-slow">
            {[
              ["10+", "années d'expérience"],
              ["24/7", "disponibilité"],
              ["100%", "tarif forfaitaire"],
              ["VTC", "agréé · LOTI"],
            ].map(([num, lbl]) => (
              <div
                key={lbl}
                className="border-l border-luxe-bright/50 pl-4"
              >
                <div className="font-serif text-3xl md:text-4xl font-light text-paper">
                  {num}
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-kicker text-paper/65 mt-1">
                  {lbl}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SERVICES — 3 indexed cards, white surface
          ───────────────────────────────────────────────────────── */}
      <section id="services" className="section-y bg-paper-pure">
        <Container>
          <div className="max-w-2xl">
            <div className="eyebrow-line">
              <span className="text-[11px] uppercase tracking-kicker font-medium text-luxe">
                01 — Services
              </span>
            </div>
            <h2 className="h-section mt-4">
              Trois manières de
              <br />
              <em className="text-luxe italic font-normal">
                voyager autrement.
              </em>
            </h2>
            <p className="lede mt-6 max-w-prose">
              Du transfert aéroport au mariage, chaque mission est confiée à un
              chauffeur formé, dans un véhicule premium, au tarif convenu.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.slug}
                  className="border border-line-soft bg-paper-pure p-8 flex flex-col gap-4 group hover:border-ink transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif font-light text-3xl text-luxe">
                      {s.index}
                    </span>
                    <Icon
                      className="h-6 w-6 text-ink-soft group-hover:text-luxe transition-colors"
                      aria-hidden
                    />
                  </div>
                  <div aria-hidden className="rule-luxe mt-2" />
                  <h3 className="h-card mt-1">{s.title}</h3>
                  <p className="body-copy">{s.tagline}</p>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-[12px] uppercase tracking-nav font-medium text-ink hover:text-luxe inline-flex items-center gap-2 mt-auto pt-5 border-t border-line-faint"
                  >
                    En savoir plus →
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <div className="divider-luxe" aria-hidden />

      {/* ─────────────────────────────────────────────────────────
          VEHICLES — 3 gammes with SVG illustrations on dark slabs
          ───────────────────────────────────────────────────────── */}
      <section id="vehicules" className="section-y bg-paper-pure">
        <Container>
          <div className="max-w-2xl">
            <div className="eyebrow-line">
              <span className="text-[11px] uppercase tracking-kicker font-medium text-luxe">
                02 — Flotte
              </span>
            </div>
            <h2 className="h-section mt-4">
              Une flotte
              <br />
              <em className="text-luxe italic font-normal">à la hauteur.</em>
            </h2>
            <p className="lede mt-6 max-w-prose">
              De la berline d&apos;affaires au van premium, chaque véhicule
              passe un contrôle qualité hebdomadaire. Toutes nos voitures sont
              récentes (moins de 4 ans), entretenues exclusivement chez le
              constructeur.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {vehicles.map((v) => {
              const Illustration = illustrationByGamme[v.gamme];
              const localPhoto = localVehicleImage(v.gamme);
              const tag =
                v.gamme === "eco"
                  ? "Éco · Affaires"
                  : v.gamme === "suv"
                  ? "Première · SUV"
                  : "Van · 7 places";
              return (
                <article
                  key={v.gamme}
                  className="bg-paper-pure flex flex-col overflow-hidden border border-line-soft group"
                >
                  {localPhoto ? (
                    /* Local production photo on subtle showroom gradient */
                    <div className="relative aspect-card overflow-hidden vehicle-bg">
                      <Image
                        src={localPhoto}
                        alt={v.image.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                        quality={85}
                      />
                      <div
                        className="absolute top-4 left-4 text-[10px] uppercase tracking-kicker text-paper bg-ink/70 px-2.5 py-1 backdrop-blur-sm border border-paper/10"
                        aria-hidden
                      >
                        {tag}
                      </div>
                    </div>
                  ) : (
                    /* Fallback: SVG illustration on dark editorial slab */
                    <div className="editorial-slab aspect-card text-luxe-bright p-8 relative">
                      <div
                        className="absolute top-4 left-4 text-[10px] uppercase tracking-kicker text-paper bg-ink/70 px-2.5 py-1 backdrop-blur-sm border border-paper/10"
                        aria-hidden
                      >
                        {tag}
                      </div>
                      <Illustration
                        className="w-full max-w-[260px] mt-auto"
                        ariaLabel={`Silhouette ${v.name}`}
                      />
                      <div className="kicker text-luxe-bright mt-4 text-center">
                        Mercedes
                      </div>
                    </div>
                  )}
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <h3 className="h-card">{v.name}</h3>
                    <p className="body-copy line-clamp-3">{v.description}</p>
                    <div className="flex items-center gap-5 text-[12px] uppercase tracking-nav text-ink-mute mt-auto pt-5 border-t border-line-faint">
                      <span>{v.passengers} pax</span>
                      <span aria-hidden>·</span>
                      <span>{v.luggage} bagages</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button href="/vehicules" variant="outline" arrow>
              Découvrir la flotte
            </Button>
          </div>
        </Container>
      </section>

      <div className="divider-luxe" aria-hidden />

      {/* ─────────────────────────────────────────────────────────
          TARIFS TEASER — pricing matrix + CTA
          ───────────────────────────────────────────────────────── */}
      <section id="tarifs-teaser" className="section-y bg-paper-pure">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <div className="eyebrow-line">
                <span className="text-[11px] uppercase tracking-kicker font-medium text-luxe">
                  03 — Tarifs
                </span>
              </div>
              <h2 className="h-section mt-4">
                Des prix
                <br />
                <em className="text-luxe italic font-normal">forfaitaires.</em>
              </h2>
              <p className="lede mt-6 max-w-md">
                Pas de surprise, pas de compteur qui tourne. Un tarif fixé à la
                réservation, valable de jour comme de nuit, week-end inclus.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Suivi de vol/train inclus",
                  "60 min d'attente offertes (aéroport)",
                  "Eau minérale et presse à bord",
                  "Annulation gratuite jusqu'à H–4",
                ].map((b) => (
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
              <div className="mt-9">
                <Button href="/tarifs" variant="default" arrow>
                  Grille complète
                </Button>
              </div>
            </div>

            {/* Mini pricing matrix — 4 destinations × 3 gammes */}
            <div className="border border-ink bg-paper-pure">
              <div className="grid grid-cols-4 text-[11px] uppercase tracking-kicker bg-ink text-paper">
                <div className="px-4 py-3.5">Destination</div>
                <div className="px-4 py-3.5 text-right">Éco</div>
                <div className="px-4 py-3.5 text-right">Première</div>
                <div className="px-4 py-3.5 text-right">Van</div>
              </div>
              {destinations.slice(0, 4).map((d, i) => (
                <div
                  key={d.slug}
                  className={`grid grid-cols-4 items-center text-[14px] ${
                    i % 2 === 1 ? "bg-paper-tint" : ""
                  }`}
                >
                  <div className="px-4 py-4">
                    <div className="font-medium">{d.label}</div>
                    <div className="text-[11px] text-ink-mute mt-0.5">
                      {d.zone}
                    </div>
                  </div>
                  <div className="px-4 py-4 text-right font-serif font-medium text-lg">
                    {getFare(d.slug, "eco")}€
                  </div>
                  <div className="px-4 py-4 text-right font-serif font-medium text-lg">
                    {getFare(d.slug, "suv")}€
                  </div>
                  <div className="px-4 py-4 text-right font-serif font-medium text-lg text-luxe">
                    {getFare(d.slug, "van")}€
                  </div>
                </div>
              ))}
              <div className="px-4 py-3 text-[11px] text-ink-mute text-center border-t border-line-faint">
                Tarifs TTC · Paris intra-muros · Aller simple
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SIMULATEUR — Highlighted dark section with QuickEstimator
          ───────────────────────────────────────────────────────── */}
      <section
        id="simulateur"
        className="relative bg-ink text-paper section-y overflow-hidden"
      >
        <div className="absolute inset-0 opacity-25" aria-hidden>
          <Image
            src={paris.placeVendome.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            quality={75}
          />
        </div>
        <div className="absolute inset-0 scrim-full" aria-hidden />
        <div className="absolute inset-0 grain" aria-hidden />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
            {/* Left — Editorial copy */}
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow-line text-luxe-bright">
                <span className="text-[11px] uppercase tracking-kicker font-medium">
                  04 — Simulateur
                </span>
              </div>
              <h2 className="h-section mt-4 text-paper">
                Combien
                <br />
                <em className="text-luxe-bright italic font-normal">
                  coûte ma course ?
                </em>
              </h2>
              <p className="lede mt-6 max-w-md text-paper/80">
                Estimez votre forfait en 30 secondes. Aucune inscription, aucune
                CB demandée — vous voyez le prix exact avant même de réserver.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  "Prix fixé pour tous les aéroports parisiens",
                  "Mise à disposition à l'heure ou journée",
                  "Tous nos forfaits valables aller-retour",
                  "Devis sur mesure pour les destinations hors grille",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[15px] text-paper/85"
                  >
                    <Check
                      className="h-4 w-4 text-luxe-bright mt-1 flex-shrink-0"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 hidden lg:block">
                <a
                  href={`tel:${phone.tel}`}
                  className="font-serif text-2xl font-light text-paper hover:text-luxe-bright transition-colors"
                >
                  {phone.displayInternational}
                </a>
                <p className="text-[11px] uppercase tracking-kicker text-paper/55 mt-1">
                  Réservation par téléphone · 24/7
                </p>
              </div>
            </div>

            {/* Right — QuickEstimator card */}
            <div>
              <QuickEstimator />
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          FINAL CTA — Black slab with Paris photo aside
          ───────────────────────────────────────────────────────── */}
      <section className="relative bg-ink text-paper overflow-hidden border-t border-paper/10">
        {/* Champs-Élysées night, panoramique — habille un format wide.
            Opacité 35% + scrim pour garantir la lisibilité du texte. */}
        <div className="absolute inset-0 opacity-35" aria-hidden>
          <Image
            src={paris.champsElysees.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 scrim-full" aria-hidden />
        <Container className="relative py-20 md:py-28 text-center">
          <div className="text-[11px] uppercase tracking-kicker font-medium text-luxe-bright">
            Réservation
          </div>
          <h2 className="h-section mt-4 text-paper">
            Prêt à monter
            <br />
            <em className="text-luxe-bright italic font-normal">à bord ?</em>
          </h2>
          <p className="lede mt-6 max-w-prose mx-auto text-paper/80">
            Réservez en ligne en moins de 2 minutes ou contactez-nous au
            téléphone. Service 24/7, confirmation immédiate.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-10">
            <Button href="/contact" variant="luxe" arrow>
              Réserver maintenant
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
