"use client";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Responsive Banner */}
      <div className="w-full relative mb-8">
        <Image
          src="/images/aboutus/header.png"
          alt="About Us header"
          width={1920}
          height={600}
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="max-w-6xl mx-auto mt-12 p-6 md:p-12">
        <section className="mb-10">
          <h2 className="text-[#2f6e62] text-2xl font-bold mb-4 tracking-wide uppercase text-center md:text-left">
            OUR VISION
          </h2>
          <p className="text-[16px] leading-relaxed text-[#252525] text-center md:text-left">
            Our vision is to become a global leader in the development and
            production of pharmaceutical gummies, offering consumers a fun,
            convenient, and effective way to improve their health and
            well-being. We aim to revolutionize the health supplement industry
            by combining cutting-edge technology, scientific research, and
            natural ingredients, ensuring our products are both high-quality and
            accessible to people worldwide.
            <br />
            We envision a future where our innovative gummies are an integral
            part of everyday health routines, helping individuals live
            healthier, happier lives.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[#2f6e62] text-2xl font-bold mb-4 tracking-wide uppercase text-center md:text-left">
            OUR MISSION
          </h2>
          <p className="text-[16px] leading-relaxed text-[#252525] text-center md:text-left">
            Our mission is to revolutionize health and wellness by providing
            high-quality, science-backed gummy supplements that make nutrition
            both effective and enjoyable. We are committed to formulating safe,
            delicious, and nutrient-rich gummies using the finest ingredients to
            support overall well-being for all age groups.
            <br />
            With a focus on innovation, purity, and transparency, we strive to
            enhance daily health routines through convenient and great-tasting
            supplements. Our dedication to sustainability and ethical sourcing
            ensures that our products contribute to a healthier planet while
            improving lives.
          </p>
        </section>

        <section>
          <h2 className="text-[#2f6e62] text-2xl font-bold mb-4 tracking-wide uppercase text-center md:text-left">
            OUR VALUES
          </h2>
          <p className="text-[16px] leading-relaxed text-[#252525] text-center md:text-left">
            At the heart of everything we do are the values that define who we
            are. We are committed to delivering quality in every aspect of our
            work, while being trustworthy and dependable in all our
            relationships. Our drive for innovation keeps us moving forward,
            constantly improving and evolving. We maintain integrity in every
            decision, standing by what&apos;s right. With a strong customer
            focus, we prioritize the needs and satisfaction of those we serve.
            Above all, we believe in delighting our customers—creating
            experiences that exceed expectations and leave a lasting positive
            impact.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
