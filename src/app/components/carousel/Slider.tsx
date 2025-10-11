"use client";

import { useEffect, useState } from "react";

type SliderProps = {
  id: string;
  text: string[];
  richtung: string;
  ariaLabel?: string;
};

export function Slider({ id, text, richtung, ariaLabel }: SliderProps) {
  const [slides, setSlides] = useState<string[]>([]);

  useEffect(() => {
    setSlides([...text, ...text]);
  }, [text]);

  return (
    <section
      className="slider relative w-full h-[var(--slider-height)]"
      id={id}
      aria-label={ariaLabel || "Content slider"}
      role="region"
    >
      <div
        className={`slider-track absolute t-0 flex ${
          richtung === "right" ? "scrollRight" : "scrollLeft"
        }`}
        aria-live="off"
      >
        {slides.map((src, index) => (
          <div
            className="slide flex justify-center items-center"
            key={`${id}-slide-${index}`}
            role="listitem"
          >
            <p className="before:content-['★'] before:mr-5 text-white">{src}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
