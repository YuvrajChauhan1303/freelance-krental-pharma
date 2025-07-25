import { PosterCarousel } from "./_components_main/PosterCarousel";
import { Marquee } from "./_components_main/Marquee";
import Gummies from "./_components_main/Gummies";

export default function Home() {
  return (
    <div>
      <PosterCarousel className={"my-6"} images={[]} />
      <Marquee />
      <div className="flex gap-48 justify-center w-[100vw] mt-10 mb-8 overflow-hidden">
        <Gummies title="Kids Gummies" />
        <Gummies title="Adult Gummies" />
      </div>
    </div>
  );
}
