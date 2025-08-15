"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Gummy {
  src: string;
  alt: string;
}

const gummyGradients: string[] = [
  "linear-gradient(180deg, #DB6C74 0%, #A82E27 100%)",
  "linear-gradient(180deg, #6E90C3 0%, #27367A 100%)",
  "linear-gradient(180deg, #965B9D 0%, #493187 100%)",
  "linear-gradient(180deg, #E1BA61 0%, #BC9031 100%)",
  "linear-gradient(180deg, #DE6557 0%, #922021 100%)",
  "linear-gradient(180deg, #ABA244 0%, #ABA244 100%)",
  "linear-gradient(180deg, #E67955 0%, #B93F29 100%)",
  "linear-gradient(180deg, #B77CB5 0%, #834591 100%)",
  "linear-gradient(180deg, #8450A0 0%, #632C8A 100%)",
  "linear-gradient(180deg, #48B1CD 0%, #286F83 100%)",
];

const bannerImage = {
  src: "/images/products/adults/banner.png",
  alt: "Adult Products Banner",
};

const productNames: string[] = [
  "B12",
  "Joint Care",
  "Sleep Aid",
  "Stress Relief",
  "Libido",
  "Cholesterol",
  "Prebiotic",
  "Hair, Skin & Nail Booster",
  "Adult Multivitamins",
  "Sore Throat Relief",
];

const taglines: string[] = [
  "For Healthy Cells",
  "For Terminating Inflammation",
  "For Maintaining Natural & Enjoyable Sleep",
  "For Calming & Rejuvenating Effects",
  "For Boosting Passion & Energy",
  "For Maintaining Healthy Cholesterol Levels",
  "For Healthy Bowel Movement",
  "For Healthy Hair, Skin & Nails",
  "For Maintaining Essential Nutrients",
  "For Quick Recovery",
];

const gummies: Gummy[] = productNames.map((name, i) => ({
  src: `/images/products/adults/adult${i + 1}.png`,
  alt: name,
}));

// Spinner component
const Spinner: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 z-10">
    <div className="w-10 h-10 border-4 border-[#018578] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const GummyBox: React.FC<{
  gummy: Gummy;
  gradient: string;
  tagline: string;
  link: string;
  boxClassName?: string;
  imgBoxClassName?: string;
  imgBoxStyle?: React.CSSProperties;
}> = ({
  gummy,
  gradient,
  tagline,
  link,
  boxClassName = "",
  imgBoxClassName = "",
  imgBoxStyle = {},
}) => {
  const [loading, setLoading] = useState(true);

  // Mouse handlers for background and image scale
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.background = gradient;
    e.currentTarget.style.transition =
      "background 2.5s ease-in-out, transform 0.5s ease-in-out";
    const img = e.currentTarget.querySelector("img");
    if (img) {
      (img as HTMLImageElement).style.transform = "scale(1.10)";
      (img as HTMLImageElement).style.transition = "transform 0.5s";
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.background = "white";
    e.currentTarget.style.transition =
      "background 2.5s ease-in-out, transform 0.5s ease-in-out";
    const img = e.currentTarget.querySelector("img");
    if (img) {
      (img as HTMLImageElement).style.transform = "scale(1)";
      (img as HTMLImageElement).style.transition = "transform 0.5s";
    }
  };

  // Make the entire box a clickable Link
  return (
    <Link
      href={link}
      className={`flex flex-col items-center rounded-lg py-4 group cursor-pointer bg-white ${boxClassName}`}
      tabIndex={0}
      style={{ textDecoration: "none" }}
    >
      <div
        className={`
          relative 
          w-60 h-72 
          sm:w-64 sm:h-80 
          md:w-64 md:h-96 
          mb-4 rounded-lg overflow-hidden 
          ${imgBoxClassName}
        `}
        style={{
          background: "white",
          transition: "background 2.5s ease-in-out, transform 0.5s ease-in-out",
          ...imgBoxStyle,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {loading && <Spinner />}
        <img
          src={gummy.src}
          alt={gummy.alt}
          className="object-contain w-full h-full transition-transform duration-500"
          loading="lazy"
          style={{ transition: "transform 0.5s" }}
          onLoad={() => setLoading(false)}
        />
      </div>
      <span className="font-semibold text-base sm:text-lg mb-1 text-center">{gummy.alt}</span>
      <span className="text-gray-500 text-sm sm:text-base mb-1 text-center">{tagline}</span>
      <span className="font-bold text-base text-[#018578] tracking-wide hover:underline">
        MORE
      </span>
    </Link>
  );
};

const KidsProductsPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full relative">
        <div className="relative w-full aspect-[3/1] sm:aspect-[4/1] md:aspect-[5/1] max-h-[350px]">
          <Image
            src={bannerImage.src}
            alt={bannerImage.alt}
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Gummies Grid */}
      <div className="max-w-6xl mx-auto mt-8 sm:mt-12 px-2 sm:px-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {gummies.slice(0, 9).map((gummy, idx) => (
            <GummyBox
              key={gummy.alt}
              gummy={gummy}
              gradient={gummyGradients[idx]}
              tagline={taglines[idx]}
              link={`/adult-products/${idx + 1}`}
            />
          ))}
        </div>

        {/* Last Gummy Centered */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <GummyBox
            gummy={gummies[9]}
            gradient={gummyGradients[9]}
            tagline={taglines[9]}
            link="/adult-products/10"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsProductsPage;
