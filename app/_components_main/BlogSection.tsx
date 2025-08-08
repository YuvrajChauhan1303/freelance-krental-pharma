"use client";
import React, { useRef, useEffect, useCallback } from "react";
import Blog from "./Blog";


const blogs = [
  {
    image: { src: "/images/blogs/placeholder.png", alt: "Blog 1" },
    title: "Natural Stress Relief That Tastes Like Calm",
    author: "Sujal Patel",
    date: "May 10, 2024",
    excerpt:
      "Life’s hustle can leave your mind racing and your body drained. That’s where our Stress Relief Gummies come in—infused with the ancient power of Ashwagandha, they’re your tasty companion to help you unwind and reset. These gummies are more than just a treat—they’re a science-backed solution to help manage everyday stress and anxiety. Whether it’s a tough day at work, exam stress, or just too much screen time, a daily dose can bring you back to...",
    readMoreLink: "/blogs/stress-relief-gummies",
  },
  {
    image: { src: "/images/blogs/placeholder.png", alt: "Blog 2" },
    title: "Smart Bites for Bright Minds: Brain Development That Tastes Yummy!",
    author: "Diya Dugar",
    date: "April 22, 2024",
    excerpt:
      "Growing minds need the right fuel to learn, focus, and shine. That’s where our Brain Development Gummies come in—packed with kid-friendly nutrients like Omega-3 DHA, choline, and essential vitamins to support memory, focus, and healthy brain growth. More than just a tasty treat, these gummies help your little ones stay sharp, curious, and ready to take on every learning adventure. One gummy a day, and their brain gets the boost it deserves!",
    readMoreLink: "/blogs/brain-development-gummies",
  },
  {
    image: { src: "/images/blogs/placeholder.png", alt: "Blog 3" },
    title: "Sleep That Feels Like a Dream: Rest Easy with Sleep Aid Gummies",
    author: "Sujal Patel",
    date: "March 15, 2024",
    excerpt:
      "Restless nights and racing thoughts can leave you feeling drained before the day even begins. That’s where our Sleep Aid Gummies come in—infused with melatonin, chamomile, and L-theanine to gently guide your body into deep, restful sleep. More than just a nighttime treat, these gummies are your natural, non-habit-forming way to relax, unwind, and wake up feeling refreshed. Whether it’s stress, screen time, or travel keeping you up, your path to better sleep starts here.",
    readMoreLink: "/blogs/sleep-aid-gummies",
  },
  {
    image: { src: "/images/blogs/placeholder.png", alt: "Blog 4" },
    title:
      "Tiny Tummies, Big Appetites: The Yummy Way to Boost Your Kid’s Hunger Naturally!",
    author: "Diya Dugar",
    date: "February 28, 2024",
    excerpt:
      "Fussy eating, skipped meals, and tiny appetites can make nutrition a daily challenge. That’s where our Appetite Booster Gummies come in—made with gentle, kid-safe ingredients like zinc, B-vitamins, and herbal extracts to naturally support hunger and digestion. These yummy gummies aren’t just a sweet treat—they’re a daily boost to help little ones enjoy mealtime, eat better, and grow strong. Whether it’s a picky phase or just a low appetite, one gummy a day helps bring healthy eating back on track.",
    readMoreLink: "/blogs/appetite-booster-gummies",
  },
  {
    image: { src: "/images/blogs/placeholder.png", alt: "Blog 5" },
    title: "Glow from Within: Your Daily Boost for Healthy Hair, Skin & Nails",
    author: "Diya Dugar",
    date: "January 12, 2024",
    excerpt:
      "Daily stress, pollution, and late nights can leave your hair dull, your skin tired, and your nails weak. That’s where our Hair, Skin & Nail Booster Gummies come in—packed with biotin, vitamins, and antioxidants, they’re your tasty secret to glowing from the inside out. More than just a beauty treat, these science-backed gummies support natural collagen production, strengthen strands, and nourish your skin and nails. Whether you're recovering from stress, breakage, or just want to boost your glow—your daily dose starts here.",
    readMoreLink: "/blogs/hair-skin-nail-booster-gummies",
  },
];

export default function BlogSection() {
  const [current, setCurrent] = React.useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const prevIndex = useRef<number>(0);
  const [direction, setDirection] = React.useState<"left" | "right">("right");

  // Move to next slide
  const nextSlide = useCallback(() => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % blogs.length);
  }, []);

  // Move to previous slide (not used, but for completeness)
  const prevSlide = useCallback(() => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + blogs.length) % blogs.length);
  }, []);

  // Set up autorotate
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  // Handler for dot click
  const goToSlide = (idx: number) => {
    setDirection(idx > current ? "right" : "left");
    setCurrent(idx);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, 5000);
    }
  };

  // For sliding animation, track previous index
  useEffect(() => {
    prevIndex.current = current;
  }, [current]);

  // --- Fix for right border not appearing ---
  // The right border is set on the left image container in Blog.tsx using inline style:
  // style={{ borderRight: "0.15vw solid #018578" }}
  // However, if the parent container has overflow:hidden and the child is 100% width,
  // the border may be clipped if the child is the last in the flex row.
  // To ensure the right border is always visible, add a small padding-right to the
  // flex container and a negative margin-right to compensate, so the border is not clipped.

  return (
    <div className="w-full py-12 bg-[#f8fdfa]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#018578] mb-8 text-center">
          Our Latest Blogs
        </h2>
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-full flex justify-center">
            <div className="w-[90vw] max-w-[90vw] min-w-[75vw] overflow-visible relative h-[24vw] min-h-[16vw] max-h-[32vw]">
              <div
                className="flex transition-transform duration-700 ease-in-out pr-[0.2vw] -mr-[0.2vw]"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                  width: `${blogs.length * 100}%`,
                  height: "100%",
                }}
              >
                {blogs.map((blog, idx) => (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 flex-grow-0"
                    style={{
                      width: "100%",
                      minWidth: "100%",
                      maxWidth: "100%",
                      height: "100%",
                    }}
                    aria-hidden={idx !== current}
                  >
                    <Blog {...blog} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-3">
            {blogs.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full border-2 border-[#018578] transition-all duration-200
                  ${
                    current === idx
                      ? "bg-[#018578] scale-110"
                      : "bg-white opacity-70"
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#018578]
                `}
                onClick={() => goToSlide(idx)}
                tabIndex={0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
