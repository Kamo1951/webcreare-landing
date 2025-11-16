"use client";
import { useState } from "react";

export type FAQItems = {
  id: number;
  frage: string;
  antwort: string;
};

interface FAQProps {
  items: FAQItems[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      <div className="flex flex-col ">
        {items.map((item) => (
          <div key={item.id} className="flex justify-center align-center py-2">
            <div
              onClick={() => setActiveId(activeId === item.id ? 0 : item.id)}
              className="w-200 bg-[var(--background-box-color)] p-5 border border-[var(--border-color)] "
            >
              <div className="flex items-center">
                <span className="px-4">
                  <svg
                    className={`w-5 h-5 text-[var(--accent-color)] ${activeId === item.id ? "rotate-[180deg] transition-all duration-200" : "rotate-[0deg] transition-all duration-300"}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <p className="text-xl">{item.frage}</p>
              </div>
              <div>
                <p
                  className={`text-[var(--paragraph-text-color)] whitespace-pre-line pt-4 overflow-hidden transition-all duration-200 ease-in-out ${
                    activeId === item.id
                      ? "max-h-100 opacity-100"
                      : "max-h-0 opacity-0 -mt-4"
                  }`}
                >
                  {item.antwort}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
