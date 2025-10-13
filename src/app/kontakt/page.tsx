import Link from "next/link";
import { SubAndMainHeader } from "../components/headers/SubAndMainHeader";
import Navbar from "../components/navbar/Navbar";

export default function Kontakt() {
  type InfoItemsType = [
    id: string,
    svg: React.ReactNode,
    header: string,
    subheaderTop: string,
    subheaderBottom: string
  ];

  const infoItems = [
    {
      id: "Telfon",
      svg: "",
      header: "Telefonnummer",
      subheaderTop: "(+49) 151 56065802",
      subheaderBottom: "info@webcreare.de",
    },
    {
      id: "Öffnungszeiten",
      svg: "",
      header: "Öffnungszeiten",
      subheaderTop: "Montag - Freitag: 9:00 - 21:00",
      subheaderBottom: "Samstag - Sonntag: 10:00 - 19:00",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex justify-center my-20 gap-10">
        <div className="w-110 border border-[var(--border-color)] h-fit">
          <div className="px-10 py-6 bg-[var(--background-box-color)] border-[var(--border-color)]">
            <div className="">
              <SubAndMainHeader
                subheader="Unverbindlich anfragen"
                header="Kontakt zu Uns"
                widthSize="w-md"
                direction="left"
              />
              <div className="-mt-10 mb-5">
                <p className="text-[var(--paragraph-text-color)]">
                  Wir verwirklichen Ihre digitale Vision! Ob Fragen,
                  Projektplanung oder ein unverbindliches Angebot – wir sind für
                  Sie da.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {infoItems.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex place-items-center gap-4">
                    <div className="bg-[var(--background-box-color)/40] p-10">
                      {item.svg}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-2xl">{item.header}</div>
                      <div className="text-[var(--paragraph-text-color)]">
                        <p>{item.subheaderTop}</p>
                        <p>{item.subheaderBottom}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-10 bg-[var(--background-box-color)] border border-[var(--border-color)] h-fit">
          <form action="" className="w-full">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <input
                  type="text"
                  id="your-first-name"
                  name="your-first-name"
                  placeholder="Vorname*"
                  required
                  className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)]  focus:outline-none focus:border-[var(--accent-color)]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  id="your-last-name"
                  name="your-last-name"
                  placeholder="Nachname*"
                  required
                  className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)]  focus:outline-none focus:border-[var(--accent-color)]"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <input
                  type="email"
                  id="your-email"
                  name="your-email"
                  placeholder="Email-Adresse*"
                  required
                  className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)]  focus:outline-none focus:border-[var(--accent-color)]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  id="your-phone"
                  name="your-phone"
                  placeholder="Telefonnummer*"
                  required
                  className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)]  focus:outline-none focus:border-[var(--accent-color)]"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="unternehmen"
                name="unternehmen"
                placeholder="Firma / Organisation*"
                required
                className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)]  focus:outline-none focus:border-[var(--accent-color)]"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="your-message"
                name="your-message"
                placeholder="Ihre Nachricht*"
                required
                rows={6}
                className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)]  focus:outline-none focus:border-[var(--accent-color)] resize-none"
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="checkbox-datenschutz"
                  required
                  className="w-4 h-4"
                />
                <span className="text-sm text-[var(--paragraph-text-color)]">
                  Ich akzeptiere die{" "}
                  <Link
                    href="datenschutzerklärung"
                    className="text-[var(--accent-color)] hover:text-[var(--accent-color-hover)]"
                  >
                    Datenschutzerklärung*
                  </Link>
                </span>
              </label>
            </div>
            <div>
              <button
                type="submit"
                id="submit"
                className="group relative inline-flex sm:w-auto items-center justify-center overflow-hidden bg-[var(--accent-color)] text-white font-semibold transition-colors duration-300 hover:bg-[var(--accent-color-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-white/10"></span>
                <span className="relative z-10 text-sm sm:text-base md:text-lg">
                  Anfrage Absenden
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
