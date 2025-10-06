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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
      {items.map((item) => (
        <div key={item.id} className="bg-[var(--background-box-color)] p-8">
          <div className="inline-block">
            <p className="text-xl md:text-2xl font-semibold p-1 bg-[var(--accent-color)] text-white rounded">
              {item.heading}
            </p>
          </div>
          <h4 className="text-5xl md:text-5xl lg:text-6xl font-semibold">
            {item.price}
          </h4>
          <div className="text-[var(--paragraph-text-color)] text-sm md:text-base space-y-3">
            {item.bodyText.map((text, index) => (
              <p key={index} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{text}</span>
              </p>
            ))}
            <p className="flex items-center gap-2">
              <span className="text-[var(--accent-color)] font-bold text-lg">
                ➝
              </span>
              <span className="">vieles mehr</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreiseCard;
