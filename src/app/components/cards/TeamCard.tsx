export type TeamItems = {
  img: string;
  name: string;
  role: string;
};

interface TeamCardProps {
  items: TeamItems[];
}

const TeamCard: React.FC<TeamCardProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        <div className="flex justify-center gap-x-4">
          <div className="flex flex-col">
            <div>
              {
                //image dann iwann
              }
            </div>
            <div className="flex flex-col">
              <h5 className="text-semibold">{item.name}</h5>
              <p className="text-[var(--paragraph-text-color)]">{item.role}</p>
            </div>
          </div>
        </div>;
      })}
    </>
  );
};

export default TeamCard;
