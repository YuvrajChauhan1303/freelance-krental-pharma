import React from "react";
import ContactPage from "./ContactUs";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="w-full relative mb-8">
        <div className="relative w-full aspect-[3/1] sm:aspect-[4/1] md:aspect-[5/1]">
          <Image
            src="/images/contact/header.png"
            alt="Contact Us header"
            fill
            priority
            className="object-cover w-full h-auto"
            sizes="100vw"
          />
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default page;
