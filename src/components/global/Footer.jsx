import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Social */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <Image src={"/logo.png"} alt="logo" width={92} height={70} />
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-gray-400 text-sm mb-2">Follow us on:</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-8 text-sm">
          <a
            href="#why-us"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Why Us
          </a>
          <a
            href="#feature"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#about-us"
            className="text-gray-400 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact-us"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#book-store"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Book Store
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © 2025 Harmonious All rights reserved
        </div>
      </div>
    </footer>
  );
}
