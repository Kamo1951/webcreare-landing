"use client";

import { useState, useEffect } from "react";

export function UeberUns() {
  const items = [
    {
      id: "1",
      heading: "Unsere Aufgabe",
      bodyText: "",
    },
    {
      id: "2",
      heading: "Unsere Vision",
      bodyText: "",
    },
    {
      id: "3",
      heading: "Unser Ziel",
      bodyText: "",
    },
  ];
  const [activeId, setActiveId] = useState(items[0].id);

  return (
    <>
      <nav className="flex gap-2">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`py-3 px-5 rounded ${
                isActive
                  ? "bg-[var(--accent-color)] text-white"
                  : "bg-neutral-200"
              }`}
              aria-pressed={isActive}
            >
              {item.heading}
            </button>
          );
        })}
      </nav>
      <div>
        {items.map((item) => (
          <div key={item.id} className="hidden">
            <p>{item.bodyText}</p>
          </div>
        ))}
      </div>
    </>
  );
}
