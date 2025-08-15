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
  image = { src: "/images/blog/blog1.png", alt: "Blog image" },
  title,
  author,
  date,
  excerpt,
  readMoreLink,
}) => {
  return (
    <div
      className="
        flex flex-col
        md:flex-row
        gap-4 md:gap-8
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
          w-full
          h-[36vw] min-h-[180px] max-h-[320px]
          md:w-[34vw] md:h-[46vh] md:min-w-[20vw] md:min-h-[40vh] md:max-w-[24vw] md:max-h-[60vh]
          flex-shrink-0 
          flex 
          items-center 
          justify-center
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
          pt-4 md:pt-8
          pb-4 md:pb-8
          pr-4 md:pr-8
          pl-4
        "
      >
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#018578] mb-2">
            {title}
          </h2>
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
