import React from "react";
import BlogLayout from "../../_components/BlogLayout";

export default function Page() {
  return (
    <BlogLayout
      title="Glow from Within: Your Daily Boost for Healthy Hair, Skin &amp; Nails"
      author="Diya Dugar"
      date="July 29, 2025"
      image={{
        src: "/images/blogs/placeholder.png",
        alt: "Group of friends glowing with health",
      }}
    >
      <div className="flex flex-col gap-4 text-sm">
        <p>
          Let&apos;s face it&mdash;life gets busy, and your self-care often
          takes a backseat. But what if just one small habit a day could bring
          you closer to the glowing skin, strong nails, and healthy hair
          you&apos;ve been wishing for?
        </p>
        <p>
          Say hello to our{" "}
          <span className="text-[#018578] font-medium">
            Hair, Skin &amp; Nail Booster Gummies
          </span>
          &mdash;a delicious, nutrient-packed solution designed to help you
          shine from the inside out. No harsh pills, no complicated
          routines&mdash;just one tasty gummy a day.
        </p>

        <h2 className="text-[#018578] font-bold text-lg mt-4">
          Beauty That Starts Within
        </h2>
        <p>
          Our gummies are more than skin-deep&mdash;they&apos;re crafted with
          powerhouse nutrients like:
        </p>
        <ul className="list-disc pl-6">
          <li>Biotin &ndash; helps strengthen hair and nails</li>
          <li>
            Vitamin C &ndash; supports collagen production for radiant skin
          </li>
          <li>Vitamin E &ndash; protects skin from oxidative stress</li>
          <li>Zinc &ndash; boosts immunity and promotes clear skin</li>
        </ul>
        <p>
          All the essentials your body needs to look and feel
          fabulous&mdash;without the hassle.
        </p>

        <h2 className="text-[#018578] font-bold text-lg mt-4">
          Why Gummies Are a Game Changer
        </h2>
        <p>
          Let&apos;s be honest&mdash;beauty routines can feel like a chore.
          Pills are hard to swallow, powders taste weird, and creams only go
          skin-deep.
        </p>
        <p>
          That&apos;s why gummies are a total game-changer: they&apos;re tasty,
          easy to take, and make self-care feel like a treat.
        </p>

        <h2 className="text-[#018578] font-bold text-lg mt-4">
          Confidence in Every Chew
        </h2>
        <p>
          Whether you&apos;re getting ready for a big day, heading out with
          friends, or just looking to feel your best&mdash;our gummies support:
        </p>
        <ul className="list-disc pl-6">
          <li>Stronger, shinier hair</li>
          <li>Smoother, glowing skin</li>
          <li>Healthier, harder nails</li>
          <li>Daily beauty from the inside out</li>
        </ul>
        <p>
          One simple step each day helps you show up as your most confident
          self.
        </p>

        <h2 className="text-[#018578] font-bold text-lg mt-4">
          How to Glow Daily: Just One Gummy
        </h2>
        <p>
          Add one gummy to your morning or evening routine&mdash;it&apos;s that
          easy! Whether you&apos;re heading to work, class, or winding down at
          night, this small act of self-love can make a big difference over
          time.
        </p>

        <h2 className="text-[#018578] font-bold text-lg mt-4">
          Final Glow-Up: Beauty is a Daily Ritual
        </h2>
        <p>
          Healthy skin, hair, and nails aren&apos;t about
          perfection&mdash;they&apos;re about nourishment. With our Hair, Skin
          &amp; Nail Gummies, beauty becomes a part of your everyday routine.
          <br />
          Because glowing on the outside starts with taking care of yourself on
          the inside.
        </p>
      </div>
    </BlogLayout>
  );
}
