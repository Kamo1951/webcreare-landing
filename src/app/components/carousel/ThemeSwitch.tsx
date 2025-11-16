"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : undefined;
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="fixed right-2 top-1/2 z-50 flex h-[70px] w-[38px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--background-box-color)] shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] sm:right-3 sm:h-[82px] sm:w-[44px] hover:cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div
        className={`flex flex-col items-center gap-2 transition-transform duration-500 ${
          isDark ? "animate-moveReversed" : " animate-move"
        }`}
      >
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-opacity duration-500 ${
            !isDark ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
          >
            <path d="M12 4.75a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 .75.75Zm5.303 2.197.003-.003 1.415-1.414a.75.75 0 0 0-1.06-1.06l-1.42 1.419a.75.75 0 0 0 1.062 1.058Zm4.697 4.303h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5ZM12 19.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75Zm7.717-.767-1.415-1.414a.75.75 0 1 0-1.06 1.06l1.414 1.415a.75.75 0 0 0 1.06-1.06Zm-13.383.767a.75.75 0 0 0-.75-.75H2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .75-.75ZM4.28 6.947a.75.75 0 0 0 1.061-1.06L3.927 4.473a.75.75 0 1 0-1.06 1.06l1.413 1.414Zm3.54 5.053A4.18 4.18 0 1 1 12 16.18a4.185 4.185 0 0 1-4.18-4.18Zm4.18-5.93a5.93 5.93 0 1 0 0 11.86 5.93 5.93 0 0 0 0-11.86Z" />
          </svg>
        </span>

        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-opacity duration-500 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
          >
            <path d="M21.752 15.002a.75.75 0 0 0-1.095-.82 6.5 6.5 0 0 1-8.84-8.84.75.75 0 0 0-.82-1.095A8 8 0 1 0 21.752 15Z" />
          </svg>
        </span>
      </div>
    </button>
  );
};

export default ThemeSwitch;
