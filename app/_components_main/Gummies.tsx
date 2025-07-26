"use client";
import React from "react";
import Image from "next/image";

type GummiesProps = {
  image?: { src: string; alt?: string };
  title: string;
  className?: string;
};

const Gummies: React.FC<GummiesProps> = ({ image, title, className }) => {
  // Changed dimensions
  const imageWidth = 260 * 1.3; // 390
  const imageHeight = 310 * 1.3; // 465

  return (
    <section
      className={`flex flex-col items-center justify-between bg-white w-[34vw] h-[70vh] overflow-hidden ${
        className || ""
      }`}
    >
      <header className="w-full h-[7vh] flex items-center justify-center">
        <h2 className="text-2xl font-extrabold uppercase tracking-wide text-[#018578]">
          {title}
        </h2>
      </header>
      <div className="flex-1 w-full flex items-center justify-center">
        {image && image.src ? (
          <div
            className="relative flex items-center justify-center"
            style={{
              width: imageWidth,
              height: imageHeight,
              minHeight: 140,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt || "Gummy image"}
              width={imageWidth}
              height={imageHeight}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 80vw, 14vw"
              priority
            />
          </div>
        ) : (
          <span className="text-gray-400 text-lg">No Image</span>
        )}
      </div>
      <footer className="w-full flex justify-center py-4">
        <button
          type="button"
          className="px-7 py-2 bg-[#018578] text-white font-semibold rounded-md border-2 border-[#018578] transition hover:bg-[#01695f] active:scale-95 shadow"
        >
          VIEW ALL
        </button>
      </footer>
    </section>
  );
};

export default Gummies;
