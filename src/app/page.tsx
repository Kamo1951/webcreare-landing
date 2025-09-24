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
          className="-z-10"
        />
      </div>
      <Navbar />
      <div className="">
        {/* <Image src={HeroCircle} /> */}
        <div className="">
          <div>
            <p>Lassen Sie</p>
          </div>
          <div>
            <p>
              <b>
                Ihre
                <span className="text-[var(--accent-color)]"> Webseite</span>
              </b>
            </p>
          </div>
          <div>
            <p>Erstellen</p>
          </div>
        </div>
        <Kontakt />
      </div>
    </>
  );
}
