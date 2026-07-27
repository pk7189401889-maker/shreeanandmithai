import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sweets", label: "Sweets" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md shadow-[0_10px_30px_-24px_oklch(0.3_0.09_25/0.7)]"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
            श्री
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight text-foreground sm:text-xl">
              Shree Anand
            </span>
            <span className="block truncate text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Mithai Bhandar · Gaya
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${business.phone}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block border-b border-border/60 py-3 text-base font-medium text-foreground last:border-0"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
