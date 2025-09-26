import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroShape from "./components/navbar/imgs/hero-shape-5.png";
import HeroCircle from "./components/navbar/imgs/hero-circle.png";
import { Kontakt } from "./components/buttons/Kontakt";

export default function Home() {
  return (
    <>
      <div className="absolute">
        <Image
          src={HeroShape}
          alt="Logo"
          width={1200}
          height={1200}
          className="-z-10 select-none"
        />
      </div>
      <Navbar />
      <section className="container mx-auto px-4">
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 ">
          <div className="leading-snug">
            <h2 className="font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
              Lassen Sie
            </h2>
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]">
              Ihre
              <span className="text-[var(--accent-color)]"> Webseite</span>
            </h1>
            <h3 className="font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
              Erstellen
            </h3>
          </div>
          <div className="mt-8 sm:mt-10">
            <Kontakt />
          </div>
        </div>
      </section>
    </>
  );
}
