import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business } from "@/lib/business";
import { collections, images, testimonials } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Anand Mithai Bhandar | Best Sweet Shop in Gaya, Bihar" },
      {
        name: "description",
        content:
          "Gaya's trusted mithai shop since 1962. Pure desi-ghee kaju katli, Gaya tilkut, motichoor laddoo and festive gift boxes on Tekari Road. Call +91 98350 41276.",
      },
      { property: "og:title", content: "Shree Anand Mithai Bhandar | Sweet Shop in Gaya" },
      {
        property: "og:description",
        content:
          "Pure desi-ghee mithai, Gaya tilkut and festive gift boxes, handmade in Gaya since 1962.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.heroSweets}
            alt="Platter of kaju katli, motichoor laddoo and pista barfi"
            width={1600}
            height={1104}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.24_0.08_25/0.94)_0%,oklch(0.24_0.08_25/0.78)_45%,oklch(0.24_0.08_25/0.35)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Est. 1962 · Tekari Road, Gaya
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
              Pure desi-ghee mithai, made the way Gaya remembers it.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Three generations of halwais, one brass kadai, and khoya that never leaves the shop
              a day old. From Sankranti tilkut to wedding shagun boxes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={business.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-6">
              {[
                ["62 yrs", "Serving Gaya"],
                ["4.8★", "1,264 reviews"],
                ["100%", "Desi ghee"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl text-accent">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/70">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.aboutHalwai}
              alt="Halwai stirring khoya in a brass kadai at Shree Anand Mithai Bhandar"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="About us"
              title="A shop that still measures time in stirring hours"
              intro="Shree Anand Mithai Bhandar opened in 1962 as a single tilkut counter opposite the Vishnupad Mandir lane. Today our kitchen runs from 4 AM, reducing 180 litres of milk a day into khoya and chhena that never sees a refrigerator overnight."
            />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No vanaspati, no synthetic colour, no bought-in khoya. Just Bihar's own sweet
              traditions, plated for pilgrims, families and companies who send our boxes across
              India every festival season.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our counters"
              title="Sweets made fresh, twice a day"
              intro="Every tray is set in the morning batch and topped up by evening. Kilo rates below; custom boxes priced on request."
            />
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {collections.slice(0, 6).map((c, i) => (
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
                      <h3 className="font-display text-xl text-foreground">{c.name}</h3>
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
          <div className="mt-12 text-center">
            <Link
              to="/sweets"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              See the full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading eyebrow="Reviews" title="What Gaya says about us" />
        </Reveal>
        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                <Quote className="h-7 w-7 text-accent" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 font-display text-lg text-foreground">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Planning a wedding, puja or corporate order?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
              Tell us the date and headcount — we'll suggest a box, print your name on the lid and
              deliver anywhere in Gaya and Bodh Gaya free above 25 boxes.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold"
            >
              Contact us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
