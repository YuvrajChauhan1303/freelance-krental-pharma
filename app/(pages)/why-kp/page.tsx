import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Image */}
      <div className="w-full h-[40vh] relative mb-8">
        <Image
          src="/images/whykp/header.png"
          alt="Why KP header"
          fill
          priority
          className="object-cover w-full h-full"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-10 text-gray-800">
        {/* BEST INGREDIENTS */}
        <section>
          <h2 className="text-[#018578] text-2xl text-center font-bold mb-3">
            BEST INGREDIENTS
          </h2>
          <p>
            We believe that great results begin with great ingredients.
            That&apos;s why we use only carefully selected, high-quality,
            science-backed components in every gummy. From plant-based extracts
            to essential vitamins and minerals, each element is chosen for its
            purity, safety, and effectiveness&mdash;giving your body what it
            truly needs, nothing it doesn&apos;t.
          </p>
        </section>

        {/* EXPERT DEVELOPMENT */}
        <section>
          <h2 className="text-[#018578] text-2xl text-center font-bold mb-3">
            EXPERT DEVELOPMENT
          </h2>
          <p>
            Behind every gummy we create is a team of experienced professionals
            dedicated to your health and wellness. Our formulations are
            developed by expert pharmacists, pediatricians, and nutritionists
            who combine traditional knowledge with the latest scientific
            research to ensure each product is safe, effective, and
            well-balanced.
          </p>
          <p className="mt-2">
            We follow a meticulous development process&mdash;right from
            ingredient sourcing and dosage accuracy to flavor profiling and
            safety checks. Every formula is tested for quality and stability,
            ensuring it delivers consistent results without compromising on
            taste or texture. With years of expertise and a passion for
            wellness, our team ensures that every gummy isn&apos;t just good for
            you&mdash;it&apos;s designed for you. Because when it comes to
            health, we don&apos;t believe in guesswork&mdash;we believe in
            expert care, backed by science.
          </p>
        </section>

        {/* WHAT WE DO */}
        <section>
          <h2 className="text-[#018578] text-2xl text-center font-bold mb-3">
            WHAT WE DO
          </h2>
          <p>
            We don&apos;t believe in shortcuts. While many brands focus only on
            taste or trendy ingredients, we focus on creating the perfect
            balance&mdash;delicious, clean, and genuinely beneficial.
          </p>
          <p className="mt-3 font-semibold">What sets us apart:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Full transparency with no hidden ingredients</li>
            <li>Clinically-researched formulations</li>
            <li>No artificial colors, preservatives, or added sugars</li>
            <li>Tasty, easy-to-chew gummies that actually work</li>
          </ul>
        </section>

        {/* BENEFITS */}
        <section>
          <h2 className="text-[#018578] text-2xl text-center font-bold mb-3">
            BENEFITS
          </h2>
          <p>
            Our gummies are carefully formulated to support the complete
            wellness journey of both kids and adults. Each gummy is packed with
            essential nutrients, plant-based extracts, and clinically studied
            ingredients to address real, everyday health concerns in a simple
            and enjoyable way. For children, they help improve appetite, aid
            digestion, support brain development, and strengthen
            immunity&mdash;making mealtimes easier and nutrition more complete.
            For adults, our gummies offer targeted benefits like stress relief,
            restful sleep, radiant skin, stronger hair and nails, and improved
            overall vitality.
          </p>
          <p className="mt-2">
            Whether it&apos;s helping a child grow with confidence or helping
            you manage the demands of a busy life, our gummies provide
            effective, natural support in a delicious, chewable form you&apos;ll
            actually look forward to taking. Because good health shouldn&apos;t
            be complicated&mdash;it should be consistent, enjoyable, and built
            into your everyday routine.
          </p>
        </section>
      </div>

      <div className="h-12" />
    </div>
  );
};

export default Page;
