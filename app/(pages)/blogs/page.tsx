"use client";
import React from "react";
import Blog from "./_components/Blog";
import Image from "next/image";


type BlogType = {
  image: { src: string; alt?: string };
  title: string;
  author: string;
  date: string;
  excerpt: string;
  readMoreLink: string;
};

const blogs: BlogType[] = [
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

const Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8fdfa] pb-16">
      <div className="w-full relative mb-8">
        <div className="relative w-full aspect-[3/1] sm:aspect-[4/1] md:aspect-[5/1]">
          <Image
            src="/images/blogs/header.png"
            alt="Blogs header"
            fill
            priority
            className="object-cover w-full h-auto"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#018578] mb-10 text-center">
          Our Latest Blogs
        </h1>
        <div className="flex flex-col gap-10 items-center">
          {blogs.map((blog, idx) => (
            <Blog key={idx} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
