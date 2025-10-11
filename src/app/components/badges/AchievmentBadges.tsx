"use client";

import type { ReactNode } from "react";
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type NumberParts = {
  original: string;
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
};

export type AchivementBadgesItems = {
  id: string | number;
  svg: ReactNode;
  number: string | number;
  numberText: string;
  bodyText: string;
  ariaLabel?: string;
};

interface AchivementBadgesProps {
  items: AchivementBadgesItems[];
  heading?: string;
  headingLevel?: "h1" | "h2" | "h3";
}

const extractNumberParts = (value: string | number): NumberParts => {
  const stringValue = String(value).trim();
  const numberMatch = stringValue.match(/-?\d+(?:[.,]\d+)?/);

  if (!numberMatch || numberMatch.index === undefined) {
    return {
      original: stringValue,
      prefix: "",
      suffix: "",
      target: 0,
      decimals: 0,
    };
  }

  const numericPart = numberMatch[0].replace(/\./g, "").replace(",", ".");
  const target = parseFloat(numericPart);
  const decimals = numericPart.includes(".")
    ? numericPart.split(".")[1].length
    : 0;

  const prefix = stringValue.slice(0, numberMatch.index);
  const suffix = stringValue.slice(numberMatch.index + numberMatch[0].length);

  return {
    original: stringValue,
    prefix,
    suffix,
    target: Number.isFinite(target) ? target : 0,
    decimals,
  };
};

const formatValue = (value: number, decimals: number) => {
  if (decimals > 0) {
    return value.toFixed(decimals).replace(".", ",");
  }
  return Math.round(value).toLocaleString("de-DE");
};

let gsapPluginsRegistered = false;

if (typeof window !== "undefined" && !gsapPluginsRegistered) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  gsapPluginsRegistered = true;
}

const AchivementBadges: React.FC<AchivementBadgesProps> = ({
  items,
  heading = "Unsere Erfolge und Kennzahlen",
  headingLevel = "h2",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const badgesWithNumbers = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        numberParts: extractNumberParts(item.number),
      })),
    [items]
  );

  useGSAP(
    (context) => {
      const scope = (context.scope ||
        containerRef.current) as HTMLElement | null;

      if (!scope) return undefined;

      const cards = gsap.utils.toArray<HTMLElement>(
        scope.querySelectorAll(".ach-badge-card")
      );

      const triggers: ScrollTrigger[] = [];

      cards.forEach((card) => {
        if (!card.isConnected) return;

        const numberElement =
          card.querySelector<HTMLElement>(".ach-badge-number");

        if (!numberElement) return;

        const target = parseFloat(numberElement.dataset.target ?? "0");
        const decimals = parseInt(numberElement.dataset.decimals ?? "0", 10);
        const prefix = numberElement.dataset.prefix ?? "";
        const suffix = numberElement.dataset.suffix ?? "";
        const original = numberElement.dataset.original ?? "";

        gsap.set(card, { autoAlpha: 0, y: 30 });

        const timeline = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
            onEnter: () => {
              const counter = { value: 0 };

              gsap.to(card, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
              });

              gsap.to(counter, {
                value: target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  numberElement.textContent = `${prefix}${formatValue(
                    counter.value,
                    decimals
                  )}${suffix}`;
                },
                onComplete: () => {
                  numberElement.textContent =
                    original ||
                    `${prefix}${formatValue(target, decimals)}${suffix}`;
                },
              });
            },
          },
        });

        if (timeline.scrollTrigger) {
          triggers.push(timeline.scrollTrigger);
        }
      });

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef, dependencies: [badgesWithNumbers] }
  );

  const HeadingTag = headingLevel;

  return (
    <section
      ref={containerRef}
      className="flex flex-col gap-8"
      aria-labelledby="achievements-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <HeadingTag id="achievements-heading" className="sr-only" itemProp="name">
        {heading}
      </HeadingTag>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8" role="list">
        {badgesWithNumbers.map((item, index) => {
          const { original, prefix, suffix, target, decimals } =
            item.numberParts;
          const ariaLabel =
            item.ariaLabel ||
            `${original} ${item.numberText}: ${item.bodyText}`;

          return (
            <article
              key={item.id}
              className="ach-badge-card flex min-w-[260px] max-w-sm flex-1 items-start gap-5 rounded-2xl bg-[var(--glass-background)] p-6"
              role="listitem"
              aria-label={ariaLabel}
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />

              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--background-box-color)] text-[var(--accent-color)]"
                aria-hidden="true"
                itemProp="image"
              >
                {item.svg}
              </div>

              <div className="space-y-3" itemProp="item">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-3xl font-semibold">
                  <data
                    className="ach-badge-number text-4xl font-extrabold tracking-tight text-white"
                    value={target}
                    data-original={original}
                    data-prefix={prefix}
                    data-suffix={suffix}
                    data-target={target}
                    data-decimals={decimals}
                    itemProp="value"
                  >
                    {original}
                  </data>
                  <span
                    className="text-lg font-medium text-[var(--paragraph-text-color)]"
                    itemProp="name"
                  >
                    {item.numberText}
                  </span>
                </div>
                <p
                  className="max-w-xs text-base text-[var(--paragraph-text-color)]"
                  itemProp="description"
                >
                  {item.bodyText}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AchivementBadges;
