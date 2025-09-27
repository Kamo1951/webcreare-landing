type LeistungsHeaderProps = {
  subheader: string;
  header: string;
};

export function LeistungsHeader({ subheader, header }: LeistungsHeaderProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-2 ">
      <div className="flex place-content-center">
        <span className="bg-gradient-to-r from-[rgba(63,90,243,0)] to-[rgb(63,90,243,40)] w-8 h-2 my-auto"></span>
        <h4 className="uppercase px-2 leistungen text-[var(--accent-color)] font-bold text-sm my-auto ">
          {subheader}
        </h4>
        <span className="bg-gradient-to-l from-[rgba(63,90,243,0)] to-[rgb(63,90,243,40)] w-8 h-2 my-auto"></span>
      </div>
      <div className="mx-auto w-md text-center">
        <h2 className="capitalize text-4xl font-semibold ">{header}</h2>
      </div>
    </div>
  );
}
