import React from "react";
import Image from "next/image";
import Link from "next/link";

type BlogLayoutProps = {
  children: React.ReactNode;
  title: string;
  author: string;
  date: string;
  image?: { src: string; alt?: string };
};

const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  title,
  author,
  date,
  image,
}) => {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#018578] mb-2">
          {title}
        </h1>
        <p className="text-sm text-[#018578] mb-6">
          By <span className="font-semibold">{author}</span> | {date}
        </p>

        {/* Main Image */}
        <div className="mb-10">
          {image?.src ? (
            <div
              className="w-full  overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={image.src}
                alt={image.alt || title}
                width={1280}
                height={400}
                className="w-full h-full object-cover"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ) : (
            <div className="w-full h-[180px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              No image available
            </div>
          )}
        </div>

        {/* Blog Content */}
        <article className="prose prose-neutral lg:prose-lg max-w-none mb-12">
          {children}
        </article>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link
            href="/blogs"
            className="border-2 border-[#018578] text-[#018578] hover:bg-[#018578] hover:text-white transition px-6 py-2 rounded-md"
          >
            Back To Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
