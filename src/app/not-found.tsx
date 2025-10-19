import Link from "next/link";
import Navbar from "./components/navbar/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-6 -my-16 text-center text-[var(--foreground)]">
        <div className="max-w-xl space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase text-[var(--accent-color)]">404</p>
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Seite nicht gefunden
            </h1>
            <p className="text-base leading-relaxed text-[var(--paragraph-text-color)] sm:text-lg">
              Die von dir aufgerufene Seite existiert nicht oder wurde
              verschoben. Keine Sorge – wir bringen dich zurück auf den
              richtigen Kurs.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className=" bg-[var(--accent-color)] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[var(--accent-color-hover)]"
            >
              Zur Startseite
            </Link>
            <Link
              href="/kontakt"
              className="border border-[var(--border-color)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent-color)] hover:text-[var(--accent-color-hover)]"
            >
              Kontaktiere uns
            </Link>
          </div>

          <div className=" border border-[var(--border-color)] bg-[var(--background-box-color)] px-5 py-4 text-sm text-left text-[var(--paragraph-text-color)] shadow-lg backdrop-blur-lg">
            <p className="font-medium text-[var(--foreground)]">Noch da?</p>
            <p>
              <span className="text-[var(--accent-color)]">
                <Link href={"/"}>WebCreare</Link>.{" "}
              </span>
              Wir bauen digitale Erlebnisse, die Eindruck machen. Lass uns
              gemeinsam deine Idee umsetzen.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
