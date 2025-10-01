"use client";
import React, { useMemo, useState } from "react";

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

  // Panels, die mindestens einmal geöffnet wurden, bleiben gemountet
  const [mountedIds, setMountedIds] = useState<Set<string>>(() =>
    activeId ? new Set([activeId]) : new Set()
  );

  const onActivate = (id: string) => {
    if (!id || id === activeId) return;
    setActiveId(id);
    setMountedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <section aria-labelledby="ueberuns-heading" className="w-full">
      <h2 id="ueberuns-heading" className="sr-only">
        Über uns
      </h2>

      {/* Tabs */}
      <div role="tablist" aria-label="Über uns" className="flex gap-2">
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
              className={
                "py-3 px-5 transition-colors " +
                (isActive
                  ? "bg-[var(--accent-color)] text-[var(--foreground)]"
                  : "bg-[var(--background-box-color)] hover:bg-[var(--background-box-color-hover)]")
              }
            >
              {item.heading}
            </button>
          );
        })}
      </div>

      {/* Panels: lazy-once-keep */}
      <div className="mt-4">
        {items.map((item) => {
          const isActive = item.id === activeId;
          const isMounted = mountedIds.has(item.id);
          if (!isMounted) return null; // noch nie geöffnet → noch nicht mounten

          return (
            <div
              key={item.id}
              role="tabpanel"
              id={`panel-${item.id}`}
              aria-labelledby={`tab-${item.id}`}
              hidden={!isActive}
              aria-hidden={!isActive}
            >
              <h3 className="text-xl font-semibold">{item.heading}</h3>
              <p className="mt-2">{item.bodyText}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UeberUnsTabs;
