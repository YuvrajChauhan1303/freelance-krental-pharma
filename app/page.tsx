import { PosterCarousel } from "./_components_main/PosterCarousel";
import { Marquee } from "./_components_main/Marquee";
import Gummies from "./_components_main/Gummies";
import ContactUs from "./_components_main/ContactUs";
import USP from "./_components_main/USP";

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
    <div>
      <PosterCarousel className={"my-6"} images={posterImages} />
      <Marquee />
      <div className="flex gap-48 justify-center w-[100vw] mt-10 mb-8 overflow-hidden">
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
      <div className="flex justify-center items-center gap-6 my-8">
        <img
          src="/images/landingImages/pic1.png"
          alt="Landing Pic 1"
          className="w-[27vw] h-[38vh] object-contain"
        />
        <img
          src="/images/landingImages/pic2.png"
          alt="Landing Pic 2"
          className="w-[27vw] h-[38vh] object-contain"
        />
        <img
          src="/images/landingImages/pic3.png"
          alt="Landing Pic 3"
          className="w-[27vw] h-[38vh] object-contain"
        />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
