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
import SpeckertMobile from "../components/navbar/imgs/mobile imgs/Veerdesign.webp";
import BausuchtMobile from "../components/navbar/imgs/mobile imgs/Bausucht.webp";

export default function Referenzen() {
  return (
    <>
      <Navbar />
      <div>
        <SubAndMainHeader
          subheader="Referenzen"
          header="Unsere aktuellsten Projekte"
          direction="center"
          widthSize="w-md"
        />
        <div className="flex flex-col sm:flex-row place-content-center gap-8 px-4">
          <ReferenzCard
            src={Speckert}
            mobileSrc={BausuchtMobile}
            header="E-commerce für Kunst"
            id="01"
            url="https://www.speckert.net/"
          />
          <ReferenzCard
            src={Veerdesign}
            mobileSrc={VeerdesignMobile}
            header="Buchsverkaufs Webseite"
            id="02"
            url="https://veerdesign.de/"
          />
        </div>
      </div>
    </>
  );
}
