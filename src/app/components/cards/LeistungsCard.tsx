type LeistungsCardsProps = {
  image: string;
  header: string;
  subheader: string;
};

export function LeistungsCard({
  image,
  header,
  subheader,
}: LeistungsCardsProps) {
  return (
    <>
      <div className="bg-[var(--background-box-color)] border border-[var(--border-color)] border-[1px] p-7 text-center ">
        <div className="">
          <div>
            <img src={image} alt={header} />
          </div>
          <div>
            <h3 className="font-bold text-2xl py-6">{header}</h3>
            <p className="text-[var(--paragraph-text-color)]">{subheader}</p>
          </div>
        </div>
      </div>
    </>
  );
}
