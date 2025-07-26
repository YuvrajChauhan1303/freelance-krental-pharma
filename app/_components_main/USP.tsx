import React from "react";

const USP = () => {
  return (
    <section
      className="w-screen h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/images/gummies/gummies_bg.png')" }}
    >
      <div className="w-[60vw] h-[55vh] flex flex-col items-center justify-center bg-[#018578] mx-auto shadow-[0_1vh_3.5vh_rgba(0,0,0,0.08)]">
        <h1 className="text-[6vh] font-extrabold text-white mb-[2vh] text-center tracking-[0.02em] [text-shadow:0_0.3vh_1vh_rgba(1,133,120,0.08)] px-8 py-2 rounded-[2vh]">
          Zero Artificial, 100% Beneficial
        </h1>
        <h2 className="text-[4vh] font-medium text-white text-center tracking-[0.01em] max-w-[90vw]">
          Wellness that tastes as good as it feels
        </h2>
      </div>
    </section>
  );
};

export default USP;
