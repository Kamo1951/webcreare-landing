import Image from "next/image";

type ReferenzCardProps = {
  src: string;
  header: string;
};
export function ReferenzCard({ src, header }: ReferenzCardProps) {
  return (
    <>
      <div className="bg-[var(--background-box-color)] p-5 h-96">
        <div>
          <Image src={src} alt={header} height={200} width={300} />
        </div>
        <div className="flex">
          <div className="p-2 bg-[var(--background)] ">
            <p>01</p>
          </div>
          <h3>{header}</h3>
        </div>
      </div>
    </>
  );
}
