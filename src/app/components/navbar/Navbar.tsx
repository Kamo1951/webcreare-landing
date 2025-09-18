"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaClock, FaPhone, FaEnvelope, FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "next-themes";
import logoLight from "../navbar/imgs/webcreare-logo-white.webp";
import logoBlack from "../navbar/imgs/webcreare-logo-black.webp";
import useDetectScroll from "@smakss/react-scroll-direction";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop: top info hidden
  const [isHiddenSmall, setIsHiddenSmall] = useState(false); // Mobile/Tablet: whole header hidden on scroll down
  const topSectionRef = useRef<HTMLDivElement>(null);
  const initialTopHeightRef = useRef<number>(0);
  const [topHeight, setTopHeight] = useState<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { scrollDir } = useDetectScroll(); // expected values often: 'down' | 'up'
  const lastScrollYManualRef = useRef<number>(0); // fallback manual detection

  // (theme + mount handled later, removed duplicate)

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      const nowDesktop = window.innerWidth >= 1024;
      if (nowDesktop) setIsHiddenSmall(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((o) => !o);

  // Close sidebar when clicking outside (overlay) - but ignore clicks inside sidebar
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const navItems: { href: string; label: string }[] = [
    { href: "#", label: "Webcreare" },
    { href: "#ueberuns", label: "Über Uns" },
    { href: "#referenzen", label: "Referenzen" },
    { href: "#preise", label: "Preise" },
    { href: "#team", label: "Unser Team" },
  ];

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const src = mounted && resolvedTheme === "dark" ? logoLight : logoBlack;
  // Measure top section height for smooth collapse (desktop)
  useEffect(() => {
    const measure = () => {
      if (topSectionRef.current && !isCollapsed) {
        setTopHeight(topSectionRef.current.scrollHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isCollapsed]);
  // Scroll effect
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const lastY = lastScrollYManualRef.current;
        const dirNormalized = (scrollDir || "").toString().toLowerCase();
        let goingDown: boolean;
        if (dirNormalized === "down" || dirNormalized === "d") goingDown = true;
        else if (dirNormalized === "up" || dirNormalized === "u")
          goingDown = false;
        else goingDown = currentY > lastY;

        if (!isMobile && !isTablet) {
          if (goingDown && currentY > 140) {
            if (!isCollapsed) setIsCollapsed(true);
          } else if (!goingDown && (currentY < 40 || currentY < lastY - 12)) {
            if (isCollapsed) setIsCollapsed(false);
          }
        } else {
          if (isMenuOpen) {
            if (isHiddenSmall) setIsHiddenSmall(false);
          } else {
            if (goingDown && currentY > 40) {
              if (!isHiddenSmall) setIsHiddenSmall(true);
            } else if (!goingDown) {
              if (currentY < lastY - 10 || currentY < 10) {
                if (isHiddenSmall) setIsHiddenSmall(false);
              }
            }
          }
        }
        lastScrollYManualRef.current = currentY;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir, isMobile, isTablet, isCollapsed, isHiddenSmall, isMenuOpen]);

  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 transition-[box-shadow,backdrop-filter,background-color,transform] duration-300 ${
          !isMobile && !isTablet && isCollapsed
            ? "shadow-md backdrop-blur bg-[var(--navbar-background-color)]"
            : "bg-transparent"
        }`}
        style={{
          transform:
            (isMobile || isTablet) && isHiddenSmall && !isMenuOpen
              ? "translateY(-100%)"
              : "translateY(0)",
          willChange: isMobile || isTablet ? "transform" : undefined,
        }}
        role="banner"
      >
        {/* Collapsible top section (desktop) */}
        <div
          ref={topSectionRef}
          aria-hidden={isCollapsed}
          style={{
            height: isCollapsed
              ? 0
              : topHeight !== null
              ? topHeight
              : undefined,
            opacity: isCollapsed ? 0 : 1,
            overflow: "hidden",
            transition:
              "height 380ms cubic-bezier(0.65,0.05,0.36,1), opacity 240ms ease",
          }}
          className={`bg-transparent ${
            isCollapsed ? "pointer-events-none" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4 lg:px-0">
            {!isTablet && (
              <div className="flex w-full justify-between items-center">
                {/* Logo */}
                <div className="ml-2 lg:ml-[200px]">
                  <Image src={src} alt="Logo" width={150} height={100} />
                </div>

                {/* Hamburger menu for mobile only (not tablet) */}
                {isMobile && (
                  <button
                    onClick={toggleMenu}
                    className="p-2 mr-2 lg:mr-[200px]"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                  >
                    <FaBars className="text-2xl" />
                  </button>
                )}
              </div>
            )}

            {/* Right side info - Only shown on desktop or tablet with menu closed */}
            {!isMobile && !isMenuOpen && (
              <div
                className={`flex items-center ${
                  isTablet
                    ? "w-full justify-center"
                    : "mr-2 lg:mr-[200px] w-full justify-end"
                } mt-4 md:mt-0`}
              >
                {/* Clock section */}
                <div className="flex items-center">
                  <div className="p-3 bg-[var(--background-box-color)] mr-4 border border-white/10">
                    <FaClock
                      className="text-[var(--accent-color)]"
                      aria-hidden="true"
                    />
                  </div>
                  <div aria-label="Business hours">
                    <p>Mo - Fr: 14:00 - 21:00</p>
                    <p>Sa - So: 13:00 - 18:30</p>
                  </div>
                </div>

                {/* Vertical divider */}
                <div
                  className="h-20 w-px bg-white/5 mx-6"
                  aria-hidden="true"
                ></div>

                {/* Phone section */}
                <div className="flex items-center">
                  <div className="p-3 bg-[var(--background-box-color)] mr-4 border border-white/10">
                    <FaPhone
                      className="text-[var(--accent-color)]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a
                      href="tel:+4915156065802"
                      aria-label="Call us at +49 151 56065802"
                    >
                      <p className="hover:text-[var(--accent-color)] transition-colors">
                        +49 151 56065802
                      </p>
                    </a>
                    <p>Rufen Sie Uns An</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Horizontal divider */}
        {!isMobile && !isMenuOpen && !isCollapsed && (
          <div className="h-px w-full bg-white/5" aria-hidden="true"></div>
        )}

        {/* Navigation links - only shown on desktop or when not in mobile/tablet with menu closed */}
        {!isMobile && !isTablet && !isMenuOpen && (
          <nav
            className={`flex -ml-[130px] justify-around bg-transparent transition-[padding,background-color] duration-300 ${
              isCollapsed ? "py-4" : ""
            }`}
            aria-label="Main navigation"
          >
            <div className="space-x-10 py-4">
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href} className="font-semibold">
                  <span>{label}</span>
                </Link>
              ))}
            </div>
            <Link
              href="kontakt"
              className="group relative overflow-hidden p-5 px-8 bg-[var(--accent-color)] transition-colors duration-300 hover:bg-[var(--accent-color-hover)]"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-white/10" />
              <span className="relative z-10 text-white font-semibold">
                Jetzt Anfragen
              </span>
            </Link>
          </nav>
        )}

        {/* Sidebar removed from inside header (moved below) */}
        {/* Additional row for tablet view with logo and hamburger menu */}
        {isTablet && (
          <div className="w-full bg-transparent flex justify-between items-center px-4 py-3">
            <div className="ml-2">
              <Image src={src} alt="Logo" width={150} height={100} />
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 mr-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        )}
      </header>
      {/* Sidebar & Overlay (outside header) */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
        onClick={handleOverlayClick}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-full w-80 max-w-[85%] bg-[var(--background-box-color)] shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out will-change-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-6 pt-4 mb-6">
            <Image src={src} alt="Logo" width={120} height={80} />
            <button
              onClick={toggleMenu}
              className="p-2 border border-white/5 rounded-full hover:bg-[var(--accent-color)]"
              aria-label="Close menu"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          <nav className="px-4" aria-label="Mobile navigation">
            <ul className="list-none">
              {navItems.map(({ href, label }) => (
                <li key={href} className="py-4 border-b border-white/5">
                  <Link
                    href={href}
                    className="block w-full hover:text-[var(--accent-color)] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 px-6 pb-10 space-y-6">
            <div className="flex items-center">
              <div className="p-3 bg-[var(--background-box-color)] mr-4 border border-white/10">
                <FaPhone
                  className="text-[var(--accent-color)]"
                  aria-hidden="true"
                />
              </div>
              <a
                href="tel:+4915156065802"
                className="hover:text-[var(--accent-color)] transition-colors"
                aria-label="Call us at +49 151 56065802"
              >
                +49 151 56065802
              </a>
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-[var(--background-box-color)] mr-4 border border-white/10">
                <FaEnvelope
                  className="text-[var(--accent-color)]"
                  aria-hidden="true"
                />
              </div>
              <a
                href="mailto:info@webcreare.de"
                className="hover:text-[var(--accent-color)] transition-colors"
                aria-label="Email us at info@webcreare.de"
              >
                info@webcreare.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
