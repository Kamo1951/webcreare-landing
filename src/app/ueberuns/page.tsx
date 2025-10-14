import Link from "next/link";
import Navbar from "../components/navbar/Navbar";

const GradientPlaceholder = ({ label }: { label: string }) => (
  <div className="relative flex aspect-[3/2] w-full items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-br from-[var(--accent-color)]/25 via-transparent to-[var(--background-box-color)] shadow-inner">
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--accent-color)/18,transparent_60%)]"
      aria-hidden
    />
    <span className="relative z-10 text-xs uppercase tracking-[0.3em] text-[var(--paragraph-text-color)]">
      {label}
    </span>
  </div>
);

const sectionHeading =
  "text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]";
const bodyCopy = "text-[var(--paragraph-text-color)] leading-relaxed";

export default function UeberUns() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pb-20">
        <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-16">
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--accent-color)/16,transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex place-content-left">
                <span
                  className="gradient-span bg-gradient-to-r from-[rgba(63,90,243,0)] to-[rgb(63,90,243,40)] w-8 h-2 my-auto origin-center"
                  aria-hidden="true"
                ></span>
                <span className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase text-[var(--accent-color)]">
                  Über Webcreare
                </span>
                <span
                  className="gradient-span bg-gradient-to-l from-[rgba(63,90,243,0)] to-[rgb(63,90,243,40)] w-8 h-2 my-auto origin-center"
                  aria-hidden="true"
                ></span>
              </div>

              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                Weniger Floskel, mehr Wirkung.
              </h1>
              <p className="text-lg text-[var(--paragraph-text-color)] sm:text-xl">
                Webcreare ist kein großes Wort, sondern unser tägliches Werk.
                Wir sind Mikolaj Spruch und Oliwer Keskin aus Tegernsee: ein
                kleines Team mit klarem Anspruch – Websites, die nicht nur gut
                aussehen, sondern spürbar wirken.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-[var(--accent-color)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-color-hover)]"
                >
                  Lass Uns Sprechen
                </Link>
                {/* <Link
                  href="/referenzen"
                  className="text-sm font-semibold text-[var(--accent-color)] underline-offset-4 hover:underline"
                >
                  Zu ausgewählten Projekten
                </Link> */}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <GradientPlaceholder label="Platzhalter Bild – Team" />
              <GradientPlaceholder label="Platzhalter Bild – Studio" />
              <GradientPlaceholder label="Platzhalter Bild – Projekt" />
              <GradientPlaceholder label="Platzhalter Bild – Details" />
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-6">
                <h2 className={sectionHeading}>
                  Wir bauen, was du wirklich brauchst.
                </h2>
                <p className={bodyCopy}>
                  Mikolaj hat sich Design und Entwicklung selbst beigebracht,
                  aus Neugier und Disziplin. Keine Titel, kein Diplom-Showcase –
                  lieber Ergebnisse, die für sich sprechen: schnelle Ladezeiten,
                  saubere Struktur, starke Typografie, sichere Technik. Oliwer
                  kommt aus dem Vertrieb, sorgt für den leichten Einstieg und
                  dafür, dass aus einem ersten Gespräch eine Zusammenarbeit mit
                  klarem Ziel wird.
                </p>
                <p className={bodyCopy}>
                  Wir glauben an Einfachheit, Ehrlichkeit und Tempo. Wir hören
                  zu, denken mit und bauen erst, wenn das Konzept sitzt. Aus
                  einer Idee entsteht ein finaler Sketch, den du freigibst –
                  danach programmieren wir genau das, was du siehst, ergänzt um
                  Bewegung, Details und Performance.
                </p>
              </div>
              <div className="space-y-5 border border-white/10 bg-[var(--background-box-color)] p-8">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  Unsere Versprechen
                </h3>
                <ul className="space-y-4 text-sm text-[var(--paragraph-text-color)]">
                  {[
                    "Transparente Kommunikation vom ersten Gespräch bis zum Launch",
                    "Skalierbare Technik mit Fokus auf Performance und Sicherheit",
                    "Gestaltung, die Nutzer:innen versteht und Marken erlebbar macht",
                    "Verlässliche Betreuung auch nach dem Go-Live",
                  ].map((promise) => (
                    <li key={promise} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none bg-[var(--accent-color)]"></span>
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-6xl border border-white/10 bg-[var(--background-box-color)] px-6 py-12 sm:px-10 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className={sectionHeading}>
                  Vom ersten Gedanken bis zum Launch
                </h2>
                <p className={bodyCopy}>
                  Aus einer Idee entsteht ein finaler Sketch, den du freigibst –
                  danach programmieren wir genau das, was du siehst, ergänzt um
                  Bewegung, Details und Performance. Auf Wunsch kümmern wir uns
                  auch um Hosting, Sicherheit, Updates und Backups –
                  langfristig, verlässlich, ohne Schnickschnack. Und wenn echte
                  Bilder fehlen, fotografieren wir sie: authentisch, passend zur
                  Marke.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "01 – Zuhören & verstehen",
                    text: "Wir starten mit einem ehrlichen Gespräch, klären Ziele, Zielgruppe und Tonalität. Danach folgt ein klares Aufgabenbild.",
                  },
                  {
                    title: "02 – Konzept & Sketch",
                    text: "Wir strukturieren Inhalte, gestalten den ersten Entwurf und justieren so lange, bis die Richtung stimmt.",
                  },
                  {
                    title: "03 – Entwicklung & Feinschliff",
                    text: "Wir übertragen das Design in performanten Code, integrieren Animationen und achten auf barrierearme Umsetzung.",
                  },
                  {
                    title: "04 – Launch & Begleitung",
                    text: "Wir begleiten den Go-Live, kümmern uns um Hosting und bleiben für Updates, Sicherheit und neue Inhalte erreichbar.",
                  },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="border border-white/10 bg-[var(--background)]/60 p-6 shadow-sm"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-color)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--paragraph-text-color)]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <h2 className={sectionHeading}>Für wen wir arbeiten</h2>
                <p className={bodyCopy}>
                  Unsere Kunden sind Gründer:innen, Handwerksbetriebe, Praxen,
                  Vereine und kleine Unternehmen, die online professionell
                  auftreten wollen, ohne in Agenturprozessen zu versinken. Wir
                  arbeiten transparent, rechnen fair ab und bleiben erreichbar.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Handwerk & Services",
                    desc: "Websites, die Vertrauen schaffen und Anfragen generieren.",
                  },
                  {
                    title: "Praxis & Gesundheit",
                    desc: "Digitale Erlebnisse, die Kompetenz zeigen und klar informieren.",
                  },
                  {
                    title: "Gründer:innen & Startups",
                    desc: "Schneller Launch, klare Storyline, flexibel erweiterbar.",
                  },
                  {
                    title: "Vereine & Initiativen",
                    desc: "Strukturierte Seiten, die Gemeinschaft sichtbar machen.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="group border border-white/10 bg-[var(--background-box-color)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent-color)]/60 hover:shadow-xl"
                  >
                    <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-color)]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--paragraph-text-color)]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-4xl border border-white/10 bg-[var(--background-box-color)] px-6 py-10 text-center sm:px-12">
            <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              Bereit, Wirkung zu schaffen?
            </h2>
            <p className="mt-4 text-base text-[var(--paragraph-text-color)]">
              Am Ende zählt nur, dass deine Seite tut, was sie soll: gefunden
              werden, Vertrauen aufbauen, Anfragen auslösen. Webcreare – weniger
              Floskel, mehr Wirkung.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-[var(--accent-color)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-color-hover)]"
              >
                Projekt anfragen
              </Link>
              <Link
                href="mailto:info@webcreare.de"
                className="inline-flex items-center justify-center border border-[var(--accent-color)] px-6 py-3 text-sm font-semibold text-[var(--accent-color)] transition hover:bg-[var(--accent-color)]/10"
              >
                Direkt schreiben
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
