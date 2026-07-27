import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Shree Anand Mithai Bhandar, Gaya" },
      {
        name: "description",
        content:
          "Inside our Gaya sweet shop — the khoya kadai, the mithai counters, festive gift boxes, hot jalebi and hand-pounded tilkut.",
      },
      { property: "og:title", content: "Gallery — Shree Anand Mithai Bhandar" },
      {
        property: "og:description",
        content: "Photos from our Gaya sweet shop: counters, kitchen, gift boxes and daily batches.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const shots = [
  { src: images.shop, alt: "Mithai display counters inside the shop", span: "sm:col-span-2" },
  { src: images.heroSweets, alt: "Brass thali of kaju katli, laddoo and pista barfi", span: "" },
  { src: images.jalebi, alt: "Fresh jalebi and imarti straight from the kadai", span: "" },
  { src: images.giftbox, alt: "Maroon and gold festive gift box of assorted mithai", span: "" },
  { src: images.rasgulla, alt: "Rasgulla in syrup beside saffron kesar peda", span: "" },
  { src: images.tilkut, alt: "Hand-pounded Gaya tilkut on a wooden board", span: "sm:col-span-2" },
  { src: images.aboutHalwai, alt: "Halwai stirring khoya over the flame", span: "" },
];

function Gallery() {
  return (
    <>
      <section className="border-b border-border bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Gallery"
            title="Inside the shop and the kitchen"
            intro="Photographed over one working day on Tekari Road — 4 AM khoya to the evening jalebi rush."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-5 sm:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.alt} delay={i * 70} className={s.span}>
              <figure className="group h-full overflow-hidden rounded-3xl border border-border">
                <img
                  src={s.src}
                  alt={s.alt}
                  width={1100}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
