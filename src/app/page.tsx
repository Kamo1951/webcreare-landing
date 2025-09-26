import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroShape from "./components/navbar/imgs/hero-shape-5.png";
import HeroCircle from "./components/navbar/imgs/hero-circle.png";
import { HeroTitle } from "./components/hero/HeroTitle";

export default function Home() {
  return (
    <>
      <div className="absolute select-none -z-10">
        <Image src={HeroShape} alt="Logo" width={1200} height={1200} />
      </div>
      <Navbar />
      <section className="container mx-auto px-4">
        <div className="absolute select-none inset-50 ml-100 -z-9 rounded-full w-[500px] h-[500px] bg-red-500"></div>
        <HeroTitle />
      </section>
    </>
  );
}
