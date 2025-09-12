import React from "react";
import Image from "next/image";
import Link from "next/link"

const productList = [
  {
    src: "/images/pharma_main/prod1.png",
    alt: "Diabetic Division - Pharmaceutical Products",
    title: "Diabetic Division",
    link: "/pharma-products/diabetic-division"
  },
  {
    src: "/images/pharma_main/prod2.png",
    alt: "Cardiac Division - Pharmaceutical Products",
    title: "Cardiac Division",
    link: "/pharma-products/cardiac-division"
  },
  {
    src: "/images/pharma_main/prod3.png",
    alt: "Neuro Psychiatry Division - Pharmaceutical Products",
    title: "Neuro Psychiatry Division",
    link: "/pharma-products/neuro-psychiatry-division"
  },
  {
    src: "/images/pharma_main/prod4.png",
    alt: "Anti Biotic Division - Pharmaceutical Products",
    title: "Anti Biotic Division",
    link: "/pharma-products/anti-biotic-division"
  },
  {
    src: "/images/pharma_main/prod5.png",
    alt: "Gastro Division - Pharmaceutical Products",
    title: "Gastro Division",
    link: "/pharma-products/gastro-division"
  },
  {
    src: "/images/pharma_main/prod6.png",
    alt: "Analgesic Anti Inflammatory Division - Pharmaceutical Products",
    title: "Analgesic Anti Inflammatory Division",
    link: "/pharma-products/analgesic-anti-inflammatory-division"
  },
  {
    src: "/images/pharma_main/prod7.png",
    alt: "Multivitamin Anti Oxidant Division - Pharmaceutical Products",
    title: "Multivitamin Anti Oxidant Division",
    link: "/pharma-products/multivitamin-anti-oxidant-division"
  },
  {
    src: "/images/pharma_main/prod8.png",
    alt: "Anti Fungal Anti Allergic Division - Pharmaceutical Products",
    title: "Anti Fungal Anti Allergic Division",
    link: "/pharma-products/anti-fungal-anti-allergic-division"
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
    <div className="flex flex-col items-center justify-center space-y-2">
      <div>
        <Image 
        src={src}
        alt={alt}
        width={300}
        height={400}
        />
      </div>
      <div className="uppercase"> {title}</div>
      <Link href={link}>
        <span className="text-[#018578]">
          View Products
        </span>
      </Link>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <div className="w-full relative">
        <div className="relative w-full aspect-[3/1] sm:aspect-[4/1] md:aspect-[5/1] max-h-[350px]">
          <Image
            src={"/images/pharma_header.png"}
            alt={"Pharma products banner"}
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
            <h1 className="text-white text-7xl font-bold uppercase tracking-wide">
              Pharmaceuticals
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 p-6">
        {productList.map((product) => (
          <Cards key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};

export default page;
