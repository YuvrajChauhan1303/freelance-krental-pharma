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
        gap-8 
        border-2 
        border-[#018578] 
        rounded-lg 
        overflow-hidden 
        bg-white 
        shadow-md
        max-w-[90vw]
        min-w-[320px]
        w-full
        min-h-[24vh]
      "
    >
      <div
        className="
          flex-shrink-0 
          flex 
          items-center 
          justify-center
          w-[34vw]
          h-[46vh]
          min-w-[20vw]
          min-h-[40vh]
          max-w-[24vw]
          max-h-[60vh]
        "
      >
        <img
          src={image.src}
          alt={image.alt || "Blog image"}
          className="w-full h-full object-cover block"
          width={652}
          height={520}
        />
      </div>
      <div
        className="
          flex 
          flex-col 
          justify-between 
          flex-1
          pt-8
          pb-8
          pr-8
          pl-4
        "
      >
        <div>
          <h2 className="text-2xl font-bold text-[#018578] mb-2">{title}</h2>
          <div className="text-sm text-[#018578] mb-4 capitalize">
            By <span className="font-semibold">{author}</span> |{" "}
            <span>{date}</span>
          </div>
          <p className="text-gray-700 mb-6 text-xs leading-relaxed">
            {excerpt}
          </p>
        </div>
        <div>
          <Link
            href={readMoreLink}
            className="
              px-6 
              py-2 
              bg-[#018578] 
              text-white 
              rounded-md 
              font-semibold 
              transition 
              hover:bg-[#01695f] 
              flex 
              items-center 
              gap-2
              text-[1.05rem]
              min-w-[7vw]
              min-h-[4vh]
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
