import { PosterCarousel } from "./_components_main/PosterCarousel";
import { Marquee } from "./_components_main/Marquee";
import Gummies from "./_components_main/Gummies";
import ContactUs from "./_components_main/ContactUs";
import USP from "./_components_main/USP";
import BlogSection from "./_components_main/BlogSection";
import Image from "next/image";

const posterImages = [
  { src: "/images/carouselPoster/poster1.png", alt: "Poster 1" },
  { src: "/images/carouselPoster/poster2.png", alt: "Poster 2" },
  { src: "/images/carouselPoster/poster3.png", alt: "Poster 3" },
  { src: "/images/carouselPoster/poster4.png", alt: "Poster 4" },
];

const gummiesImages = [
  { src: "/images/gummies/kids_gummies.png", alt: "Gummies 1" },
  { src: "/images/gummies/adult_gummies.png", alt: "Gummies 2" },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <PosterCarousel className={"mb-6"} images={posterImages} />
      <Marquee />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 lg:gap-48 w-full max-w-7xl mx-auto mt-10 mb-8 px-2 sm:px-4 overflow-hidden">
        <Gummies
          title="Kids Gummies"
          image={gummiesImages[0]}
          link="/kids-products"
        />
        <Gummies
          title="Adult Gummies"
          image={gummiesImages[1]}
          link="/adult-products"
        />
      </div>
      <USP />
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-12 w-full max-w-xs lg:max-w-4xl mx-auto">
          <div className="flex flex-col items-center w-full">
            <Image
              src="/images/usp/usp1.png"
              alt="Gelatin Free"
              width={128}
              height={128}
              className="w-32 h-32 object-contain mb-3"
            />
            <span className="text-lg font-semibold text-[#018578] text-center">
              Gelatin Free
            </span>
          </div>
          <div className="flex flex-col items-center w-full">
            <Image
              src="/images/usp/usp2.png"
              alt="Wheat Free"
              width={128}
              height={128}
              className="w-32 h-32 object-contain mb-3"
            />
            <span className="text-lg font-semibold text-[#018578] text-center">
              Wheat Free
            </span>
          </div>
          <div className="flex flex-col items-center w-full">
            <Image
              src="/images/usp/usp3.png"
              alt="Free of Artificial Colors"
              width={128}
              height={128}
              className="w-32 h-32 object-contain mb-3"
            />
            <span className="text-lg font-semibold text-[#018578] text-center">
              Free of Artificial Colors
            </span>
          </div>
          <div className="flex flex-col items-center w-full">
            <Image
              src="/images/usp/usp4.png"
              alt="Non GMO"
              width={128}
              height={128}
              className="w-32 h-32 object-contain mb-3"
            />
            <span className="text-lg font-semibold text-[#018578] text-center">
              Non GMO
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-12 px-4">
        <h1 className="text-3xl uppercase font-bold text-[#018578] mb-4 text-center tracking-tight">
          About Us
        </h1>
        <p className="max-w-5xl text-center text-lg md:text-xl text-gray-700 mb-6">
          Welcome to{" "}
          <span className="font-semibold text-[#018578]">Krenital Pharma</span>,
          where innovation meets wellness in every gummy we produce. We are a
          manufacturer of high-quality nutraceutical gummies, dedicated to
          providing our customers with delicious, effective, and scientifically
          formulated supplements. Our mission is to make wellness both enjoyable
          and accessible by transforming traditional supplements into
          convenient, tasty gummies that support a healthier lifestyle.
        </p>
        <button className="bg-[#018578] hover:bg-[#026e62] text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-200">
          Read More
        </button>
      </div>
      <div>
        <BlogSection />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 my-8">
        <img
          src="/images/landingImages/pic1.png"
          alt="Landing Pic 1"
          className="w-[80vw] h-[38vh] sm:w-[80vw] sm:h-[44vh] md:w-[40.5vw] md:h-[57vh] object-contain"
        />
        <img
          src="/images/landingImages/pic2.png"
          alt="Landing Pic 2"
          className="w-[80vw] h-[38vh] sm:w-[80vw] sm:h-[44vh] md:w-[40.5vw] md:h-[57vh] object-contain"
        />
        <img
          src="/images/landingImages/pic3.png"
          alt="Landing Pic 3"
          className="w-[80vw] h-[38vh] sm:w-[80vw] sm:h-[44vh] md:w-[40.5vw] md:h-[57vh] object-contain"
        />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
