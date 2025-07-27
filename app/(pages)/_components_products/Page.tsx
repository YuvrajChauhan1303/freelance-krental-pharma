import React from "react";
import Image from "next/image";

type ImageType = {
  src: string;
  alt: string;
};

type PageProps = {
  bannerImage: ImageType;
  gummies: ImageType[]; // Should be exactly 10
  taglines: string[]; // Should be exactly 10, one for each gummy
};

const Page: React.FC<PageProps> = ({ bannerImage, gummies, taglines }) => {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div
        className="w-full relative"
        style={{ height: "32vh", maxHeight: 350 }}
      >
        <Image
          src={bannerImage.src}
          alt={bannerImage.alt}
          fill
          className="object-cover object-center"
          // Remove priority to allow lazy loading
          loading="lazy"
          sizes="100vw"
        />
        {/* Heading overlay */}
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
                <Image
                  src={gummy.src}
                  alt={gummy.alt}
                  fill
                  className="object-contain"
                  sizes="160px"
                  loading="lazy"
                />
              </div>
              <span className="font-semibold text-lg mb-1">{gummy.alt}</span>
              <span className="text-gray-500 text-base mb-1">
                {taglines[idx] || ""}
              </span>
              <span className="font-bold text-base text-[#018578] tracking-wide cursor-pointer">
                MORE
              </span>
            </div>
          ))}
        </div>
        {/* Last gummy centered */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center bg-white rounded-lg py-4">
            <div className="relative w-64 h-64 mb-4">
              <Image
                src={gummies[9].src}
                alt={gummies[9].alt}
                fill
                className="object-contain"
                sizes="160px"
                loading="lazy"
              />
            </div>
            <span className="font-semibold text-lg mb-1">{gummies[9].alt}</span>
            <span className="text-gray-500 text-base mb-1">
              {taglines[9] || ""}
            </span>
            <span className="font-bold text-base text-[#018578] tracking-wide cursor-pointer">
              MORE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
