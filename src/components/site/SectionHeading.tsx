import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      ) : null}
      <As className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </As>
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </div>
  );
}
