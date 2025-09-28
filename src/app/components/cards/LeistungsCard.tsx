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
      <div className="bg-[var(--background-box-color)] border border-white/10 border-[1px] p-8 text-center">
        <div className="w-72">
          <img src={image} alt={header} />
          <h3 className="font-bold text-2xl py-6">{header}</h3>
          <p className="text-white/70">{subheader}</p>
        </div>
      </div>
    </>
  );
}
