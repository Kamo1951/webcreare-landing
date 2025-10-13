import Image from "next/image";
import FooterShape from "./img/footer-bg-shape.png";
import Link from "next/link";

const Footer = () => {
  const footerItems = [
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
      links: ["/", "/#ueberuns", "/#referenzen", "/#preise", "/#team"],
      linksName: [
        "WebCreare",
        "Über Uns",
        "Referenzen",
        "Preise",
        "Unser Team",
      ],
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
      links: ["/datenschutzerklaerung", "/impressum", "/agb"],
      linksName: ["Datenschutzerklärung", "Impressum", "AGB"],
      arrows: true,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-[var(--background-box-color)]">
      <Image
        src={FooterShape}
        alt=""
        height={320}
        className="pointer-events-none absolute select-none"
        loading="lazy"
        aria-hidden="true"
      />
      <nav
        aria-label="Footer Navigation"
        className="flex flex-col md:flex-row justify-around z-10 px-4 md:px-8"
      >
        {footerItems.map((item) => {
          return (
            <section key={item.id} className="mt-8 md:mt-12">
              <h2 className="text-2xl md:text-xl lg:text-2xl mb-4 md:mb-8 underline decoration-[var(--accent-color)] decoration-4 underline-offset-8 font-semibold">
                {item.name}
              </h2>
              <ul>
                {item.linksName.map((underitem, index) => {
                  return (
                    <li key={underitem} className="mb-2">
                      <Link
                        href={item.links[index]}
                        className="hover:text-[var(--accent-color)] transition-all duration-300 flex items-center gap-2 group text-[var(--paragraph-text-color)] text-base md:text-lg"
                        aria-label={underitem}
                      >
                        {item.arrows && (
                          <span
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 font-bold mr-2"
                            aria-hidden="true"
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
            </section>
          );
        })}
      </nav>
      <div className="border-t border-white/10 mt-8">
        <div className="w-full md:w-[80%] mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 p-4 md:p-6">
            <p className="text-sm md:text-base text-center md:text-left">
              Copyright ©{currentYear} Webcreare. Alle Rechte vorbehalten.
            </p>
            <p className="text-sm md:text-base text-center md:text-right">
              Fotos aufgenommen in Zusammenarbeit mit{" "}
              <a
                href="https://www.medius-fitness.de"
                className="hover:underline decoration-[var(--accent-color)] text-[var(--accent-color)]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="medius Tegernsee Fitness (öffnet in neuem Tab)"
              >
                medius Tegernsee
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
