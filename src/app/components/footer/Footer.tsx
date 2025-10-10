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
      <div className=" h-130">
        <div className="absolute select-none -z-10 bg-[var(--background-box-color)]">
          <Image src={FooterShape} alt="Footer-Shape" />
        </div>
        <div className="flex justify-around place-items-center z-3">
          {footerItems.map((item) => {
            return (
              <ul key={item.id} className="">
                <p className="text-3xl">{item.name}</p>
                {item.linksName.map((underitem, index) => {
                  return (
                    <li key={underitem}>
                      <a href={item.links[index]}>{underitem}</a>
                    </li>
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
