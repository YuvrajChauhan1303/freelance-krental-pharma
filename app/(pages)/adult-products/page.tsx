"use client";
import React from "react";
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

const AdultProductsPage: React.FC = () => {
  // Helper to set transition instantly on mouse leave
  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.transition = "none";
    e.currentTarget.style.background = "white";
    e.currentTarget.style.transform = "scale(1)";
    void e.currentTarget.offsetHeight;
    e.currentTarget.style.transition =
      "background 2.5s ease-in-out, transform 0.5s ease-in-out";
  };

  // On mouse enter, restore transition and animate
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    gradient: string
  ) => {
    e.currentTarget.style.transition =
      "background 2.5s ease-in-out, transform 0.5s ease-in-out";
    e.currentTarget.style.background = gradient;
    e.currentTarget.style.transform = "scale(1.10)";
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div
        className="w-full relative"
        style={{ height: "32vh", maxHeight: 350 }}
      >
        <Image
          src={bannerImage.src}
          alt={bannerImage.alt}
          fill
          priority
          className="object-cover object-center w-full h-full"
          sizes="100vw"
        />
      </div>

      {/* Gummies Grid */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {gummies.slice(0, 9).map((gummy, idx) => (
            <div
              key={gummy.alt}
              className="flex flex-col items-center rounded-lg py-4 group cursor-pointer bg-white"
            >
              <div
                className="relative w-64 h-96 mb-4 rounded-lg overflow-hidden"
                style={{
                  background: "white",
                  transition:
                    "background 2.5s ease-in-out, transform 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => handleMouseEnter(e, gummyGradients[idx])}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={gummy.src}
                  alt={gummy.alt}
                  className="object-contain w-full h-full transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="font-semibold text-lg mb-1">{gummy.alt}</span>
              <span className="text-gray-500 text-base mb-1">
                {taglines[idx]}
              </span>
              <Link
                href={`/adult-products/${idx + 1}`}
                className="font-bold text-base text-[#018578] tracking-wide hover:underline"
              >
                MORE
              </Link>
            </div>
          ))}
        </div>

        {/* Last Gummy Centered */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center rounded-lg py-4 cursor-pointer bg-white">
            <div
              className="relative w-64 h-64 mb-4 rounded-lg overflow-hidden"
              style={{
                background: "white",
                transition:
                  "background 2.5s ease-in-out, transform 0.5s ease-in-out",
              }}
              onMouseEnter={(e) => handleMouseEnter(e, gummyGradients[9])}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={gummies[9].src}
                alt={gummies[9].alt}
                className="object-contain w-full h-full transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <span className="font-semibold text-lg mb-1">{gummies[9].alt}</span>
            <span className="text-gray-500 text-base mb-1">{taglines[9]}</span>
            <Link
              href="/adult-products/10"
              className="font-bold text-base text-[#018578] tracking-wide hover:underline"
            >
              MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdultProductsPage;
