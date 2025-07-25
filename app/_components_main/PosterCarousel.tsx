"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type PosterCarouselProps = {
  images: { src: string; alt?: string }[];
  className?: string;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function PosterCarousel({ images, className }: PosterCarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [api, setApi] = React.useState<any>(null);

  // For now, only 4 slides
  const slideCount = 4;

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    // Set initial index
    setSelectedIndex(api.selectedScrollSnap());
    // Cleanup
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-advance every 3 seconds
  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      const nextIndex = (api.selectedScrollSnap() + 1) % slideCount;
      api.scrollTo(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [api, slideCount]);

  return (
    <div className={cn("w-full", className)}>
      <Carousel setApi={setApi} className="relative">
        <CarouselContent>
          {[...Array(slideCount)].map((_, idx) => (
            <CarouselItem
              key={idx}
              className="flex justify-center items-center"
            >
              {/* 
              <img
                src={img.src}
                alt={img.alt || `Poster ${idx + 1}`}
                className="rounded-lg object-cover w-full h-64"
              />
              */}
              <div className="w-full" style={{ height: "80vh" }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg text-3xl font-bold text-gray-500">
                  POSTER
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Arrows removed */}
      </Carousel>
      <div className="flex justify-center mt-4 gap-2">
        {[...Array(slideCount)].map((_, idx) => (
          <button
            key={idx}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              selectedIndex === idx
                ? "bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            )}
            onClick={() => api && api.scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
/* eslint-enable @typescript-eslint/no-unused-vars */
/* eslint-enable @typescript-eslint/no-explicit-any */
