import type { ReactNode } from "react";

type LeistungsCardsProps = {
  image: ReactNode;
  header: string;
  subheader: string;
};

export function LeistungsCard({
  image,
  header,
  subheader,
}: LeistungsCardsProps) {
  return (
    <>
      <div className="bg-[var(--background-box-color)] border border-[var(--border-color)] p-4 sm:p-6 md:p-7 text-center">
        <div className="">
          <div className="wiggle-on-hover rounded-full bg-[var(--background)] w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 border border-[var(--border-color)] m-auto flex items-center justify-center transform-gpu">
            {image}
          </div>
          <div>
            <h3 className="font-bold text-xl sm:text-2xl md:text-2xl py-4 sm:py-5 md:py-6">
              {header}
            </h3>
            <p className="text-sm sm:text-base text-[var(--paragraph-text-color)]">
              {subheader}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
