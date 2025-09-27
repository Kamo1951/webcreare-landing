import Link from "next/link";

export function Kontakt() {
  return (
    <Link
      href="kontakt"
      className="group relative inline-flex sm:w-auto items-center justify-center overflow-hidden bg-[var(--accent-color)] text-white font-semibold transition-colors duration-300 hover:bg-[var(--accent-color-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4"
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-white/10" />
      <span className="relative z-10 text-sm sm:text-base md:text-lg">
        Jetzt Anfragen
      </span>
    </Link>
  );
}
