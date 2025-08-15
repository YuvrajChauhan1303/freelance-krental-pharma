import React from "react";

const USP = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center py-10 sm:py-16"
      style={{ backgroundImage: "url('/images/gummies/gummies_bg.png')" }}
    >
      <div className="w-full max-w-3xl flex flex-col items-center justify-center bg-[#018578] mx-auto shadow-[0_8px_28px_rgba(0,0,0,0.08)] px-4 sm:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-center tracking-wide [text-shadow:0_2px_16px_rgba(1,133,120,0.08)] px-2 sm:px-8 py-2">
          Zero Artificial, 100% Beneficial
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white text-center tracking-wide max-w-2xl">
          Wellness that tastes as good as it feels
        </h2>
      </div>
    </section>
  );
};

export default USP;
