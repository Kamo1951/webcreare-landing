import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroShape from "./components/navbar/imgs/hero-shape-5.png";
import HeroCircle from "./components/navbar/imgs/hero-shape-6.png";
import { HeroTitle } from "./components/hero/HeroTitle";
import { SubAndMainHeader } from "./components/headers/SubAndMainHeader";
import { LeistungsCard } from "./components/cards/LeistungsCard";

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
          className="absolute select-none w-9xl -mt-8 -ml-10 sm:w-2xl sm:-mt-12 sm:-ml-14 md:w-3xl md:-mt-16 md:-ml-20 lg:w-4xl lg:-mt-20 lg:-ml-24 xl:w-5xl 2xl:w-6xl 2xl:min-w-[30vw] xl:-mt-24 xl:-ml-28"
        />
        <HeroTitle />
      </section>
      <section className="pt-38">
        <SubAndMainHeader
          subheader="Unsere Leistungen"
          header="Wir helfen beim Wachstum Ihrer Marke"
        />
        <div className="flex justify-center">
          <div className="mt-20 w-full max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <LeistungsCard
              image=""
              header="Responsive Design"
              subheader="Eine Webseite angepasst für jedes Gerät."
            />
            <LeistungsCard
              image=""
              header="Logo- & Webdesign"
              subheader="Ein Design welches jeden Geschmack trifft."
            />
            <LeistungsCard
              image=""
              header="Webentwicklung"
              subheader="Individuell programmierte und eingestellte Webseite nach Ihren Vorstellungen."
            />
            <LeistungsCard
              image=""
              header="SEO"
              subheader="Wir optimieren die Sichtbarkeit Ihrer Webseite auf Google."
            />
          </div>
        </div>
      </section>
    </>
  );
}
