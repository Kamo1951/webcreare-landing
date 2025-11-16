//components
import Navbar from "../components/navbar/Navbar";
import { SubAndMainHeader } from "../components/headers/SubAndMainHeader";
import { ReferenzCard } from "../components/cards/ReferenzCard";

//desktop images
import Veerdesign from "../components/imgs/Veerdesign.webp";
import Speckert from "../components/imgs/Speckert.webp";
import Bausucht from "../components/imgs/Bausucht.webp";

//mobile images
import VeerdesignMobile from "../components/navbar/imgs/mobile imgs/Veerdesign.webp";
import SpeckertMobile from "../components/navbar/imgs/mobile imgs/Speckert.webp";
import BausuchtMobile from "../components/navbar/imgs/mobile imgs/Bausucht.webp";

export default function Referenzen() {
  return (
    <>
      <Navbar />
      <div className="my-20">
        <SubAndMainHeader
          subheader="Referenzen"
          header="Ausgewählte Projekte"
          direction="center"
          widthSize="w-md"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-10 lg:px-20">
          <ReferenzCard
            src={Speckert}
            mobileSrc={SpeckertMobile}
            header="E-commerce für Kunst"
            id="01"
            url="https://www.speckert.net/"
          />
          <ReferenzCard
            src={Veerdesign}
            mobileSrc={VeerdesignMobile}
            header="Buchsverkaufs Webseite"
            id="02"
            url="https://www.veerdesign.de/"
          />
          <ReferenzCard
            src={Bausucht}
            mobileSrc={BausuchtMobile}
            header="Minecraft Server-Seite"
            id="03"
            url="https://www.landania.net/"
          />
        </div>
      </div>
    </>
  );
}
