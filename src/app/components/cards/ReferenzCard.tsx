import Image, { StaticImageData } from "next/image";

type ReferenzCardProps = {
  src: string | StaticImageData;
  header: string;
  id: string;
  url?: string;
  description?: string;
};

export function ReferenzCard({
  src,
  header,
  id,
  url = "https://www.webcreare.de",
  description,
}: ReferenzCardProps) {
  return (
    <article className="bg-[var(--background-box-color)] p-4 sm:p-6 md:p-10 group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Referenz ansehen: ${header}`}
        title={header}
      >
        <div className="w-full relative overflow-hidden">
          <Image
            src={src}
            alt={`Referenz Projekt: ${header}${
              description ? ` - ${description}` : ""
            }`}
            width={450}
            height={300}
            className="w-full h-auto"
            loading="lazy"
            quality={85}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 bg-[var(--accent-color)] opacity-0 rounded-full flex items-center justify-center group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 hover:bg-[var(--accent-color-hover)]"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 transition-transform duration-300 rotate-45 group-hover:rotate-0"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center mt-4 sm:mt-6 md:mt-8">
          <div className="p-3 sm:p-4 w-12 sm:w-14 rounded-full bg-[var(--background)] flex justify-center flex-shrink-0 group-hover:bg-[var(--accent-color)] transition-colors duration-300">
            <span className="font-bold text-sm sm:text-base group-hover:text-white transition-colors duration-300">
              {id}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold px-3 sm:px-4 hover:text-[var(--accent-color)] transition-all duration-300">
            {header}
          </h3>
        </div>
      </a>
    </article>
  );
}
