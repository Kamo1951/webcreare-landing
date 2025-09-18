"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaClock, FaPhone, FaEnvelope, FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "next-themes";
import logoLight from "../navbar/imgs/webcreare-logo-white.webp";
import logoBlack from "../navbar/imgs/webcreare-logo-black.webp";
import gsap from "gsap";
import useDetectScroll from "@smakss/react-scroll-direction";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop: top info hidden
  const topSectionRef = useRef<HTMLDivElement>(null);
  const initialTopHeightRef = useRef<number>(0);
  const lastActionRef = useRef<number>(0); // timestamp for debounce
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { scrollDir } = useDetectScroll(); // expected values often: 'down' | 'up'
  const lastScrollYManualRef = useRef<number>(0); // fallback manual detection

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close sidebar when clicking outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: "#", label: "Webcreare" },
    { href: "#ueberuns", label: "Über Uns" },
    { href: "#referenzen", label: "Referenzen" },
    { href: "#preise", label: "Preise" },
    { href: "#team", label: "Unser Team" },
  ];

  const src = mounted && resolvedTheme === "dark" ? logoLight : logoBlack;
  // Theme switching handled via resolvedTheme

  // Measure top section once mounted
  useEffect(() => {
    if (topSectionRef.current) {
      initialTopHeightRef.current = topSectionRef.current.scrollHeight;
      topSectionRef.current.style.height = `${initialTopHeightRef.current}px`;
      topSectionRef.current.style.overflow = "hidden";
    }
  }, []);

  const collapseTop = () => {
    if (!topSectionRef.current || isCollapsed) return;
    const el = topSectionRef.current;
    gsap.killTweensOf(el);
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => setIsCollapsed(true),
    });
  };

  const expandTop = () => {
    if (!topSectionRef.current || !isCollapsed) return;
    const el = topSectionRef.current;
    gsap.killTweensOf(el);
    gsap.to(el, {
      height: initialTopHeightRef.current || el.scrollHeight,
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      onStart: () => setIsCollapsed(false),
    });
  };

  // Unified Scroll Handling: library direction + fallback manual detection
  useEffect(() => {
    if (isMobile || isTablet) return; // only desktop behavior

    const handle = () => {
      const now = Date.now();
      if (now - lastActionRef.current < 110) return; // debounce

      const currentY = window.scrollY;
      const lastManual = lastScrollYManualRef.current;

      // Normalize library value (could be 'Down', 'down', 'DOWN', etc.)
      const dirNormalized = (scrollDir || "").toString().toLowerCase();
      let goingDown: boolean;

      if (dirNormalized === "down" || dirNormalized === "d") {
        goingDown = true;
      } else if (dirNormalized === "up" || dirNormalized === "u") {
        goingDown = false;
      } else {
        // Fallback manual direction detection
        goingDown = currentY > lastManual;
      }

      // Collapse threshold
      if (goingDown && currentY > 140) {
        collapseTop();
        lastActionRef.current = now;
      } else if (!goingDown) {
        // Expand when scrolling up sufficiently or near top
        if (currentY < 40 || currentY < lastManual - 8) {
          expandTop();
          lastActionRef.current = now;
        }
      }

      lastScrollYManualRef.current = currentY;
    };

    // Use scroll event for continuous evaluation (library only fires on direction change)
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [scrollDir, isMobile, isTablet, isCollapsed]);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-[box-shadow,backdrop-filter] duration-300 ${
        !isMobile && !isTablet && isCollapsed
          ? "shadow-md backdrop-blur bg-[var(--background)]/85"
          : "bg-transparent"
      }`}
      role="banner"
    >
      {/* Collapsible top section (desktop) */}
      <div
        ref={topSectionRef}
        aria-hidden={isCollapsed}
        className={`bg-transparent ${isCollapsed ? "pointer-events-none" : ""}`}
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
            isCollapsed ? "py-2" : ""
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
            className="p-5 px-8 bg-[var(--accent-color)] relative overflow-hidden "
            ref={(el) => {
              if (el) {
                // Create overlay for left-to-right animation
                const overlay = document.createElement("span");
                overlay.className =
                  "absolute inset-0 bg-white/10 -translate-x-full";
                el.appendChild(overlay);

                // Set up hover animations
                el.addEventListener("mouseenter", () => {
                  gsap.to(el, {
                    backgroundColor: "var(--accent-color-hover)",
                    duration: 0.4,
                    ease: "power2.out",
                  });
                  gsap.to(overlay, {
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                  });
                });
                el.addEventListener("mouseleave", () => {
                  gsap.to(el, {
                    backgroundColor: "var(--accent-color)",
                    duration: 0.4,
                    ease: "power2.in",
                  });
                  gsap.to(overlay, {
                    x: "100%",
                    duration: 0.6,
                    ease: "power2.in",
                  });
                });
              }
            }}
          >
            <span className="relative z-10 text-white font-semibold">
              Jetzt Anfragen
            </span>
          </Link>
        </nav>
      )}

      {/* Sidebar Menu Overlay - Always render but control visibility with opacity */}
      <div
        className={`fixed inset-0 z-40 cursor-crosshair transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "bg-opacity-50 pointer-events-auto"
            : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
        aria-hidden={!isMenuOpen}
      >
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 w-80 h-full bg-[var(--background-box-color)] z-50 overflow-y-auto shadow-lg cursor-default transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "transform-none" : "transform translate-x-full"
          }`}
          aria-modal="true"
          role="dialog"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex justify-between items-center px-6 pt-4 mb-6 ">
            <Image src={src} alt="Logo" width={120} height={80} />
            <button
              onClick={toggleMenu}
              className="p-2 border border-white/5 rounded-full hover:bg-[var(--accent-color)] hover:cursor-pointer"
              aria-label="Close menu"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Mobile navigation links */}
          <nav className="px-4" aria-label="Mobile navigation">
            <ul className="list-none">
              {navItems.map(({ href, label }) => (
                <li key={href} className="py-4 border-b border-white/5">
                  <Link
                    href={href}
                    className="block w-full hover:text-[var(--accent-color)] transition-colors"
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div className="mt-8 px-6">
            <div className="flex items-center mb-4">
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
                href="mailto:info@example.com"
                className="hover:text-[var(--accent-color)] transition-colors"
                aria-label="Email us at info@example.com"
              >
                info@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
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
  );
};

export default Navbar;
