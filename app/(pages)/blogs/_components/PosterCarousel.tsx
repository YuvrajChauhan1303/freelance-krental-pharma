// Import shadcn carousel components
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
  } from "@/components/ui/carousel";

const FullWidthPosterCarousel: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [api, setApi] = React.useState<CarouselApi | null>(null);
  
    const slideCount = 4;
  
    // Update selectedIndex on carousel change
    React.useEffect(() => {
      if (!api) return;
      const onSelect = () => {
        setSelectedIndex(api.selectedScrollSnap());
      };
      api.on("select", onSelect);
      setSelectedIndex(api.selectedScrollSnap());
      return () => {
        api.off("select", onSelect);
      };
    }, [api]);
  
    // Auto-advance with sliding
    React.useEffect(() => {
      if (!api || !slideCount) return;
      const interval = setInterval(() => {
        const nextIndex = (api.selectedScrollSnap() + 1) % slideCount;
        api.scrollTo(nextIndex);
      }, 3000);
      return () => clearInterval(interval);
    }, [api, slideCount]);
  
    return (
      <div className="w-full bg-[#f0fdfa] mb-10">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {[1, 2, 3, 4].map((num, idx) => (
              <CarouselItem
                key={num}
                className="flex justify-center items-center"
                style={{ width: "100%" }}
              >
                <div
                  className="flex items-center justify-center rounded-lg shadow-md border-2 border-[#018578] bg-white text-[#018578] text-5xl font-bold"
                  style={{
                    width: "100vw",
                    height: "50vh",
                    minHeight: 200,
                    letterSpacing: "0.1em",
                  }}
                >
                  POSTER
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {[...Array(slideCount)].map((_, idx) => (
              <button
                key={idx}
                className={`h-2 w-2 rounded-full transition-colors ${
                  selectedIndex === idx
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                onClick={() => api && api.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </Carousel>
      </div>


    );
  };

  export default FullWidthPosterCarousel;