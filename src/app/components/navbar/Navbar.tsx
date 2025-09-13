"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaClock, FaPhone, FaEnvelope, FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="w-full">
      {/* Top navbar */}
      <div className="bg-transparent flex flex-col md:flex-row justify-between items-center py-4 px-4 lg:px-0">
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <div className="ml-2 lg:ml-[200px]">
            <Image src="/next.svg" alt="Logo" width={150} height={100} />
          </div>

          {/* Hamburger menu for mobile/tablet */}
          {(isMobile || isTablet) && (
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

        {/* Right side info - Only shown on desktop or tablet with menu closed */}
        {!isMobile && !isMenuOpen && (
          <div className="flex items-center mr-2 lg:mr-[200px] w-full justify-end mt-4 md:mt-0">
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
            <div className="h-20 w-px bg-white/5 mx-6" aria-hidden="true"></div>

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

      {/* Horizontal divider */}
      {!isMobile && !isMenuOpen && (
        <div className="h-px w-full bg-white/5" aria-hidden="true"></div>
      )}

      {/* Navigation links - only shown on desktop or when not in mobile/tablet with menu closed */}
      {!isMobile && !isTablet && !isMenuOpen && (
        <nav
          className="flex justify-center space-x-10 py-4 bg-transparent"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Contact
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
          className={`fixed top-0 right-0 w-80 h-full bg-white z-50 overflow-y-auto shadow-lg cursor-default transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "transform-none" : "transform translate-x-full"
          }`}
          aria-modal="true"
          role="dialog"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex justify-between items-center px-6 pt-4 mb-6">
            <Image src="/next.svg" alt="Logo" width={120} height={80} />
            <button
              onClick={toggleMenu}
              className="p-2"
              aria-label="Close menu"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Mobile navigation links */}
          <nav className="px-4" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={toggleMenu}
              className="block py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <div className="h-px w-full bg-gray-200" aria-hidden="true"></div>

            <Link
              href="/about"
              onClick={toggleMenu}
              className="block py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <div className="h-px w-full bg-gray-200" aria-hidden="true"></div>

            <Link
              href="/services"
              onClick={toggleMenu}
              className="block py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <div className="h-px w-full bg-gray-200" aria-hidden="true"></div>

            <Link
              href="/portfolio"
              onClick={toggleMenu}
              className="block py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </Link>
            <div className="h-px w-full bg-gray-200" aria-hidden="true"></div>

            <Link
              href="/blog"
              onClick={toggleMenu}
              className="block py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <div className="h-px w-full bg-gray-200" aria-hidden="true"></div>

            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
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
    </div>
  );
};

export default Navbar;
