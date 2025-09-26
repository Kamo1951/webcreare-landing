import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroShape from "./components/navbar/imgs/hero-shape-5.png";
import HeroCircle from "./components/navbar/imgs/hero-shape-6.png";
import { HeroTitle } from "./components/hero/HeroTitle";

export default function Home() {
  return (
    <>
      <div className="absolute select-none -z-2">
        <Image
          src={HeroShape}
          alt="Hero-Shape"
          width={1200}
          height={1200}
          loading="lazy"
        />
      </div>
      <Navbar />
      <section className="container mx-auto px-4 overflow-hidden-x">
        <Image
          src={HeroCircle}
          alt="Hero-Shape"
          loading="lazy"
          className="absolute -mt-20 -ml-40"
        ></Image>
        <HeroTitle />
      </section>
      <div className="h-[2000px]"></div>
    </>
  );
}
