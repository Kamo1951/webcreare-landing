export type PreisItems = {
  id: string;
  heading: string;
  price: string;
  bodyText: string[];
};

interface PreisCardProps {
  items: PreisItems[];
}

const PreiseCard: React.FC<PreisCardProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-4">
      {items.map((item) => (
        <div key={item.id} className="bg-[var(--background-box-color)] p-8">
          <div className="">
            <p className="text-3xl font-semibold p-2 bg-[var(--accent-color)] text-white">
              {item.heading}
            </p>
          </div>
          <h4 className="text-7xl font-semibold">{item.price}</h4>
          <div className="text-[var(--paragraph-text-color)]">
            {item.bodyText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreiseCard;
