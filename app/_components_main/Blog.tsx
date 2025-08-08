import React from "react";
import Link from "next/link";

type BlogProps = {
  image: { src: string; alt?: string };
  title: string;
  author: string;
  date: string;
  excerpt: string;
  readMoreLink: string;
};

const Blog: React.FC<BlogProps> = ({
  image = { src: "/images/blog/placeholder.png", alt: "Blog image" },
  title,
  author,
  date,
  excerpt,
  readMoreLink,
}) => {
  return (
    <div
      className="
        flex 
        flex-row
        border-2 
        border-[#018578] 
        rounded-none
        overflow-hidden 
        bg-white 
        shadow-md
        w-[82vw]
        min-w-[60vw]
        max-w-[98vw]
        h-[24vw]
        min-h-[16vw]
        max-h-[32vw]
      "
      style={{
        borderRadius: "0px",
      }}
    >
      <div
        className="
          flex-shrink-0 
          flex 
          items-center 
          justify-center
          w-[25vw]
          h-full
          min-w-[22vw]
          max-w-[50vw]
          bg-gray-100
        "
        style={{
          borderRight: "0.15vw solid #018578",
        }}
      >
        <img
          src={image.src}
          alt={image.alt || "Blog image"}
          className="w-full h-full object-cover block"
          width={1}
          height={1}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>
      <div
        className="
          flex 
          flex-col 
          justify-between 
          flex-1
          py-[3vw]
          px-[4vw]
        "
      >
        <div>
          <h2 className="text-[1.6vw] font-bold text-[#018578] mb-[0.5vw] line-clamp-2">
            {title}
          </h2>
          <div className="text-[1vw] text-[#018578] mb-[1vw] capitalize">
            By <span className="font-semibold">{author}</span> |{" "}
            <span>{date}</span>
          </div>
          <p className="text-gray-700 mb-[2vw] text-[0.95vw] leading-relaxed line-clamp-4">
            {excerpt}
          </p>
        </div>
        <div>
          <Link
            href={readMoreLink}
            className="
              px-[2vw] 
              py-[0.8vw] 
              bg-[#018578] 
              text-white 
              rounded 
              font-semibold 
              transition 
              hover:bg-[#01695f] 
              flex 
              items-center 
              gap-2
              text-[1vw]
              min-w-[7vw]
              min-h-[2.5vw]
              w-fit
            "
          >
            Read More
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
