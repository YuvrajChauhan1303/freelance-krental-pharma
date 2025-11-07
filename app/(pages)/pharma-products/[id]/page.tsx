"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "../data.json";

// Helper to chunk the productNames array into columns of up to 30 items each
const chunkArray = (arr: string[], chunkSize: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

const PharmaProductPage = () => {
  const params = useParams();
  const productId = params.id as string;

  // Find the product data based on the ID
  const productData = data.find(item => item.key === productId);

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <h1 className="text-xl md:text-2xl font-bold text-center">Product not found</h1>
      </div>
    );
  }

  // Split productNames into columns of max 30 per column
  const productNameColumns = chunkArray(productData.productNames || [], 30);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Pharma Header */}
      <div className="w-full relative">
        <div className="relative w-full aspect-[3/1] xs:aspect-[4/1] sm:aspect-[4/1] md:aspect-[5/1] max-h-[350px]">
          <Image
            src={"/images/pharma_header.png"}
            alt={"Pharma products banner"}
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
            <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide max-w-4xl mx-auto text-center px-2">
              {productData.productTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Product Names List and Round Side Image */}
      {productData.productNames && productData.productNames.length > 0 && (
        <div className="w-full max-w-6xl mx-auto px-4 pt-6 sm:pt-10">
          <h2 className="text-[#018578] md:text-xl text-2xl font-bold uppercase mb-4 text-center">
            Product List
          </h2>
          <div className="w-full flex flex-row items-start relative">
            {/* Product Name Columns */}
            <div className="flex flex-1 justify-center gap-4 sm:gap-8">
              {productNameColumns.map((column, colIdx) => (
                <ul
                  key={colIdx}
                  className="list-disc list-inside text-gray-700 text-[4vw] md:text-[1vw] flex-1 min-w-[70vw] max-w-[95vw] md:min-w-[22vw] md:max-w-[50vw] text-left items-start md:mr-auto"
                >
                  {column.map((name, idx) => (
                    <li key={idx} className="py-1">{name}</li>
                  ))}
                </ul>
              ))}
            </div>
            {/* Round Side Image */}
            {productData.sideImage && productData.sideImage.trim() !== "" && (
              <div
                className="hidden md:flex flex-shrink-0 items-start"
                style={{
                  marginLeft: "5vw", // Large margin between list and circle img
                  marginRight: "0",   // align to right
                }}
              >
                <div
                  className="relative rounded-full overflow-hidden bg-gray-100 shadow-md"
                  style={{
                    width: "40vw",
                    height: "40vw",
                    minWidth: 200,
                    minHeight: 200,
                    maxWidth: 400,
                    maxHeight: 400,
                  }}
                >
                  <Image
                    src={productData.sideImage}
                    alt="Division Side Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, 40vw"
                    priority={false}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="w-full max-w-6xl mx-auto px-2 xs:px-4 sm:px-6 md:px-10 py-16 flex-1">
        {/* ↑↑↑ Increased py to add more margin above the grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 xl:gap-20">
          {/* ↑↑↑ Increased gap between product grid cards */}
          {productData.productList.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 transition-transform hover:scale-[1.025] w-full max-w-xs mx-auto"
            >
              <div className="mb-4 w-full aspect-[3/4] relative">
                <Image
                  src={product}
                  alt={typeof product === "string" ? product.split("/").pop() ?? "Product Image" : "Product Image"}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 300px"
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center pb-8">
        <Link href="/pharma-products" className="w-fit">
          <button className="w-fit px-6 xs:px-8 py-2 md:py-3 text-[#018578] bg-white font-semibold rounded-lg border-2 border-[#018578] hover:bg-[#f0f0f0] text-base sm:text-lg">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PharmaProductPage;
