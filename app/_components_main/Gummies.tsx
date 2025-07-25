import React from "react";

type GummiesProps = {
  image?: { src: string; alt?: string };
  title: string;
  className?: string;
};

const Gummies = ({ image, title, className }: GummiesProps) => {
  return (
    <div
      className={`w-[34vw] h-[79vh] rounded-lg flex flex-col items-center justify-between${
        className ? ` ${className}` : ""
      } `}
      style={{ overflow: "hidden" }}
    >
      <div className="w-[34vw] h-[15vh] bg-[#9C9898] flex items-center justify-center text-xl font-bold rounded-t-lg">
        {title}
      </div>
      <div className="w-[34vw] h-[53vh] bg-[#D9D9D9] flex items-center justify-center rounded-b-lg">
        {image && image.src ? (
          <img
            src={image.src}
            alt={image.alt || "Gummy image"}
            className="object-contain max-h-full max-w-full"
          />
        ) : (
          "IMAGE"
        )}
      </div>
      <div className="w-full flex justify-center mb-6">
        <button
          className="mt-4 px-8 py-2 bg-[#D9D9D9] border-2 active:scale-95 border-black text-black rounded-lg font-semibold transition hover:bg-gray-300"
          type="button"
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Gummies;
