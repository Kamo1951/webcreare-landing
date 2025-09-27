"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Kontakt } from "../../components/buttons/Kontakt";

gsap.registerPlugin(useGSAP);

export const HeroTitle: React.FC = () => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const chars = gsap.utils.toArray<HTMLElement>(".char");
      tl.from(chars, {
        y: 18,
        opacity: 0,
        duration: 0.45,
        stagger: 0.03,
        filter: "blur(1px)",
      }).from(".hero-cta", { y: 12, opacity: 0, duration: 0.4 }, "-=0.15");
    },
    { scope }
  );

  const renderChars = (text: string, extra?: string) =>
    text.split("").map((ch, i) =>
      ch === " " ? (
        <span key={i} className="inline-block">
          &nbsp;
        </span>
      ) : (
        <span
          key={i}
          className={`char inline-block will-change-transform ${extra ?? ""}`}
        >
          {ch}
        </span>
      )
    );

  return (
    <div ref={scope} className="-sm:mt-20 md:mt-20 lg:mt-24 ">
      <div className="leading-[1.2]">
        <h2 className="font-extralight sub-headline leading-[1.2]">
          {renderChars("Lassen Sie")}
        </h2>
        <h1 className="font-bold main-headline leading-[1.2]">
          {renderChars("Ihre ")}
          <span className="text-[var(--accent-color)]">
            {renderChars("Webseite")}
          </span>
        </h1>
        <h3 className="font-extralight sub-headline leading-[1.2]">
          {renderChars("Erstellen")}
        </h3>
      </div>
      <div className="mt-8 sm:mt-10 hero-cta">
        <Kontakt />
      </div>
    </div>
  );
};
