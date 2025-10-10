"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type SubAndMainHeaderProps = {
  subheader: string;
  header: string;
  direction: string;
  widthSize: string;
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SubAndMainHeader({
  subheader,
  header,
  direction,
  widthSize,
}: SubAndMainHeaderProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
          once: true,
        },
      });
      tl.fromTo(
        ".gradient-span",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.35,
          stagger: 0.08,
          transformOrigin: "center",
        }
      )
        .from(
          ".word-sub",
          { opacity: 0, y: 10, duration: 0.35, stagger: 0.06 },
          "-=0.2"
        )
        .from(
          ".word-head",
          { opacity: 0, y: 12, duration: 0.4, stagger: 0.05 },
          "-=0.1"
        );
    },
    { scope }
  );

  const renderWords = (text: string, cls: string) => {
    const parts = text.trim().split(/\s+/);
    return parts.map((w, i) => (
      <React.Fragment key={`${w}-${i}`}>
        <span className={`${cls} inline-block will-change-transform`}>{w}</span>
        {i < parts.length - 1 && (
          <span aria-hidden="true" className="inline-block select-none">
            &nbsp;
          </span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div ref={scope} className="grid grid-cols-1 grid-rows-2 mb-15">
      <div
        className={`flex ${
          direction === "left"
            ? "lg:place-content-start place-content-center"
            : direction === "center"
            ? "place-content-center"
            : "lg:place-content-end place-content-center"
        }`}
      >
        <span
          className="gradient-span bg-gradient-to-r from-[rgba(63,90,243,0)] to-[rgb(63,90,243,40)] w-8 h-2 my-auto origin-center"
          style={{ opacity: 0, transform: "scaleX(0)" }}
        ></span>
        <h4 className="uppercase px-2 leistungen text-[var(--accent-color)] font-bold text-xs sm:text-sm my-auto ">
          {renderWords(subheader, "word-sub")}
        </h4>
        <span
          className="gradient-span bg-gradient-to-l from-[rgba(63,90,243,0)] to-[rgb(63,90,243,40)] w-8 h-2 my-auto origin-center"
          style={{ opacity: 0, transform: "scaleX(0)" }}
        ></span>
      </div>
      <div
        className={`w-3xs sm:w-sm lg:${widthSize} ${
          direction === "left"
            ? "text-center lg:text-left mx-auto lg:mr-auto lg:ml-0"
            : direction === "center"
            ? "text-center mx-auto"
            : "text-center lg:text-right mx-auto lg:ml-auto lg:mr-0"
        }`}
      >
        <h2 className="capitalize text-xl sm:text-3xl lg:text-4xl font-semibold ">
          {renderWords(header, "word-head")}
        </h2>
      </div>
    </div>
  );
}
