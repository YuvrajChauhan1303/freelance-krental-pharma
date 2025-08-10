"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Home" },
    { label: "Products", isDropdown: true },
    { label: "About Us" },
    { label: "Blogs" },
    { label: "Why KP" },
    { label: "Contact Us" },
  ];

  const getHref = (label: string) =>
    label === "Home" ? "/" : "/" + label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex mx-12 mt-8 items-center justify-between">
      <div className="w-48 h-16 flex items-center justify-center">
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          width={225}
          height={64}
          className="h-16 w-auto object-contain"
          style={{ maxHeight: "64px" }}
          priority
        />
      </div>

      <div>
        <ul className="flex items-center space-x-6">
          {navItems.map((item, index) => {
            if (item.isDropdown) {
              return (
                <li key={index} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setProductsOpen((prev) => !prev);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium uppercase transition-all flex items-center gap-1 ${
                      pathname.startsWith("/products") ||
                      pathname === "/kids-products" ||
                      pathname === "/adult-products"
                        ? "bg-[#018578] text-white"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    <span>Products</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {productsOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                      <Link
                        href="/kids-products"
                        className={`block px-4 py-3 text-sm rounded-t-lg transition-colors ${
                          pathname === "/kids-products"
                            ? "bg-[#018578] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setProductsOpen(false)}
                      >
                        Kids Products
                      </Link>
                      <Link
                        href="/adult-products"
                        className={`block px-4 py-3 text-sm rounded-b-lg transition-colors ${
                          pathname === "/adult-products"
                            ? "bg-[#018578] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setProductsOpen(false)}
                      >
                        Adult Products
                      </Link>
                    </div>
                  )}
                </li>
              );
            } else {
              const href = getHref(item.label);
              const isActive = pathname === href;
              return (
                <li key={index}>
                  <Link
                    href={href}
                    className={`px-4 py-2 rounded-lg font-medium uppercase transition-all ${
                      isActive
                        ? "bg-[#018578] text-white"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
