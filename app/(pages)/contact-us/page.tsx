import React from "react";
import ContactPage from "./ContactUs";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="w-full h-[40vh] relative mb-8">
        <Image
          src="/images/contact/header.png"
          alt="Contact Us header"
          fill
          priority
          className="object-cover w-full h-full"
          sizes="100vw"
        />
      </div>
      <ContactPage />
    </div>
  );
};

export default page;
