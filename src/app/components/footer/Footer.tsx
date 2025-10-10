import Image from "next/image";
import FooterShape from "./img/footer-bg-shape.png";
import clsx from "clsx";

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
    links: [],
    linksName: [],
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
      <div className="">
        <div className="absolute select-none -z-10 bg-[var(--background-box-color)]">
          <Image src={FooterShape} alt="Footer-Shape" />
        </div>
        <div className="flex justify-around z-3">
          {footerItems.map((item) => {
            return (
              <ul key={item.id} className="mt-12">
                <p className="text-3xl mb-8 underline decoration-[var(--accent-color)] decoration-4 underline-offset-8 font-semibold">
                  {item.name}
                </p>
                {item.linksName.map((underitem, index) => {
                  return (
                    <li key={underitem} className="mb-2 list-none ">
                      <a
                        href={item.links[index]}
                        className="hover:text-[var(--accent-color)] transition-all duration-300 flex items-center gap-2 group text-[var(--paragraph-text-color)] text-lg"
                      >
                        {item.arrows && (
                          <span
                            className={
                              "transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 font-bold mr-2 "
                            }
                          >
                            →
                          </span>
                        )}
                        {underitem}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="border-t-4 border-white/10 ">
          <div className="w-[80%] mx-auto">
            <div className="flex justify-between">
              <p>Copyright ©2024 Webcreare. Alle Rechte vorbehalten.</p>
              <p>Fotos aufgenommen in Zusammenarbeit mit medius Tegernsee.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
