"use client";
import React from "react";
import Image from "next/image";
import { FaClock, FaPhone } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top navbar */}
      <div className="bg-transparent flex justify-between items-center py-4">
        {/* Logo */}
        <div className="ml-[200px]">
          <Image src="/next.svg" alt="Logo" width={150} height={100} />
        </div>

        {/* Right side info */}
        <div className="flex items-center mr-[200px]">
          {/* Clock section */}
          <div className="flex items-center">
            <div className="p-3 bg-[var(--background-box-color)] mr-4 border border-white/10">
              <FaClock className="text-[var(--accent-color)]" />
            </div>
            <div className="">
              <p className="">Mo - Fr: 14:00 - 21:00</p>
              <p className="">Sa - So: 13:00 - 18:30 </p>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="h-20 w-px bg-white/5 mx-6 "></div>

          {/* Phone section */}
          <div className="flex items-center">
            <div className="p-3 bg-[var(--background-box-color)] mr-4 border border-white/10">
              <FaPhone className="text-[var(--accent-color)]" />
            </div>
            <div className="">
              <a href="tel:+4915156065802">
                <p className="hover:text-[var(--accent-color)] transition-colors">
                  +49 151 56065802
                </p>
              </a>
              <p className="">Rufen Sie Uns An</p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal divider */}
      <div className="h-px w-full bg-white/5"></div>

      {/* Navigation links */}
      <div className="flex justify-center space-x-10 py-4 bg-transparent">
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
      </div>
    </div>
  );
};

export default Navbar;
