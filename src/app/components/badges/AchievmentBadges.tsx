export type AchivementBadgesItems = {
  id: string | number;
  svg: React.ReactNode;
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
            <div className="flex place-items-center">
              <span>{item.svg}</span>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AchivementBadges;
