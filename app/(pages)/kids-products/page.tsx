"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Gummy {
  src: string;
  alt: string;
}

const gummyGradients: string[] = [
  "linear-gradient(180deg, #69C4CF 0%, #3AAA90 100%)",
  "linear-gradient(180deg, #BC6699 0%, #C681D5 100%)",
  "linear-gradient(180deg, #E48E2B 0%, #B64128 100%)",
  "linear-gradient(180deg, #37A3DA 0%, #18467E 100%)",
  "linear-gradient(180deg, #4DD4CC 0%, #5A5CBA 100%)",
  "linear-gradient(180deg, #CE459E 0%, #3C98D3 100%)",
  "linear-gradient(180deg, #F366BB 0%, #EDBD5D 100%)",
  "linear-gradient(180deg, #D1E442 0%, #37A93E 100%)",
  "linear-gradient(180deg, #EFAF43 0%, #CC4179 100%)",
  "linear-gradient(180deg, #6DB347 0%, #DDA318 100%)",
];

const bannerImage = {
  src: "/images/products/kid/banner.png",
  alt: "Kids Products Banner",
};

const productNames: string[] = [
  "Appetite Booster",
  "Multi Vitamins",
  "Eye Care",
  "Sleep Aid",
  "Weight Balancer",
  "Ultra Omega Compete",
  "D3 + K2 Bone Health",
  "Immune Booster",
  "Height Booster",
  "Brain Developer",
];

const taglines: string[] = [
  "For Joyful Eating & Healty Well-being",
  "For Better Mental & Physical Well-Being",
  "For Healthy Vision",
  "For Maintaining Natural & Enjoyable Sleep",
  "For Supporting Healthy Weight",
  "For Healthy Brain Development",
  "For Stronger Bones & Better Well-being",
  "For Protection Against Various Infections",
  "For Maintaining Height Growth",
  "For Maintaining Cognitive Development",
];

const gummies: Gummy[] = productNames.map((name, i) => ({
  src: `/images/products/kid/kid${i + 1}.png`,
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

  return (
    <div className={`flex flex-col items-center rounded-lg py-4 group cursor-pointer bg-white ${boxClassName}`}>
      <div
        className={`relative w-64 h-96 mb-4 rounded-lg overflow-hidden ${imgBoxClassName}`}
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

const KidsProductsPage: React.FC = () => {
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
            <GummyBox
              key={gummy.alt}
              gummy={gummy}
              gradient={gummyGradients[idx]}
              tagline={taglines[idx]}
              link={`/kids-products/${idx + 1}`}
            />
          ))}
        </div>

        {/* Last Gummy Centered */}
        <div className="flex justify-center mt-10">
          <GummyBox
            gummy={gummies[9]}
            gradient={gummyGradients[9]}
            tagline={taglines[9]}
            link="/kids-products/10"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsProductsPage;
