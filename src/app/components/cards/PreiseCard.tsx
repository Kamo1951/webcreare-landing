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
    <div>
      {items.map((item) => (
        <div key={item.id} className="bg-[var(--background-box-color) p-8]">
          <div className="bg-[var(--accent-color)]">{item.heading}</div>
          <div>{item.price}</div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default PreiseCard;
