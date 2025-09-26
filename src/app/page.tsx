import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroShape from "./components/navbar/imgs/hero-shape-5.png";
import HeroCircle from "./components/navbar/imgs/hero-circle.png";
import { HeroTitle } from "./components/hero/HeroTitle";

export default function Home() {
  return (
    <>
      <div className="absolute select-none -z-2">
        <Image src={HeroShape} alt="Logo" width={1200} height={1200} />
      </div>
      <Navbar />
      <section className="container mx-auto px-4 overflow-hidden-x">
        <div
          className="absolute select-none -mt-200 ml-100 -z-1 rounded-full w-[1200px] h-[1200px] blur-3xl opacity-30
          bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.12)_0%,rgba(228,228,228,0.12)_28%,rgba(228,228,228,0.06)_52%,rgba(228,228,228,0)_80%)]
          "
        />
        <div
          className="absolute select-none -mt-10 ml-30 -z-3 rounded-full w-[700px] h-[700px] bg-[var(--background-box-color)]
          "
        />
        <HeroTitle />
      </section>
      <div className="h-[2000px]"></div>
    </>
  );
}
