"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "../data.json";

const PharmaProductPage = () => {
  const params = useParams();
  const productId = params.id as string;

  // Find the product data based on the ID
  const productData = data.find(item => item.key === productId);

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Pharma Header */}
      <div className="w-full relative">
        <div className="relative w-full aspect-[3/1] sm:aspect-[4/1] md:aspect-[5/1] max-h-[350px]">
          <Image
            src={"/images/nutra_header.png"}
            alt={"Nutra products banner"}
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
            <h1 className="text-white text-7xl font-bold uppercase tracking-wide max-w-5xl mx-auto text-center">
              {productData.productTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productData.productList.map((product, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-white p-4">
              <div className="mb-4">
                <Image 
                  src={product.productImage}
                  alt={product.productName}
                  width={400}
                  height={500}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.productName}
                </h3>
                {/* <p className="text-sm text-gray-600">
                  {product.productDose}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center pb-8">
        <Link href="/nutra-products">
          <button className="w-xl px-8 py-3 text-[#018578] bg-white font-semibold rounded-lg border-2 border-[#018578] hover:bg-[#f0f0f0] ">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PharmaProductPage;
