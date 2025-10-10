import Image from "next/image";
import FooterShape from "./img/footer-bg-shape.png";
import Link from "next/link";

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
      <div className="bg-[var(--background-box-color)]">
        <Image
          src={FooterShape}
          alt="Footer-Shape"
          height={320}
          className="pointer-events-none absolute select-none "
        />
        <div className="flex flex-col md:flex-row justify-around z-10 px-4 md:px-8">
          {footerItems.map((item) => {
            return (
              <ul key={item.id} className="mt-8 md:mt-12">
                <p className="text-2xl md:text-xl lg:text-2xl mb-4 md:mb-8 underline decoration-[var(--accent-color)] decoration-4 underline-offset-8 font-semibold">
                  {item.name}
                </p>
                {item.linksName.map((underitem, index) => {
                  return (
                    <li key={underitem} className="mb-2 list-none ">
                      <Link
                        href={item.links[index]}
                        className="hover:text-[var(--accent-color)] transition-all duration-300 flex items-center gap-2 group text-[var(--paragraph-text-color)] text-base md:text-lg"
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
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="border-t border-white/10 mt-8">
          <div className="w-full md:w-[80%] mx-auto px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 p-4 md:p-6">
              <p className="text-sm md:text-base text-center md:text-left">
                Copyright ©2024 Webcreare. Alle Rechte vorbehalten.
              </p>
              <p className="text-sm md:text-base text-center md:text-right">
                Fotos aufgenommen in Zusammenarbeit mit{" "}
                <span className="hover:underline decoration-[var(--accent-color)] text-[var(--accent-color)]">
                  <a href="https://www.medius-fitness.de">medius Tegernsee.</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
