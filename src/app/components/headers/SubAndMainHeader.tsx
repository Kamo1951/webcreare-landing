"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type SubAndMainHeaderProps = {
  subheader: string;
  header: string;
  direction: string;
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SubAndMainHeader({
  subheader,
  header,
  direction,
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
      tl.from(".word-sub", {
        opacity: 0,
        y: 10,
        duration: 0.35,
        stagger: 0.06,
      }).from(
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
    <div ref={scope} className="grid grid-cols-1 grid-rows-2">
      <div
        className={`flex ${
          direction === "left"
            ? "lg:place-content-start place-content-center lg:ml-12"
            : direction === "center"
            ? "place-content-center"
            : "lg:place-content-end place-content-center lg:mr-12"
        }`}
      >
        <span className="bg-gradient-to-r from-[rgba(63,90,243,0)] to-[rgb(63,90,243,40)] w-8 h-2 my-auto"></span>
        <h4 className="uppercase px-2 leistungen text-[var(--accent-color)] font-bold text-xs sm:text-sm my-auto ">
          {renderWords(subheader, "word-sub")}
        </h4>
        <span className="bg-gradient-to-l from-[rgba(63,90,243,0)] to-[rgb(63,90,243,40)] w-8 h-2 my-auto"></span>
      </div>
      <div
        className={`w-3xs sm:w-sm lg:w-md ${
          direction === "left"
            ? "text-center lg:text-left lg:mr-auto mx-auto "
            : direction === "center"
            ? "text-center mx-auto"
            : "text-center lg:text-right mx-auto lg:ml-auto  "
        }`}
      >
        <h2 className="capitalize text-xl sm:text-3xl lg:text-4xl font-semibold ">
          {renderWords(header, "word-head")}
        </h2>
      </div>
    </div>
  );
}
