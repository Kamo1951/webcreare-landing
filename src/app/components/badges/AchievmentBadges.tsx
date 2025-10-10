import { StaticImageData } from "next/image";

export type AchivementBadgesItems = {
  id: string | number;
  img: StaticImageData;
  number: string;
  numberText: string;
  bodyText: string;
};

interface AchivementBadgesProps {
  items: AchivementBadgesItems[];
}

const AchivementBadges: React.FC<AchivementBadgesProps> = ({ items }) => {
  return (
    <>
      <div className="flex justify-center">
        {items.map((item) => {
          return (
            <div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AchivementBadges;
