/**
 * Contact info — single source of truth for phone numbers, WhatsApp, email.
 * Update once here; the rest of the site reads these constants.
 *
 * Phone format conventions (France):
 *  - `display` is the human-readable form, e.g. "06 02 43 96 96"
 *  - `tel`     is the tel: link payload, e.g. "+33602439696"
 *  - `wa`      is the wa.me payload, e.g. "33602439696" (no + sign)
 */

export const phone = {
  display: "06 02 43 96 96",
  displayInternational: "+33 (0)6 02 43 96 96",
  tel: "+33602439696",
  wa: "33602439696",
} as const;

export const email = {
  reservation: "reservation@grande-remise-transfert-paris.com",
} as const;

export const social = {
  whatsappUrl: `https://wa.me/${phone.wa}`,
} as const;
