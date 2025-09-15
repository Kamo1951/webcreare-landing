import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroShape from "./components/navbar/imgs/hero-shape-5.png";

export default function Home() {
  return (
    <>
      <div>
        <div className="absolute">
          <Image src={HeroShape} alt="Logo" width={1200} height={1200} />
        </div>
        <Navbar />
      </div>
    </>
  );
}
