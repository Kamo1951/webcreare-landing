import Image from "next/image";

type ReferenzCardProps = {
  src: string;
  header: string;
  id: string;
};
export function ReferenzCard({ src, header, id }: ReferenzCardProps) {
  return (
    <>
      <div className="bg-[var(--background-box-color)] p-10  ">
        <div>
          <Image src={src} alt={header} width={450} />
        </div>
        <div className="flex items-center mt-8">
          <div className="p-4 w-14 rounded-full bg-[var(--background)] flex justify-center">
            <p className="font-bold">{id}</p>
          </div>
          <h3 className="text-2xl font-semibold px-4">{header}</h3>
        </div>
      </div>
    </>
  );
}
