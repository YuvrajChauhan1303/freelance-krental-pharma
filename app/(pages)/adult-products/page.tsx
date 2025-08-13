"use client";
import React, { useRef, useState } from "react";
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

// Simple spinner component
const Spinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
    <div className="w-10 h-10 border-4 border-[#018578] border-t-transparent rounded-full animate-spin" />
  </div>
);

type GummyImageBoxProps = {
  gummy: Gummy;
  gradient: string;
  tagline: string;
  link: string;
};

const GummyImageBox: React.FC<GummyImageBoxProps> = ({
  gummy,
  gradient,
  tagline,
  link,
}) => {
  const [loading, setLoading] = useState(true);

  // Helper to set transition instantly on mouse leave
  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.transition = "none";
    e.currentTarget.style.background = "white";
    void e.currentTarget.offsetHeight;
    e.currentTarget.style.transition =
      "background 2.5s ease-in-out, transform 0.5s ease-in-out";
    // Reset the img scale
    const img = e.currentTarget.querySelector("img");
    if (img) {
      (img as HTMLImageElement).style.transform = "scale(1)";
      (img as HTMLImageElement).style.transition = "transform 0.5s";
    }
  };

  // On mouse enter, restore transition and animate
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.transition =
      "background 2.5s ease-in-out, transform 0.5s ease-in-out";
    e.currentTarget.style.background = gradient;
    // Scale the img inside
    const img = e.currentTarget.querySelector("img");
    if (img) {
      (img as HTMLImageElement).style.transform = "scale(1.05)";
      (img as HTMLImageElement).style.transition = "transform 0.5s";
    }
  };

  return (
    <div className="flex flex-col items-center rounded-lg py-4 group cursor-pointer bg-white">
      <div
        className="relative w-64 h-96 mb-4 rounded-lg overflow-hidden"
        style={{
          background: "white",
          transition: "background 2.5s ease-in-out, transform 0.5s ease-in-out",
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
      <span className="font-semibold text-lg mb-1">{gummy.alt}</span>
      <span className="text-gray-500 text-base mb-1">{tagline}</span>
      <Link
        href={link}
        className="font-bold text-base text-[#018578] tracking-wide hover:underline"
      >
        MORE
      </Link>
    </div>
  );
};

const AdultProductsPage: React.FC = () => {
  // Banner image loading state
  const [bannerLoading, setBannerLoading] = useState(true);

  return (
    <div className="w-full">
      {/* Banner */}
      <div
        className="w-full relative"
        style={{ height: "32vh", maxHeight: 350 }}
      >
        {bannerLoading && <Spinner />}
        <Image
          src={bannerImage.src}
          alt={bannerImage.alt}
          fill
          priority
          className="object-cover object-center w-full h-full"
          sizes="100vw"
          onLoad={() => setBannerLoading(false)}
        />
      </div>

      {/* Gummies Grid */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {gummies.slice(0, 9).map((gummy, idx) => (
            <GummyImageBox
              key={gummy.alt}
              gummy={gummy}
              gradient={gummyGradients[idx]}
              tagline={taglines[idx]}
              link={`/adult-products/${idx + 1}`}
            />
          ))}
        </div>

        {/* Last Gummy Centered */}
        <div className="flex justify-center mt-10">
          <GummyImageBox
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

export default AdultProductsPage;
