import React from "react";
import ContactPage from "./ContactUs";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="w-full h-[40vh] relative mb-8">
        <img
          src="/images/contact/header.png"
          alt="Contact Us header"
          className="object-cover w-full h-full"
        />
      </div>
      <ContactPage />
    </div>
  );
};

export default page;
