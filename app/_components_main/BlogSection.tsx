"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const blogs = [
  {
    image: { src: "/images/blogs/blog1.png", alt: "Blog 1" },
    title: "Natural Stress Relief That Tastes Like Calm",
    author: "Sujal Patel",
    date: "May 10, 2024",
    excerpt:
      "Life’s hustle can leave your mind racing and your body drained. That’s where our Stress Relief Gummies come in—infused with the ancient power of Ashwagandha, they’re your tasty companion to help you unwind and reset. These gummies are more than just a treat—they’re a science-backed solution to help manage everyday stress and anxiety. Whether it’s a tough day at work, exam stress, or just too much screen time, a daily dose can bring you back to...",
    readMoreLink: "/blogs/stress-relief-gummies",
  },
  {
    image: { src: "/images/blogs/blog2.png", alt: "Blog 2" },
    title: "Smart Bites for Bright Minds: Brain Development That Tastes Yummy!",
    author: "Diya Dugar",
    date: "April 22, 2024",
    excerpt:
      "Growing minds need the right fuel to learn, focus, and shine. That’s where our Brain Development Gummies come in—packed with kid-friendly nutrients like Omega-3 DHA, choline, and essential vitamins to support memory, focus, and healthy brain growth. More than just a tasty treat, these gummies help your little ones stay sharp, curious, and ready to take on every learning adventure. One gummy a day, and their brain gets the boost it deserves!",
    readMoreLink: "/blogs/brain-development-gummies",
  },
  {
    image: { src: "/images/blogs/blog3.png", alt: "Blog 3" },
    title: "Sleep That Feels Like a Dream: Rest Easy with Sleep Aid Gummies",
    author: "Sujal Patel",
    date: "March 15, 2024",
    excerpt:
      "Restless nights and racing thoughts can leave you feeling drained before the day even begins. That’s where our Sleep Aid Gummies come in—infused with melatonin, chamomile, and L-theanine to gently guide your body into deep, restful sleep. More than just a nighttime treat, these gummies are your natural, non-habit-forming way to relax, unwind, and wake up feeling refreshed. Whether it’s stress, screen time, or travel keeping you up, your path to better sleep starts here.",
    readMoreLink: "/blogs/sleep-aid-gummies",
  },
  {
    image: { src: "/images/blogs/blog4.png", alt: "Blog 4" },
    title:
      "Tiny Tummies, Big Appetites: The Yummy Way to Boost Your Kid’s Hunger Naturally!",
    author: "Diya Dugar",
    date: "February 28, 2024",
    excerpt:
      "Fussy eating, skipped meals, and tiny appetites can make nutrition a daily challenge. That’s where our Appetite Booster Gummies come in—made with gentle, kid-safe ingredients like zinc, B-vitamins, and herbal extracts to naturally support hunger and digestion. These yummy gummies aren’t just a sweet treat—they’re a daily boost to help little ones enjoy mealtime, eat better, and grow strong. Whether it’s a picky phase or just a low appetite, one gummy a day helps bring healthy eating back on track.",
    readMoreLink: "/blogs/appetite-booster-gummies",
  },
  {
    image: { src: "/images/blogs/blog5.png", alt: "Blog 5" },
    title: "Glow from Within: Your Daily Boost for Healthy Hair, Skin & Nails",
    author: "Diya Dugar",
    date: "January 12, 2024",
    excerpt:
      "Daily stress, pollution, and late nights can leave your hair dull, your skin tired, and your nails weak. That’s where our Hair, Skin & Nail Booster Gummies come in—packed with biotin, vitamins, and antioxidants, they’re your tasty secret to glowing from the inside out. More than just a beauty treat, these science-backed gummies support natural collagen production, strengthen strands, and nourish your skin and nails. Whether you're recovering from stress, breakage, or just want to boost your glow—your daily dose starts here.",
    readMoreLink: "/blogs/hair-skin-nail-booster-gummies",
  },
];

export default function BlogSection() {
  // Custom state for active slide
  const [activeIdx, setActiveIdx] = useState(0);
  const prevIdx = (activeIdx - 1 + blogs.length) % blogs.length;
  const nextIdx = (activeIdx + 1) % blogs.length;

  // For keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setActiveIdx((prev) => (prev - 1 + blogs.length) % blogs.length);
    } else if (e.key === "ArrowRight") {
      setActiveIdx((prev) => (prev + 1) % blogs.length);
    }
  };

  // Auto-advance every 5 seconds (left to right)
  useEffect(() => {
    if (blogs.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % blogs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [blogs.length]);

  return (
    <section className="w-full py-12 bg-[#f8fdfa]">
      <div className="max-w-[96vw] mx-auto px-0 md:px-0">
        <h2 className="text-3xl font-bold text-[#018578] mb-8 text-center">
          Our Latest Blogs
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div
            className="w-full mx-auto"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Blog carousel"
          >
            <div className="relative flex items-center justify-center w-full">
              {/* Left Arrow */}
              <button
                aria-label="Previous blog"
                onClick={() =>
                  setActiveIdx(
                    (prev) => (prev - 1 + blogs.length) % blogs.length
                  )
                }
                className="absolute left-0 z-10 bg-white border border-[#018578] rounded-full w-[3vw] h-[3vw] flex items-center justify-center shadow hover:bg-[#f0fdfa] transition disabled:opacity-50"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                disabled={blogs.length <= 1}
              >
                <span className="text-[#018578] text-2xl" aria-hidden="true">
                  &#8592;
                </span>
              </button>
              {/* Carousel Content */}
              <div className="flex w-full overflow-hidden justify-center items-center">
                {/* Previous (peek) */}
                <div
                  className="transition-transform duration-500 ease-in-out opacity-60 scale-90 hidden md:block"
                  style={{
                    minWidth: "60vw",
                    maxWidth: "82vw",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                >
                  <Blog {...blogs[prevIdx]} />
                </div>
                {/* Active */}
                <div
                  className="transition-transform duration-500 ease-in-out mx-2"
                  style={{
                    minWidth: "60vw",
                    maxWidth: "82vw",
                  }}
                >
                  <Blog {...blogs[activeIdx]} />
                </div>
                {/* Next (peek) */}
                <div
                  className="transition-transform duration-500 ease-in-out opacity-60 scale-90 hidden md:block"
                  style={{
                    minWidth: "60vw",
                    maxWidth: "82vw",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                >
                  <Blog {...blogs[nextIdx]} />
                </div>
              </div>
              {/* Right Arrow */}
              <button
                aria-label="Next blog"
                onClick={() =>
                  setActiveIdx((prev) => (prev + 1) % blogs.length)
                }
                className="absolute right-0 z-10 bg-white border border-[#018578] rounded-full w-[3vw] h-[3vw] flex items-center justify-center shadow hover:bg-[#f0fdfa] transition disabled:opacity-50"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                disabled={blogs.length <= 1}
              >
                <span className="text-[#018578] text-2xl" aria-hidden="true">
                  &#8594;
                </span>
              </button>
            </div>
            {/* Custom Dots */}
            <div className="flex items-center justify-center mt-6 px-2">
              <div className="flex gap-2">
                {blogs.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full border-2 border-[#018578] transition-all duration-200 bg-white opacity-70 focus:outline-none focus:ring-2 focus:ring-[#018578] ${
                      activeIdx === idx
                        ? "bg-[#018578] scale-110 opacity-100"
                        : ""
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setActiveIdx(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type BlogProps = {
  image: { src: string; alt?: string };
  title: string;
  author: string;
  date: string;
  excerpt: string;
  readMoreLink: string;
};

const Blog: React.FC<BlogProps> = ({
  image,
  title,
  author,
  date,
  excerpt,
  readMoreLink,
}) => {
  return (
    <div
      className="
        flex 
        flex-row
        border-2 
        border-[#018578] 
        rounded-none
        overflow-hidden 
        bg-white 
        shadow-md
        w-full
        min-w-[60vw]
        max-w-[82vw]
        h-[24vw]
        min-h-[16vw]
        max-h-[32vw]
        mx-auto
      "
      style={{
        borderRadius: "0px",
      }}
    >
      <div
        className="
          flex-shrink-0 
          flex 
          items-center 
          justify-center
          w-[25vw]
          h-full
          min-w-[22vw]
          max-w-[50vw]
          bg-gray-100
        "
        style={{
          borderRight: "0.15vw solid #018578",
        }}
      >
        <img
          src={image.src}
          alt={image.alt || "Blog image"}
          className="w-full h-full object-cover block"
          width={1}
          height={1}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>
      <div
        className="
          flex 
          flex-col 
          justify-between 
          flex-1
          py-[3vw]
          px-[4vw]
        "
      >
        <div>
          <h2 className="text-[1.6vw] font-bold text-[#018578] mb-[0.5vw] line-clamp-2">
            {title}
          </h2>
          <div className="text-[1vw] text-[#018578] mb-[1vw] capitalize">
            By <span className="font-semibold">{author}</span> |{" "}
            <span>{date}</span>
          </div>
          <p className="text-gray-700 mb-[2vw] text-[0.95vw] leading-relaxed line-clamp-4">
            {excerpt}
          </p>
        </div>
        <div>
          <Link
            href={readMoreLink}
            className="
              px-[2vw] 
              py-[0.8vw] 
              bg-[#018578] 
              text-white 
              rounded 
              font-semibold 
              transition 
              hover:bg-[#01695f] 
              flex 
              items-center 
              gap-2
              text-[1vw]
              min-w-[7vw]
              min-h-[2.5vw]
              w-fit
            "
          >
            Read More
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
