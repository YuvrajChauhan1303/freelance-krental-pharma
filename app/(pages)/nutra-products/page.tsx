import React from "react";
import Image from "next/image";
import Link from "next/link"

const productList = [
  {
    src: "/images/nutra_main/prod1.png",
    alt: "Beauty - Nutraceutical Products",
    title: "Beauty",
    link: "/nutra-products/beauty"
  },
  {
    src: "/images/nutra_main/prod2.png",
    alt: "Joint - Nutraceutical Products",
    title: "Joint",
    link: "/nutra-products/joint"
  },
  {
    src: "/images/nutra_main/prod3.png",
    alt: "Vitamin D - Nutraceutical Products",
    title: "Vitamin D",
    link: "/nutra-products/vitamin-d"
  },
  {
    src: "/images/nutra_main/prod4.png",
    alt: "Calcium - Nutraceutical Products",
    title: "Calcium",
    link: "/nutra-products/calcium"
  },
  {
    src: "/images/nutra_main/prod5.png",
    alt: "Prenatal Supplements - Nutraceutical Products",
    title: "Prenatal Supplements",
    link: "/nutra-products/prenatal-supplements"
  },
  {
    src: "/images/nutra_main/prod6.png",
    alt: "Men's Health Supplements - Nutraceutical Products",
    title: "Men's Health Supplements",
    link: "/nutra-products/mens-health-supplements"
  },
  {
    src: "/images/nutra_main/prod7.png",
    alt: "Woman's Health Supplements - Nutraceutical Products",
    title: "Woman's Health Supplements",
    link: "/nutra-products/womans-health-supplements"
  },
  {
    src: "/images/nutra_main/prod8.png",
    alt: "Diabetic Supplements - Nutraceutical Products",
    title: "Diabetic Supplements",
    link: "/nutra-products/diabetic-supplements"
  },
  {
    src: "/images/nutra_main/prod9.png",
    alt: "Iron Supplements - Nutraceutical Products",
    title: "Iron Supplements",
    link: "/nutra-products/iron-supplements"
  },
  {
    src: "/images/nutra_main/prod10.png",
    alt: "Immune Supplements - Nutraceutical Products",
    title: "Immune Supplements",
    link: "/nutra-products/immune-supplements"
  },
  {
    src: "/images/nutra_main/prod11.png",
    alt: "B-Complex Supplements - Nutraceutical Products",
    title: "B-Complex Supplements",
    link: "/nutra-products/b-complex-supplements"
  },
  {
    src: "/images/nutra_main/prod12.png",
    alt: "Brain Supplements - Nutraceutical Products",
    title: "Brain Supplements",
    link: "/nutra-products/brain-supplements"
  },
  {
    src: "/images/nutra_main/prod13.png",
    alt: "Hepatoprotective Supplements - Nutraceutical Products",
    title: "Hepatoprotective Supplements",
    link: "/nutra-products/hepatoprotective-supplements"
  },
  {
    src: "/images/nutra_main/prod14.png",
    alt: "Hair Supplements - Nutraceutical Products",
    title: "Hair Supplements",
    link: "/nutra-products/hair-supplements"
  },
  {
    src: "/images/nutra_main/prod15.png",
    alt: "Multivitamin Range - Nutraceutical Products",
    title: "Multivitamin Range",
    link: "/nutra-products/multivitamin-range"
  },
  {
    src: "/images/nutra_main/prod16.png",
    alt: "Multivitamin Range Kids - Nutraceutical Products",
    title: "Multivitamin Range Kids",
    link: "/nutra-products/multivitamin-range-kids"
  },
  {
    src: "/images/nutra_main/prod17.png",
    alt: "Antioxidant Range - Nutraceutical Products",
    title: "Antioxidant Range",
    link: "/nutra-products/antioxidant-range"
  }
]

interface cardProps{
  src: string;
  title: string;
  alt: string;
  link: string;
}

const Cards = ({src, alt, title, link}: cardProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 w-full max-w-xs mx-auto">
      <Link href={link} className="block w-full aspect-[3/4] relative">
        <Image 
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
          priority={false}
        />
        <span className="sr-only">{title}</span>
      </Link>
      <div className="uppercase text-center text-base sm:text-lg font-semibold">{title}</div>
      <Link href={link} className="w-fit">
        <span className="text-[#018578] font-medium">
          View Products
        </span>
      </Link>
    </div>
  );
};

const page = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full relative">
        <div className="relative w-full aspect-[3/1] sm:aspect-[4/1] md:aspect-[5/1] max-h-[350px]">
          <Image
            src={"/images/nutra_header.png"}
            alt={"Nutrasuitical Product banner"}
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
            <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-center px-2">
              Nutraceuticals
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 px-2 sm:px-6 md:px-10">
        {productList.map((product) => (
          <Cards key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};

export default page;
