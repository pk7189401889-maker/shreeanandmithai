import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, whatsappLink } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions | Shree Anand Mithai Bhandar, Gaya" },
      {
        name: "description",
        content:
          "Visit us on Tekari Road near Vishnupad Mandir, Gaya 823001. Call +91 98350 41276, WhatsApp your order or email hello@shreeanandmithai.in. Open 7 AM–10 PM daily.",
      },
      { property: "og:title", content: "Contact — Shree Anand Mithai Bhandar, Gaya" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, email, address and map for our Gaya sweet shop.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="border-b border-border bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Contact"
            title="Come to the counter, or send us your list"
            intro="Orders above 5 kg or 25 boxes are best placed a day ahead so the batch is made fresh for you."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-5">
              <li className="flex gap-4 rounded-3xl border border-border bg-card p-6">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-display text-lg text-foreground">Phone</p>
                  <a
                    href={`tel:${business.phone}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {business.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-3xl border border-border bg-card p-6">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-display text-lg text-foreground">WhatsApp</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {business.phoneDisplay} — send your order list
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-3xl border border-border bg-card p-6">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-display text-lg text-foreground">Email</p>
                  <a
                    href={`mailto:${business.email}`}
                    className="break-all text-sm text-muted-foreground hover:text-primary"
                  >
                    {business.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-3xl border border-border bg-card p-6">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-display text-lg text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">
                    {business.street}, {business.city}, {business.state} {business.postalCode}
                  </p>
                  <a
                    href={business.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-primary"
                  >
                    Get directions →
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-3xl border border-border bg-card p-6">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-display text-lg text-foreground">Opening hours</p>
                  <p className="text-sm text-muted-foreground">{business.hours}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-border">
              <iframe
                title={`Map to ${business.name}, Gaya`}
                src={business.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[420px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
