import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <FaInstagram />,
    color: "hover:text-[#e1306c]",
  },
  {
    href: "https://wa.me/",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    color: "hover:text-[#25d366]",
  },
  {
    href: "https://twitter.com",
    label: "X",
    icon: <FaXTwitter />,
    color: "hover:text-[#000000]",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: <FaYoutube />,
    color: "hover:text-[#ff0000]",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#018578] text-white py-10 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="mb-2">
            <Image
              src="/images/logo/logo2.png"
              alt="KP Logo"
              width={240}
              height={240}
              className="object-contain"
              priority
            />
          </div>
          <div className="text-2xl font-bold text-center md:text-left">
            CRAFTING HEALTH, <br />
            DELIVERING HOPE
          </div>
        </div>

        {/* Navigation Links - vertical */}
        <div className="flex flex-col items-center">
          <ul className="flex flex-col gap-3 text-white font-medium text-base">
            <li>
              <Link
                href="/products"
                className="hover:text-[#b2f5ea] transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#b2f5ea] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="hover:text-[#b2f5ea] transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/why-kp"
                className="hover:text-[#b2f5ea] transition-colors"
              >
                WHY KP?
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#b2f5ea] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Policies */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="font-bold mb-1 text-3xl">FOLLOW US</div>
          <div className="flex gap-4 text-2xl">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`text-white ${item.color} transition-colors`}
              >
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white hover:border-[#b2f5ea] transition-colors"
                  style={{ boxSizing: "border-box" }}
                >
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs text-white/80 mt-2">
            <Link
              href="/terms"
              className="hover:text-[#b2f5ea] transition-colors"
            >
              Terms and Conditions
            </Link>
            <span className="hidden md:inline">|</span>
            <Link
              href="/privacy"
              className="hover:text-[#b2f5ea] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 mt-8">
        &copy; {new Date().getFullYear()} Krenital Pharma. All Rights Reserved.{" "}
        <br /> Some images are used under license. All rights belong to their
        respective owners.
      </div>
    </footer>
  );
};

export default Footer;
