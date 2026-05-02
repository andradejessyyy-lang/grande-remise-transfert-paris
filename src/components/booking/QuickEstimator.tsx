"use client";

import { useState, useMemo } from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  destinations,
  vehicles,
  getFare,
  type VehicleGamme,
} from "@/lib/vehicles";

/**
 * QuickEstimator — compact home-page simulator.
 *
 * 3 inputs (course type · destination | duration · gamme) → live price.
 * Designed to live INSIDE a dark "Simulator" hero on the home page.
 * The full booking form (with name/email/phone/date/time) lives at /contact.
 *
 * Visually: white card with shadow, big serif price number, gold accent.
 */

type CourseType = "transfert" | "mise-a-disposition";
const minHours = [2, 4, 8] as const;

export default function QuickEstimator() {
  const [courseType, setCourseType] = useState<CourseType>("transfert");
  const [destinationSlug, setDestinationSlug] = useState<string>("cdg");
  const [gamme, setGamme] = useState<VehicleGamme>("suv");
  const [duration, setDuration] = useState<(typeof minHours)[number]>(4);

  // Mise à dispo hourly rate (kept identical to BookingForm).
  const hourlyRate: Record<VehicleGamme, number> = {
    eco: 60,
    suv: 90,
    van: 120,
  };

  const estimatedFare = useMemo(() => {
    if (courseType === "transfert") {
      return getFare(destinationSlug, gamme);
    }
    return hourlyRate[gamme] * duration;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseType, destinationSlug, gamme, duration]);

  return (
    <div className="bg-paper-pure text-ink p-6 md:p-9 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
      {/* Course type tabs */}
      <fieldset className="mb-6">
        <legend className="text-[11px] uppercase tracking-kicker font-medium text-luxe mb-3">
          Type de course
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {(
            [
              ["transfert", "Transfert"],
              ["mise-a-disposition", "Mise à disposition"],
            ] as const
          ).map(([val, lbl]) => {
            const active = courseType === val;
            return (
              <button
                key={val}
                type="button"
                onClick={() => setCourseType(val)}
                className={`min-h-[44px] px-3 py-3 text-[12px] uppercase tracking-nav font-medium border transition-colors ${
                  active
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper-pure text-ink border-line-soft hover:border-ink"
                }`}
                aria-pressed={active}
              >
                {lbl}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Transfert: destination select */}
      {courseType === "transfert" && (
        <div className="mb-5">
          <label
            htmlFor="qe-destination"
            className="text-[11px] uppercase tracking-kicker font-medium text-luxe block mb-2"
          >
            Destination
          </label>
          <select
            id="qe-destination"
            value={destinationSlug}
            onChange={(e) => setDestinationSlug(e.target.value)}
            className="w-full px-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
          >
            <optgroup label="Aéroports">
              {destinations
                .filter((d) => d.type === "airport")
                .map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.label}
                  </option>
                ))}
            </optgroup>
            <optgroup label="Gares">
              {destinations
                .filter((d) => d.type === "station")
                .map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.label}
                  </option>
                ))}
            </optgroup>
          </select>
        </div>
      )}

      {/* Mise à dispo: duration */}
      {courseType === "mise-a-disposition" && (
        <fieldset className="mb-5">
          <legend className="text-[11px] uppercase tracking-kicker font-medium text-luxe mb-2">
            Durée
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {minHours.map((h) => {
              const active = duration === h;
              return (
                <button
                  key={h}
                  type="button"
                  onClick={() => setDuration(h)}
                  className={`min-h-[44px] px-3 py-2 text-[14px] font-medium border transition-colors ${
                    active
                      ? "bg-ink text-paper border-ink"
                      : "bg-paper-pure text-ink border-line-soft hover:border-ink"
                  }`}
                  aria-pressed={active}
                >
                  {h}h
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {/* Gamme */}
      <fieldset className="mb-7">
        <legend className="text-[11px] uppercase tracking-kicker font-medium text-luxe mb-2">
          Gamme
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {vehicles.map((v) => {
            const active = gamme === v.gamme;
            return (
              <button
                key={v.gamme}
                type="button"
                onClick={() => setGamme(v.gamme)}
                className={`min-h-[64px] px-2 py-2 text-left border transition-colors ${
                  active
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper-pure text-ink border-line-soft hover:border-ink"
                }`}
                aria-pressed={active}
              >
                <div className="text-[10px] uppercase tracking-kicker opacity-70">
                  {v.gamme === "eco"
                    ? "Éco"
                    : v.gamme === "suv"
                    ? "Première"
                    : "Van"}
                </div>
                <div className="font-serif text-[15px] mt-0.5 leading-tight">
                  {v.shortName}
                </div>
                <div className="text-[10px] opacity-70 mt-0.5">
                  {v.passengers} pax
                </div>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Price block */}
      <div className="border-t border-line-faint pt-6">
        <div className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-luxe" aria-hidden />
            <span className="text-[11px] uppercase tracking-kicker font-medium text-luxe">
              Estimation
            </span>
          </div>
          {estimatedFare !== null && (
            <div className="text-right">
              <div className="font-serif text-5xl md:text-6xl font-light leading-none text-ink">
                {estimatedFare}
                <span className="text-2xl ml-1">€</span>
              </div>
              <div className="text-[11px] text-ink-mute mt-1 uppercase tracking-kicker">
                {courseType === "transfert"
                  ? "Aller simple · TTC"
                  : `${duration}h · TTC`}
              </div>
            </div>
          )}
        </div>

        <p className="text-[11px] text-ink-mute mt-4 leading-relaxed">
          Tarif forfaitaire indicatif. Confirmation finale par notre équipe
          après validation.
        </p>

        <Link
          href="/contact#reservation"
          className="mt-5 inline-flex items-center justify-center gap-2 w-full bg-luxe text-paper-pure font-sans font-medium uppercase tracking-btn text-[12px] px-7 py-3.5 min-h-[48px] hover:bg-luxe-bright hover:text-ink transition-colors group"
        >
          <span>Continuer la réservation</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
}
