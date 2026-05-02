"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/vehicules", label: "Nos véhicules" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Réservation" },
] as const;

/**
 * Nav — top site navigation. Sticky, transparent over hero on Home,
 * solid paper everywhere else. Mobile drawer below md breakpoint.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line-faint">
      <div className="mx-auto max-w-layout section-x flex items-center justify-between h-16 md:h-20">
        {/* Logo / Wordmark */}
        <Link
          href="/"
          className="font-serif text-[19px] md:text-[22px] tracking-tight leading-none flex items-baseline gap-2"
          aria-label="Accueil — Grande Remise Transfert Paris"
        >
          <span className="font-medium">Grande Remise</span>
          <span className="text-ink-mute font-light text-[13px] uppercase tracking-kicker hidden sm:inline">
            Paris
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.slice(0, 3).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[13px] uppercase tracking-nav font-medium text-ink hover:text-luxe transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/contact" variant="default" arrow>
            Réserver
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-96 border-t border-line-faint" : "max-h-0",
        )}
      >
        <ul className="section-x py-6 flex flex-col gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-ink hover:text-luxe transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
