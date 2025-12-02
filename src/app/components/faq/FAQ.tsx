"use client";
import { useState } from "react";
import Image from "next/image";
import bgCroppedLeft from "../footer/img/footer-bg-cropped-left.webp";
import bgCroppedRight from "../footer/img/footer-bg-cropped-right.webp";

export type FAQItems = {
  id: number;
  frage: string;
  antwort: string;
};

interface FAQProps {
  items: FAQItems[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<FAQItems["id"] | null>(null);

  return (
    <>
      <div className="hidden 2xl:block 2xl:absolute pointer-events-none select-none">
        <Image src={bgCroppedLeft} alt="FAQ Banner" priority={false} />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const answerId = `faq-answer-${item.id}`;

          return (
            <article
              key={item.id}
              className="flex justify-center py-2 "
              aria-labelledby={`${answerId}-button`}
            >
              <div className="w-full bg-[var(--background-box-color)] border border-[var(--border-color)]">
                <button
                  id={`${answerId}-button`}
                  aria-controls={answerId}
                  aria-expanded={isActive}
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  className="flex w-full items-center gap-4 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-color)] hover:cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className={`transition-transform duration-300 hover:cursor-pointer ${
                      isActive ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-[var(--accent-color)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                  <p className="text-base sm:text-lg md:text-xl font-medium hover:cursor-pointer">
                    {item.frage}
                  </p>
                </button>
                <div
                  id={answerId}
                  role="region"
                  aria-hidden={!isActive}
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  className={`px-4 pb-4 text-sm sm:text-base text-[var(--paragraph-text-color)] overflow-hidden transition-all duration-300 ease-in-out  ${
                    isActive
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 hover:cursor-pointer -mt-4"
                  }`}
                >
                  <p className="whitespace-pre-line ">{item.antwort}</p>
                </div>
              </div>
            </article>
          );
        })}
        <div className="hidden 2xl:block 2xl:absolute 2xl:right-0 pointer-events-none select-none">
          <Image src={bgCroppedRight} alt="FAQ Banner" priority={false} />
        </div>
      </div>
    </>
  );
};
