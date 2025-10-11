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
        <article
          key={item.id}
          className="bg-[var(--background-box-color)] p-8 flex flex-col"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="mb-6">
            <h3
              className="text-xl md:text-2xl font-semibold p-1 px-2 bg-[var(--accent-color)] text-white rounded w-fit"
              itemProp="name"
            >
              {item.heading}
            </h3>
          </div>
          <div
            className="flex items-end"
            itemProp="priceSpecification"
            itemScope
            itemType="https://schema.org/PriceSpecification"
          >
            <data value={item.price.replace(/[^\d]/g, "")} itemProp="price">
              <span className="text-4xl md:text-5xl xl:text-6xl font-semibold">
                {item.price}
              </span>
            </data>
            <span
              className={clsx(
                monatlich ? "" : "hidden",
                "text-[var(--paragraph-text-color)]"
              )}
            >
              <meta itemProp="priceCurrency" content="EUR" />
              <span itemProp="billingDuration" content="P1M">
                /Monat
              </span>
            </span>
          </div>

          <div className="mb-3">
            <p
              className={clsx(
                subtitle !== "" ? "" : "hidden",
                "mt-2 text-[var(--accent-color-hover)]"
              )}
              itemProp="description"
            >
              {subtitle}
            </p>
          </div>
          <ul className="text-[var(--paragraph-text-color)] text-sm md:text-base space-y-3 mb-8 flex-grow list-none">
            {item.bodyText.map((text, textIndex) => (
              <li
                key={`${item.id}-${textIndex}`}
                className="flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{text}</span>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span
                className="text-[var(--accent-color)] font-bold text-lg"
                aria-hidden="true"
              >
                ➝
              </span>
              <span>+ vieles mehr</span>
            </li>
            <li className="flex justify-center mt-5">
              <Kontakt href={buttonLink} text={buttonLabel} />
            </li>
          </ul>
        </article>
      ))}
    </>
  );
};

export default PreiseCard;
