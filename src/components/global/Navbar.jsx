"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image src={"/logo.png"} alt="logo" width={92} height={70} />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#why-us"
              className="text-gray-300 hover:text-white transition"
            >
              Why Us
            </a>
            <a
              href="#feature"
              className="text-gray-300 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#about-us"
              className="text-gray-300 hover:text-white transition"
            >
              About Us
            </a>
            <a
              href="#contact-us"
              className="text-gray-300 hover:text-white transition"
            >
              Contact Us
            </a>
            <a
              href="#book-store"
              className="text-gray-300 hover:text-white transition"
            >
              Book Store
            </a>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>

          {/* Join Us Button (Desktop) */}
          <Link
            target="_blank"
            href={
              "https://apps.apple.com/us/app/harmonious-learning/id6744360499"
            }
            className="!hidden md:!flex glow-button"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-4 bg-black/50 backdrop-blur-md p-4 rounded-lg">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Why Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Features
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Contact Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Book Store
            </a>

            <button className="glow-button w-full">Join Us</button>
          </div>
        )}
      </div>
    </nav>
  );
}
