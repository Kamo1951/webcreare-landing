import Image from "next/image";
import FooterShape from "./img/footer-bg-shape.png";

type footerItemsType = {
  id: string;
  name: string;
  links: string[];
  linksName: string[];
  arrows: boolean;
};

const footerItems: footerItemsType[] = [
  {
    id: "webcreare",
    name: "WebCreare",
    links: [""],
    linksName: [""],
    arrows: false,
  },
  {
    id: "hilfreicheLinks",
    name: "Hilfreiche Links",
    links: ["#", "#ueberuns", "#referenzen", "#preise", "#team"],
    linksName: ["WebCreare", "Über Uns", "Referenzen", "Preise", "Unser Team"],
    arrows: true,
  },
  {
    id: "kontakt",
    name: "Kontaktieren Sie Uns",
    links: ["mailto:info@webcreare.de", "tel:+4915156065802"],
    linksName: ["info@webcreare.de", "+49 151 56065802"],
    arrows: false,
  },
  {
    id: "rechtliches",
    name: "Rechtliches",
    links: ["datenschutz", "impressum", "agb"],
    linksName: ["Datenschutzerklärung", "Impressum", "AGB"],
    arrows: true,
  },
];

export function Footer() {
  return (
    <>
      <div className="bg-[var(--background-box-color)]">
        <div className="absolute">
          <Image src={FooterShape} alt="Footer-Shape" />
        </div>
        <div className="flex justify-around">
          {footerItems.map((item) => {
            return (
              <ul key={item.id}>
                {item.name}
                {item.linksName.map((underitem, index) => {
                  return (
                    <div key={underitem}>
                      <a href={item.links[index]}>{underitem}</a>
                    </div>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
