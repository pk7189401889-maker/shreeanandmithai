import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, whatsappLink } from "@/lib/business";
import { collections } from "@/lib/content";

export const Route = createFileRoute("/sweets")({
  head: () => ({
    meta: [
      { title: "Sweets, Namkeen & Gift Boxes | Shree Anand Mithai Bhandar Gaya" },
      {
        name: "description",
        content:
          "Kaju katli, Gaya tilkut, motichoor laddoo, rasgulla, hot jalebi and printed festive gift boxes. Kilo rates and bulk wedding orders in Gaya, Bihar.",
      },
      { property: "og:title", content: "Sweets & Gift Boxes — Shree Anand Mithai Bhandar" },
      {
        property: "og:description",
        content: "Kilo rates for pure-ghee mithai, tilkut and festive gift boxes in Gaya.",
      },
      { property: "og:url", content: "/sweets" },
    ],
    links: [{ rel: "canonical", href: "/sweets" }],
  }),
  component: Sweets,
});

const namkeen = [
  ["Kachori & Sabzi (7–11 AM)", "₹20 / piece"],
  ["Nimki & Mathri", "₹280 / kg"],
  ["Roasted Kaju Namkeen", "₹720 / kg"],
  ["Bhujia & Chiwda mix", "₹260 / kg"],
  ["Rabri (evenings only)", "₹360 / kg"],
  ["Sugar-free Anjeer Barfi", "₹1,040 / kg"],
];

function Sweets() {
  return (
    <>
      <section className="border-b border-border bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Menu"
            title="Counters & kilo rates"
            intro="Rates are for the current season and include standard packing. Printed gift boxes, dry-fruit trays and bulk shagun orders are quoted on call."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <article className="card-lux h-full">
                <img
                  src={c.image}
                  alt={c.name}
                  width={1100}
                  height={1100}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-display text-xl text-foreground">{c.name}</h2>
                    <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                      {c.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="Also at the counter" title="Namkeen & daily specials" />
          <ul className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card">
            {namkeen.map(([item, price]) => (
              <li key={item} className="flex items-center justify-between gap-4 px-6 py-4">
                <span className="min-w-0 text-sm text-foreground">{item}</span>
                <span className="shrink-0 font-display text-lg text-primary">{price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" /> Call to order
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp your list
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
