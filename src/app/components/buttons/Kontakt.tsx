import Link from "next/link";

export function Kontakt() {
  return (
    <Link
      href="kontakt"
      className="group relative overflow-hidden p-5 px-8 bg-[var(--accent-color)] transition-colors duration-300 hover:bg-[var(--accent-color-hover)]"
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-white/10" />
      <span className="relative z-10 text-white font-semibold">
        Jetzt Anfragen
      </span>
    </Link>
  );
}
