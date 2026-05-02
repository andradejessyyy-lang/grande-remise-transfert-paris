import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { testimonials, stats } from "@/lib/testimonials";

/**
 * SocialProof — section témoignages + stats.
 * Light section pour casser le rythme visuel (entre Tarifs et Simulateur,
 * tous deux plutôt sombres / chargés en data).
 */
export default function SocialProof() {
  return (
    <section id="social-proof" className="section-y bg-paper-pure">
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <div className="eyebrow-line">
            <span className="text-[11px] uppercase tracking-kicker font-medium text-luxe">
              04 — Témoignages
            </span>
          </div>
          <h2 className="h-section mt-4">
            Ils nous ont
            <br />
            <em className="text-luxe italic font-normal">fait confiance.</em>
          </h2>
          <p className="lede mt-6 max-w-prose">
            Plus de 10 000 courses depuis 2014, une note Google de 4.9/5, et
            une majorité de clients fidèles. Voici ce qu&apos;ils en disent.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3 mt-14">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="border border-line-soft bg-paper-pure p-8 flex flex-col relative"
            >
              {/* Decorative quote mark */}
              <Quote
                className="h-7 w-7 text-luxe/40 absolute -top-3 left-7 bg-paper-pure px-1"
                strokeWidth={1.5}
                aria-hidden
              />

              {/* 5 stars */}
              <div
                className="flex items-center gap-0.5 mt-2"
                aria-label="5 étoiles sur 5"
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-luxe text-luxe"
                    aria-hidden
                  />
                ))}
              </div>

              {/* Quote (italic serif for editorial feel) */}
              <blockquote className="font-serif italic font-light text-[19px] leading-snug text-ink mt-5 flex-1">
                « {t.quote} »
              </blockquote>

              {/* Author */}
              <div className="mt-7 pt-5 border-t border-line-faint">
                <div className="font-medium text-[15px]">{t.author}</div>
                <div className="text-[12px] text-ink-mute mt-0.5">
                  {t.role}
                </div>
                <div className="text-[11px] uppercase tracking-kicker text-luxe mt-2">
                  {t.context}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Gold rule separator */}
        <div className="rule-luxe mt-16 mx-auto" aria-hidden />

        {/* Stats bar */}
        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center border-l border-luxe/30 pl-4 first:border-l-0 first:pl-0 md:border-l md:pl-4 md:first:border-l-0"
            >
              <dt className="font-serif text-3xl md:text-4xl font-light text-ink">
                {s.value}
              </dt>
              <dd className="text-[10px] md:text-[11px] uppercase tracking-kicker text-ink-mute mt-2">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
