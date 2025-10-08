import { Kontakt } from "../buttons/Kontakt";
import clsx from "clsx";

export type PreisItems = {
  id: string;
  heading: string;
  price: string;
  bodyText: string[];
};

interface PreisCardProps {
  items: PreisItems[];
  subtitle: string;
  monatlich: boolean;
  buttonLink: string;
  buttonLabel: string;
}

const PreiseCard: React.FC<PreisCardProps> = ({
  items,
  subtitle,
  monatlich,
  buttonLink,
  buttonLabel,
}) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-[var(--background-box-color)] p-8 flex flex-col"
        >
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-semibold p-1 px-2 bg-[var(--accent-color)] text-white rounded w-fit">
              {item.heading}
            </p>
          </div>
          <div className="flex items-end">
            <h4 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold ">
              {item.price}
            </h4>
            <p
              className={clsx(
                monatlich ? "" : "hidden",
                "text-[var(--paragraph-text-color)]"
              )}
            >
              /Monat
            </p>
          </div>

          <div className="mb-3">
            <p
              className={clsx(
                subtitle !== "" ? "" : "hidden",
                "mt-2 text-[var(--accent-color-hover)]"
              )}
            >
              {subtitle}
            </p>
          </div>
          <div className="text-[var(--paragraph-text-color)] text-sm md:text-base space-y-3 mb-8 flex-grow">
            {item.bodyText.map((text, index) => (
              <p key={index} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{text}</span>
              </p>
            ))}
            <p className="flex items-center gap-2">
              <span className="text-[var(--accent-color)] font-bold text-lg">
                ➝
              </span>
              <span className="">+ vieles mehr</span>
            </p>
            <div className="flex justify-center mt-5">
              <Kontakt href={buttonLink} text={buttonLabel} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PreiseCard;
