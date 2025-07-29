import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProductDetail = {
  id: number;
  bottle: string;
  bgColor: string;
  heading: string;
  subtitle: string;
  description: string;
  note: string;
};

const kidsProducts: ProductDetail[] = require("./data.json");

function getProductById(id: number): ProductDetail | undefined {
  return kidsProducts.find((p) => p.id === id);
}

type PageProps = {
  params: { slug: string };
};

const Page = ({ params }: PageProps) => {
  const productId = Number(params.slug);
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <p className="mt-4 text-gray-500">
          Please check the product ID in the URL.
        </p>
      </div>
    );
  }

  return (
    <main className="w-full">
      {/* Banner Section */}
      <div
        className="w-full relative flex gap-16  justify-center text-center text-white py-16"
        style={{
          background: product.bgColor,
        }}
      >
        <div className="relative w-52 h-64 mb-4">
          <Image
            src={product.bottle}
            alt={product.heading}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{product.heading}</h1>
          <p className="text-lg mt-2">{product.subtitle}</p>
        </div>
      </div>

      {/* Description and Note Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 h-64 flex items-center justify-center text-center p-6 rounded-md">
          <p className="text-gray-700 font-medium">{product.description}</p>
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center text-center p-6 rounded-md">
          <p className="text-gray-700 font-medium">{product.note}</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center pb-16">
        <Link
          href="/kids-products"
          className="inline-block border-2 border-[#018578] text-[#018578] px-6 py-2 rounded-md hover:bg-[#018578] hover:text-white transition"
        >
          Back To Products
        </Link>
      </div>
    </main>
  );
};

export default Page;
