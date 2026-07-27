import { createFileRoute } from "@tanstack/react-router";
import { Award, Leaf, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story Since 1962 | Shree Anand Mithai Bhandar, Gaya" },
      {
        name: "description",
        content:
          "Three generations of halwais in Gaya, Bihar. How Shree Anand Mithai Bhandar makes khoya, tilkut and chhena sweets in pure desi ghee every morning.",
      },
      { property: "og:title", content: "Our Story — Shree Anand Mithai Bhandar" },
      {
        property: "og:description",
        content: "Three generations of halwais making pure desi-ghee mithai in Gaya since 1962.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Leaf,
    title: "Only desi ghee",
    body: "Every frying and roasting step uses cow ghee clarified in-house. No vanaspita, no palm blend, no synthetic colour — ever.",
  },
  {
    icon: Users,
    title: "Made by hand, daily",
    body: "Eleven halwais, two morning batches and one evening batch. Nothing is carried over to the next day; leftovers go to the Vishnupad langar.",
  },
  {
    icon: Award,
    title: "FSSAI licensed",
    body: "Licence 10419004000587. Milk sourced from two dairies in Bodh Gaya and fat-tested at the counter before it enters the kadai.",
  },
];

const timeline = [
  ["1962", "Shri Anand Prasad opens a single tilkut counter on Tekari Road with two brass kadais."],
  ["1978", "The Bengali chhena counter is added after his son trains for a season in Kolkata."],
  ["1996", "First printed festive gift boxes; Gaya's businesses start ordering Diwali hampers."],
  ["2011", "Kitchen rebuilt with steam jacketed vessels — same recipes, cleaner process."],
  ["2024", "Third generation takes over the counter; nationwide courier of tilkut and dry-fruit boxes."],
];

function About() {
  return (
    <>
      <section className="border-b border-border bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="About us"
            title="Sixty-two years on the same lane"
            intro="We have never opened a second branch. Everything we sell is made twenty steps behind the counter you buy it from."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.aboutHalwai}
              alt="Halwai reducing milk into khoya in a brass kadai"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              A recipe book nobody has written down
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Our khoya takes four hours of continuous stirring. The halwai judges it by the way
                it leaves the side of the kadai, not by a thermometer — a skill passed from Shri
                Anand Prasad to his son Rajkumar, and now to his grandson Aditya.
              </p>
              <p>
                Sesame for tilkut is bought raw from Bihar's own Sankranti crop, roasted the same
                week and pounded by hand with gur or khoya. It is the only sweet we refuse to
                mechanise, because the machine version cracks instead of flaking.
              </p>
              <p>
                Pilgrims from Bodh Gaya, families from Patna and Delhi offices all order the same
                boxes for the same reason: what arrives tastes exactly like what they remember
                buying at the counter.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-7 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-border bg-card p-7">
                  <v.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-5 font-display text-xl text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading eyebrow="Milestones" title="How the shop grew" />
        <ol className="mt-12 space-y-8">
          {timeline.map(([year, text], i) => (
            <Reveal key={year} delay={i * 70}>
              <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-5">
                <span className="font-display text-2xl text-accent">{year}</span>
                <p className="min-w-0 border-l border-border pl-5 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
