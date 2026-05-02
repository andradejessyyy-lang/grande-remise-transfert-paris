"use client";

import { useState, useMemo } from "react";
import { Calendar, Clock, MapPin, Users, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  destinations,
  vehicles,
  getFare,
  type VehicleGamme,
} from "@/lib/vehicles";

/**
 * BookingForm — interactive client-side reservation widget.
 *
 * Includes a price simulator that reads the static fare grid in lib/vehicles.ts.
 * On submit, currently shows a confirmation summary (placeholder) — the actual
 * email/CRM submission must be wired up in a server action by the agency.
 */

type CourseType = "transfert" | "mise-a-disposition";

const minHours = [2, 4, 8] as const;

export default function BookingForm() {
  const [courseType, setCourseType] = useState<CourseType>("transfert");
  const [pickup, setPickup] = useState("");
  const [destinationSlug, setDestinationSlug] = useState<string>("cdg");
  const [destinationCustom, setDestinationCustom] = useState("");
  const [useCustomDest, setUseCustomDest] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gamme, setGamme] = useState<VehicleGamme>("suv");
  const [passengers, setPassengers] = useState(1);
  const [duration, setDuration] = useState<(typeof minHours)[number]>(4);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Mise à disposition: simple hourly pricing (skill-grade pricing data is in
  // lib/vehicles.ts; this is a derived rate just for the simulator).
  const hourlyRate: Record<VehicleGamme, number> = {
    eco: 60,
    suv: 90,
    van: 120,
  };

  const estimatedFare = useMemo(() => {
    if (courseType === "transfert") {
      if (useCustomDest || !destinationSlug) return null;
      return getFare(destinationSlug, gamme);
    }
    return hourlyRate[gamme] * duration;
    // hourlyRate is stable, but ESLint deps would flag it; we ignore safely.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseType, useCustomDest, destinationSlug, gamme, duration]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO(server): wire to a Next.js server action that sends an email or
    // posts to a CRM. For now we just confirm in the UI.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-luxe bg-paper-pure p-8 md:p-12 text-center">
        <div className="kicker text-luxe">Demande envoyée</div>
        <h3 className="h-card mt-3">Merci, {name || "à très vite"}.</h3>
        <p className="body-copy mt-4 max-w-prose mx-auto">
          Nous revenons vers vous sous 30 minutes (jour) ou 1 heure (nuit) pour
          confirmer votre réservation. Une copie a été envoyée à{" "}
          <span className="font-medium">{email || "votre adresse"}</span>.
        </p>
        <div className="mt-6">
          <Button
            type="button"
            onClick={() => setSubmitted(false)}
            variant="outline"
          >
            Nouvelle demande
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-paper-pure p-6 md:p-9"
      aria-label="Formulaire de réservation"
    >
      {/* Course type tabs */}
      <fieldset className="mb-7">
        <legend className="kicker mb-3">Type de prestation</legend>
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
                className={`min-h-[44px] px-4 py-3 text-[13px] uppercase tracking-nav font-medium border transition-colors ${
                  active
                    ? "bg-ink text-paper-pure border-ink"
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

      {/* Pickup */}
      <div className="mb-5">
        <label htmlFor="pickup" className="kicker block mb-2">
          Point de prise en charge
        </label>
        <div className="relative">
          <MapPin
            className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-mute"
            aria-hidden
          />
          <input
            id="pickup"
            type="text"
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Ex: 18 rue Saint-Honoré, Paris 1er"
            className="w-full pl-10 pr-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
          />
        </div>
      </div>

      {/* Destination — only for transfert */}
      {courseType === "transfert" && (
        <div className="mb-5">
          <label htmlFor="destination" className="kicker block mb-2">
            Destination
          </label>
          <select
            id="destination"
            value={useCustomDest ? "__custom__" : destinationSlug}
            onChange={(e) => {
              if (e.target.value === "__custom__") {
                setUseCustomDest(true);
              } else {
                setUseCustomDest(false);
                setDestinationSlug(e.target.value);
              }
            }}
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
            <option value="__custom__">Autre adresse (devis)</option>
          </select>
          {useCustomDest && (
            <input
              type="text"
              required
              value={destinationCustom}
              onChange={(e) => setDestinationCustom(e.target.value)}
              placeholder="Adresse de destination"
              className="mt-2.5 w-full px-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
            />
          )}
        </div>
      )}

      {/* Mise à disposition: duration selector */}
      {courseType === "mise-a-disposition" && (
        <fieldset className="mb-5">
          <legend className="kicker mb-2">Durée</legend>
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
                      ? "bg-ink text-paper-pure border-ink"
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

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div>
          <label htmlFor="date" className="kicker block mb-2">
            Date
          </label>
          <div className="relative">
            <Calendar
              className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-mute pointer-events-none"
              aria-hidden
            />
            <input
              id="date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-10 pr-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="time" className="kicker block mb-2">
            Heure
          </label>
          <div className="relative">
            <Clock
              className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-mute pointer-events-none"
              aria-hidden
            />
            <input
              id="time"
              type="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full pl-10 pr-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
            />
          </div>
        </div>
      </div>

      {/* Gamme véhicule */}
      <fieldset className="mb-5">
        <legend className="kicker mb-2">Gamme</legend>
        <div className="grid grid-cols-3 gap-2">
          {vehicles.map((v) => {
            const active = gamme === v.gamme;
            return (
              <button
                key={v.gamme}
                type="button"
                onClick={() => setGamme(v.gamme)}
                className={`min-h-[44px] px-3 py-2 text-left border transition-colors ${
                  active
                    ? "bg-ink text-paper-pure border-ink"
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
                <div className="font-serif text-base mt-0.5">{v.shortName}</div>
                <div className="text-[10px] opacity-70 mt-0.5">
                  {v.passengers} pax
                </div>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Passengers */}
      <div className="mb-7">
        <label htmlFor="passengers" className="kicker block mb-2">
          Passagers
        </label>
        <div className="relative">
          <Users
            className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-mute pointer-events-none"
            aria-hidden
          />
          <input
            id="passengers"
            type="number"
            min={1}
            max={vehicles.find((v) => v.gamme === gamme)?.passengers ?? 7}
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="w-full pl-10 pr-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
          />
        </div>
      </div>

      {/* Price simulator panel */}
      <div className="border border-luxe-line bg-paper-tint p-5 mb-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles
              className="h-4 w-4 text-luxe flex-shrink-0"
              aria-hidden
            />
            <div className="kicker text-luxe">Simulation</div>
          </div>
          <div className="text-right">
            {estimatedFare !== null ? (
              <>
                <div className="font-serif text-3xl font-light leading-none">
                  {estimatedFare}€
                  <span className="text-sm text-ink-mute ml-1">TTC</span>
                </div>
                <div className="text-[11px] text-ink-mute mt-1">
                  {courseType === "transfert" ? "Aller simple" : `${duration}h`}
                </div>
              </>
            ) : (
              <div className="text-[12px] text-ink-mute italic">
                Devis personnalisé pour cette destination
              </div>
            )}
          </div>
        </div>
        {estimatedFare !== null && (
          <p className="text-[11px] text-ink-mute mt-3 leading-relaxed">
            Tarif indicatif. Confirmation et facturation finale après validation
            par notre équipe.
          </p>
        )}
      </div>

      {/* Contact */}
      <fieldset className="space-y-4 mb-7">
        <legend className="kicker mb-1">Vos coordonnées</legend>
        <div>
          <label htmlFor="name" className="sr-only">
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom complet"
            className="w-full px-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Téléphone"
              className="w-full px-3 py-3 text-[15px] border border-line-soft bg-paper-pure focus:outline-none focus:border-ink transition-colors min-h-[48px]"
            />
          </div>
        </div>
      </fieldset>

      {/* Submit */}
      <Button type="submit" variant="luxe" className="w-full" arrow>
        Envoyer la demande
      </Button>
      <p className="text-[11px] text-ink-mute mt-4 text-center">
        Confirmation par email/SMS sous 30 min en journée · 1h la nuit.
      </p>
    </form>
  );
}
