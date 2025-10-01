"use client";

import { useEffect, useState } from "react";

type SliderProps = {
  id: string;
  text: string[];
  richtung: string;
};

export function Slider({ id, text, richtung }: SliderProps) {
  const [slides, setSlides] = useState<string[]>([]);
  useEffect(() => {
    setSlides([...text, ...text]);
  }, [text]);
  return (
    <>
      <div className="slider relative w-full h-[var(--slider-height)]" id={id}>
        <div
          className={`slider-track absolute t-0 flex  ${
            richtung === "right" ? "scrollRight" : "scrollLeft"
          }`}
        >
          {slides.map((src, index) => (
            <div
              className="slide flex justify-center items-center "
              key={index}
            >
              <span className="before:content-['★'] before:mr-5">{src}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
