import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroShape from "./components/navbar/imgs/hero-shape-5.png";
import HeroCircle from "./components/navbar/imgs/hero-shape-6.png";
import { HeroTitle } from "./components/hero/HeroTitle";
import { LeistungsHeader } from "./components/leistungen/LeistungsHeader";

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
          alt="Hero circle"
          loading="lazy"
          className="absolute  w-9xl -mt-8 -ml-10 sm:w-2xl sm:-mt-12 sm:-ml-14 md:w-3xl md:-mt-16 md:-ml-20 lg:w-4xl lg:-mt-20 lg:-ml-24 xl:w-5xl 2xl:w-6xl 2xl:min-w-[30vw] xl:-mt-24 xl:-ml-28"
        />
        <HeroTitle />
      </section>
      <section>
        <LeistungsHeader />
      </section>
    </>
  );
}
