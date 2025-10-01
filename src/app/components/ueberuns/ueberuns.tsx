import { useState } from "react";

export function ueberuns() {
  const [active, setActive] = useState(false);
  const ueberuns = [
    {
      id: "1",
      heading: "Unsere Aufgabe",
      bodyText: "",
    },
    {
      id: "2",
      heading: "Unsere Vision",
      bodyText: "",
    },
    {
      id: "3",
      heading: "Unser Ziel",
      bodyText: "",
    },
  ];

  return (
    <>
      <nav className="flex justify-around">
        {ueberuns.map((wir) => (
          <div key={wir.id} className="py-3 px-5 bg-[var(--accent-color)]">
            <p>{wir.heading}</p>
          </div>
        ))}
      </nav>
      <div>
        {ueberuns.map((wir) => (
          <div key={wir.id} className="hidden">
            <p>{wir.bodyText}</p>
          </div>
        ))}
      </div>
    </>
  );
}
