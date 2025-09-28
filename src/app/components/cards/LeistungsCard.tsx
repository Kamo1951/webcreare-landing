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
          <div className="rounded-full bg-[var(--background)] w-20 h-20 border border-[var(--border-color)] m-auto">
            <span className="flex justify-center content-center">{image}</span>
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
