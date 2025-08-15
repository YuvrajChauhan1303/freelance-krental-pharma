"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click (desktop)
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

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
        setMobileProductsOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

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
    <nav
      className="flex mx-4 md:mx-12 my-4 items-center justify-between"
      style={{ minHeight: "48px" }}
    >
      <Link href="/" className="w-32 h-8 flex items-center justify-center">
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          width={140}
          height={60}
          className="h-15 w-auto object-contain"
          style={{ maxHeight: "60px" }}
          priority
        />
      </Link>

      {/* Hamburger Icon for mobile */}
      <button
        className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none"
        aria-label="Open menu"
        onClick={() => {
          setMobileMenuOpen((prev) => !prev);
          if (!mobileMenuOpen) setMobileProductsOpen(false);
        }}
      >
        <svg
          className="w-7 h-7 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex items-center space-x-4">
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
                    className={`px-3 py-1 rounded-md font-medium uppercase transition-all flex items-center gap-1 ${
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
                    <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                      <Link
                        href="/kids-products"
                        className={`block px-4 py-2 text-sm rounded-t-lg transition-colors ${
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
                        className={`block px-4 py-2 text-sm rounded-b-lg transition-colors ${
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
                    className={`px-3 py-1.5 rounded-md font-medium uppercase transition-all ${
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileDropdownRef}
          className="fixed inset-0 z-40 bg-black bg-opacity-30 flex flex-col items-end md:hidden"
        >
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 pt-8 relative animate-slide-in-right">
            <button
              className="absolute top-4 right-4 p-2 rounded focus:outline-none"
              aria-label="Close menu"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileProductsOpen(false);
              }}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-2 mt-8">
              {navItems.map((item, index) => {
                if (item.isDropdown) {
                  return (
                    <li key={index} className="relative">
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen((prev) => !prev)}
                        className={`w-full text-left px-3 py-2 rounded-md font-medium uppercase transition-all flex items-center justify-between ${
                          pathname.startsWith("/products") ||
                          pathname === "/kids-products" ||
                          pathname === "/adult-products"
                            ? "bg-[#018578] text-white"
                            : "text-gray-700 hover:text-black"
                        }`}
                        aria-expanded={mobileProductsOpen}
                        aria-controls="mobile-products-dropdown"
                      >
                        <span>Products</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            mobileProductsOpen ? "rotate-180" : ""
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
                      {mobileProductsOpen && (
                        <div
                          id="mobile-products-dropdown"
                          className="ml-4 mt-1 flex flex-col rounded-lg border border-gray-200 bg-white shadow z-10"
                        >
                          <Link
                            href="/kids-products"
                            className={`block px-4 py-2 text-sm rounded-t-lg transition-colors ${
                              pathname === "/kids-products"
                                ? "bg-[#018578] text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => {
                              setMobileProductsOpen(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            Kids Products
                          </Link>
                          <Link
                            href="/adult-products"
                            className={`block px-4 py-2 text-sm rounded-b-lg transition-colors ${
                              pathname === "/adult-products"
                                ? "bg-[#018578] text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => {
                              setMobileProductsOpen(false);
                              setMobileMenuOpen(false);
                            }}
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
                        className={`block px-3 py-2 rounded-md font-medium uppercase transition-all ${
                          isActive
                            ? "bg-[#018578] text-white"
                            : "text-gray-700 hover:text-black"
                        }`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileProductsOpen(false);
                        }}
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
      )}
    </nav>
  );
};

export default Navbar;
