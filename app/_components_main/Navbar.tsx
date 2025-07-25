"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    "Home",
    "Products",
    "Philosophy",
    "Blogs",
    "Why KP",
    "Contact Us",
  ];

  const getHref = (label: string) => {
    return label === "Home"
      ? "/" // special case for Home
      : "/" + label.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="flex mx-12 mt-8 items-center justify-between">
      <div className="w-48 h-16 rounded-2xl bg-gray-300 flex items-center justify-center">
        <p>LOGO</p>
      </div>
      <div>
        <ul className="flex space-x-6">
          {navItems.map((item, index) => {
            const href = getHref(item);
            const isActive = pathname === href;

            return (
              <li key={index}>
                <a
                  href={href}
                  className={`px-4 py-2 rounded-lg font-medium uppercase transition-all ${
                    isActive
                      ? "bg-zinc-600 text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
