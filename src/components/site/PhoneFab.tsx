import { Phone } from "lucide-react";
import { phone } from "@/lib/contact";

/**
 * PhoneFab — floating phone CTA, bottom-right on every page.
 * Skill rule (touch-target-size): 56px hit zone, well above 44px minimum.
 */
export default function PhoneFab() {
  return (
    <a
      href={`tel:${phone.tel}`}
      aria-label="Appeler Grande Remise Transfert Paris"
      className="
        fixed bottom-5 right-5 z-50
        h-14 w-14 rounded-full
        bg-luxe text-paper-pure
        flex items-center justify-center
        shadow-[0_8px_24px_rgba(161,98,7,0.35)]
        hover:bg-luxe-bright hover:text-ink
        transition-colors
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink
      "
    >
      <Phone className="h-6 w-6" aria-hidden />
    </a>
  );
}
