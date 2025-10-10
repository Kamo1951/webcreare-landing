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
      <div className="flex justify-center gap-8">
        {items.map((item) => {
          return (
            <div className="flex place-items-center gap-4">
              <span className="rounded-full bg-[var(--background-box-color)] p-4 ">
                {item.svg}
              </span>
              <div className="flex flex-col">
                <div className="flex place-items-center text-3xl gap-2">
                  <p className="text-4xl">{item.number}</p>
                  <p>{item.numberText}</p>
                </div>
                <div className="w-xs">
                  <p className="text-[var(--paragraph-text-color)]">
                    {item.bodyText}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AchivementBadges;
