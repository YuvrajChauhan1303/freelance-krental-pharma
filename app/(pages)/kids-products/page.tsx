"use client";
import React from "react";
import PageComponent from "../_components_products/Page";
import Link from "next/link";

const bannerImage = {
  src: "/images/products/kids/banner.png",
  alt: "Kids Products Banner",
};

const productNames = [
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

const gummies = productNames.map((name, i) => ({
  src: `/images/products/kids/kids${i + 1}.png`,
  alt: name,
}));

const taglines = [
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

// Custom Page component to override "MORE" with a Link
const KidsProductsPage = () => {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div
        className="w-full relative"
        style={{ height: "32vh", maxHeight: 350 }}
      >
        <img
          src={bannerImage.src}
          alt={bannerImage.alt}
          className="object-cover object-center w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Gummies Grid */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {gummies.slice(0, 9).map((gummy, idx) => (
            <div
              key={gummy.alt}
              className="flex flex-col items-center bg-white rounded-lg py-4"
            >
              <div className="relative w-64 h-64 mb-4">
                <img
                  src={gummy.src}
                  alt={gummy.alt}
                  className="object-contain w-full h-full"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </div>
              <span className="font-semibold text-lg mb-1">{gummy.alt}</span>
              <span className="text-gray-500 text-base mb-1">
                {taglines[idx] || ""}
              </span>
              <Link
                href={`/kids-products/${idx + 1}`}
                className="font-bold text-base text-[#018578] tracking-wide cursor-pointer hover:underline"
              >
                MORE
              </Link>
            </div>
          ))}
        </div>
        {/* Last gummy centered */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center bg-white rounded-lg py-4">
            <div className="relative w-64 h-64 mb-4">
              <img
                src={gummies[9].src}
                alt={gummies[9].alt}
                className="object-contain w-full h-full"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                loading="lazy"
              />
            </div>
            <span className="font-semibold text-lg mb-1">{gummies[9].alt}</span>
            <span className="text-gray-500 text-base mb-1">
              {taglines[9] || ""}
            </span>
            <Link
              href={`/kids-products/10`}
              className="font-bold text-base text-[#018578] tracking-wide cursor-pointer hover:underline"
            >
              MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsProductsPage;
