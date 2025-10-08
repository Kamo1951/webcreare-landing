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
    <>
      <div className="flex justify-center gap-x-4">
        {items.map((item) => {
          return (
            <div key={item.id} className="flex flex-col group">
              <div className="relative w-60 h-96 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[var(--accent-color)]/10 to-[var(--accent-color-hover)]/50" />
              </div>
              <div className="flex flex-col mt-5">
                <h5 className="font-semibold text-2xl mb-1 hover:text-[var(--accent-color)]">
                  <a target="_blank" rel="noopener noreferrer" href={item.link}>
                    {item.name}
                  </a>
                </h5>
                <p className="text-[var(--paragraph-text-color)] uppercase text-sm font-semibold">
                  {item.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamCard;
