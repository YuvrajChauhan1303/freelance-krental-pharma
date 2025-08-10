import data from "../data.json";
import Image from "next/image";
import Link from "next/link";

interface ProductParams {
  params: { id: string };
}

export default function ProductPage({ params }: ProductParams) {
  const product = data.find((item) => item.id === params.id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/adult-products" className="text-blue-500 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section>
      {/* Header section */}
      <div
        className="flex flex-col md:flex-row items-center text-white p-8"
        style={{ background: product.bg_gradient }}
      >
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={product.image}
            alt={product.header}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold">{product.header}</h1>
          <h2 className="text-xl mt-2">{product.subheader}</h2>
          <p className="mt-4 max-w-md">{product.header_desc}</p>
        </div>
      </div>

      {/* Description & Benefits */}
      <div className="grid md:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold text-[#008577]">Description</h3>
          {product.description.map((para, index) => (
            <p key={index} className="mt-4 text-gray-700">
              {para}
            </p>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#008577]">Benefits</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back button */}
      <div className="flex justify-center pb-10">
        <Link
          href="/adult-products"
          className="px-6 py-2 border-2 border-[#008577] rounded hover:bg-[#008577] hover:text-white transition"
        >
          Back To Products
        </Link>
      </div>
    </section>
  );
}
