"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type GummiesProps = {
  image?: { src: string; alt?: string };
  title: string;
  className?: string;
  link?: string;
};

const Gummies: React.FC<GummiesProps> = ({ image, title, className, link }) => {
  // Responsive image dimensions (bigger than before)
  // We'll use tailwind and style for responsiveness
  // Default: large, md: medium, sm: small
  // Box: smaller height, responsive width
  return (
    <section
      className={`
        flex flex-col items-center justify-between bg-white
        w-full max-w-[480px] min-w-[260px]
        h-[38vh] sm:h-[44vh] md:h-[66vh]
        rounded-xl overflow-hidden
        ${className || ""}
      `}
    >
      <header className="w-full flex items-center justify-center py-2">
        <h2 className="text-center w-full text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-[#018578]">
          {title}
        </h2>
      </header>
      <div className="flex-1 w-full flex items-center justify-center">
        {image && image.src ? (
          <div
            className={`
              relative flex items-center justify-center
              w-[220px] h-[180px]
              sm:w-[270px] sm:h-[220px]
              md:w-[320px] md:h-[260px]
              lg:w-[370px] lg:h-[300px]
              xl:w-[420px] xl:h-[340px]
              transition-all
            `}
            style={{
              minHeight: 120,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt || "Gummy image"}
              fill
              style={{ objectFit: "contain" }}
              sizes="
                (max-width: 640px) 80vw,
                (max-width: 1024px) 40vw,
                420px
              "
              priority
            />
          </div>
        ) : (
          <span className="text-gray-400 text-lg text-center w-full">
            No Image
          </span>
        )}
      </div>
      <footer className="w-full flex justify-center py-3">
        {link ? (
          <Link
            href={link}
            className="px-7 py-2 bg-[#018578] text-white font-semibold rounded-md border-2 border-[#018578] transition hover:bg-[#01695f] active:scale-95 text-center"
          >
            VIEW ALL
          </Link>
        ) : (
          <button
            type="button"
            className="px-7 py-2 bg-[#018578] text-white font-semibold rounded-md border-2 border-[#018578] transition hover:bg-[#01695f] active:scale-95 text-center"
            disabled
          >
            VIEW ALL
          </button>
        )}
      </footer>
    </section>
  );
};

export default Gummies;
