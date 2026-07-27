import { MessageCircle, Phone } from "lucide-react";
import { business, whatsappLink } from "@/lib/business";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-7 sm:right-6">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-13 w-13 h-14 w-14 place-items-center rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${business.phone}`}
        aria-label="Call us"
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
