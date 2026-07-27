import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{business.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Three generations of halwais making pure desi-ghee mithai, Gaya tilkut and festive
            gift boxes on Tekari Road.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.social.instagram}
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={business.social.youtube}
              aria-label="YouTube"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground">Our Story</Link></li>
            <li><Link to="/sweets" className="hover:text-primary-foreground">Sweets & Gift Boxes</Link></li>
            <li><Link to="/gallery" className="hover:text-primary-foreground">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact & Directions</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">Visit us</p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {business.street}, {business.city}, {business.state} {business.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${business.phone}`} className="hover:text-primary-foreground">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${business.email}`} className="hover:text-primary-foreground">
                {business.email}
              </a>
            </li>
            <li className="pt-1 text-primary-foreground/60">{business.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
