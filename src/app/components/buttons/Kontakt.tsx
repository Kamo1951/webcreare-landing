import Link from "next/link";

type KontaktProps = {
  href: string;
  text: string;
  ariaLabel?: string;
  title?: string;
};

export function Kontakt({ href, text, ariaLabel, title }: KontaktProps) {
  return (
    <Link
      href={href}
      className="group relative inline-flex sm:w-auto items-center justify-center overflow-hidden bg-[var(--accent-color)] text-white font-semibold transition-colors duration-300 hover:bg-[var(--accent-color-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4"
      aria-label={ariaLabel || text}
      title={title || text}
      rel="noopener"
    >
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-white/10"
        aria-hidden="true"
      />
      <span className="relative z-10 text-sm sm:text-base md:text-lg">
        {text}
      </span>
    </Link>
  );
}
