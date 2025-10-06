import Image, { StaticImageData } from "next/image";

type ReferenzCardProps = {
  src: string | StaticImageData;
  header: string;
  id: string;
};
export function ReferenzCard({ src, header, id }: ReferenzCardProps) {
  return (
    <>
      <div className="bg-[var(--background-box-color)] p-4 sm:p-6 md:p-10">
        <div className="w-full">
          <Image src={src} alt={header} width={450} className="w-full h-auto" />
        </div>
        <div className="flex items-center mt-4 sm:mt-6 md:mt-8">
          <div className="p-3 sm:p-4 w-12 sm:w-14 rounded-full bg-[var(--background)] flex justify-center flex-shrink-0">
            <p className="font-bold text-sm sm:text-base">{id}</p>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold px-3 sm:px-4">
            {header}
          </h3>
        </div>
      </div>
    </>
  );
}
