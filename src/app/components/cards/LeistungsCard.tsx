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
      <div className="bg-[var(--background-box-color)] border border-[var(--border-color)] p-7 text-center ">
        <div className="">
          <div className="wiggle-on-hover rounded-full bg-[var(--background)] w-26 h-26 border border-[var(--border-color)] m-auto flex items-center justify-center transform-gpu">
            {image}
          </div>
          <div>
            <h3 className="font-bold text-2xl py-6">{header}</h3>
            <p className="text-[var(--paragraph-text-color)]">{subheader}</p>
          </div>
        </div>
      </div>
    </>
  );
}
