"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

export type TabItem = {
  id: string;
  heading: string;
  bodyText: string;
};

interface UeberUnsTabsProps {
  items: TabItem[];
  initialActiveId?: string | null;
}

const UeberUnsTabs: React.FC<UeberUnsTabsProps> = ({
  items,
  initialActiveId,
}) => {
  const firstId = useMemo<string | null>(() => items?.[0]?.id ?? null, [items]);

  const [activeId, setActiveId] = useState<string | null>(
    initialActiveId ?? firstId
  );

  const onActivate = (id: string) => {
    if (!id || id === activeId) return;
    setActiveId(id);
  };

  return (
    <section aria-labelledby="ueberuns-heading" className="w-full">
      <h2 id="ueberuns-heading" className="sr-only">
        Über uns
      </h2>

      <nav
        role="tablist"
        aria-label="Über uns Bereiche"
        className="flex flex-wrap gap-2 justify-center lg:justify-start my-7"
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => onActivate(item.id)}
              tabIndex={isActive ? 0 : -1}
              className={
                "py-1 px-3 sm:py-2 sm:px-5 text-sm sm:text-base font-semibold cursor-pointer transition-colors  focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 " +
                (isActive
                  ? "bg-[var(--accent-color)] text-white "
                  : "bg-[var(--background-box-color)] hover:bg-[var(--background-box-color-hover)] text-[var(--text-color)]")
              }
            >
              {item.heading}
            </button>
          );
        })}
      </nav>
      <div className="mt-4">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <article
              key={item.id}
              role="tabpanel"
              id={`panel-${item.id}`}
              aria-labelledby={`tab-${item.id}`}
              hidden={!isActive}
              tabIndex={0}
              className={isActive ? "block" : "hidden"}
              itemScope
              itemType="https://schema.org/Article"
            >
              <h3 className="sr-only" itemProp="headline">
                {item.heading}
              </h3>
              <p
                className="text-sm sm:text-base text-[var(--paragraph-text-color)] whitespace-pre-line leading-relaxed"
                itemProp="articleBody"
              >
                {item.bodyText}
              </p>
            </article>
          );
        })}
      </div>

      <footer className="mt-8 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--background-box-color)] border border-[var(--background-box-color-hover)] hover:border-[var(--accent-color)] transition-all duration-300 group">
          <span className="text-sm sm:text-base text-[var(--paragraph-text-color)]">
            Erfahren Sie mehr
          </span>
          <Link
            href="/ueberuns"
            className="text-[var(--accent-color)] hover:text-white font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-1 flex items-center gap-1"
            aria-label="Mehr über uns erfahren"
          >
            über uns
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default UeberUnsTabs;
