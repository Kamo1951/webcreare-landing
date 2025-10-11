import Image, { StaticImageData } from "next/image";

export type TeamItems = {
  id: string | number;
  img: StaticImageData;
  name: string;
  role: string;
  link: string;
};

interface TeamCardProps {
  items: TeamItems[];
}

const TeamCard: React.FC<TeamCardProps> = ({ items }) => {
  return (
    <section
      className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-x-4 px-4"
      aria-label="Team members"
    >
      {items.map((item) => {
        return (
          <article
            key={item.id}
            className="flex flex-col group w-full sm:w-[calc(50%-0.5rem)] lg:w-60"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="relative w-full aspect-[2/3] overflow-hidden max-w-[240px] mx-auto lg:max-w-none">
              <Image
                src={item.img}
                alt={`${item.name} - ${item.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                priority={false}
                quality={85}
                itemProp="image"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[var(--accent-color)]/10 to-[var(--accent-color-hover)]/50"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col mt-5 text-center lg:text-start">
              <h3 className="font-semibold text-xl sm:text-2xl mb-1 hover:text-[var(--accent-color)]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  itemProp="url"
                  aria-label={`View ${item.name}'s profile`}
                >
                  <span itemProp="name">{item.name}</span>
                </a>
              </h3>
              <p
                className="text-[var(--paragraph-text-color)] uppercase text-sm font-semibold"
                itemProp="jobTitle"
              >
                {item.role}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default TeamCard;
