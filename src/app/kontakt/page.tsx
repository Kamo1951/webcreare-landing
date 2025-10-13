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
      <div className="flex justfiy-center">
        <div className=" my-20 w-110">
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
        <div className="px-10 py-6 bg-[var(--background-box-color)] border-[var(--border-color)]">
          <form action="">
            <input type="text" placeholder="Vorname*" />
            <input type="text" placeholder="Nachname*" />
          </form>
        </div>
      </div>
    </>
  );
}
