
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BannerSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface BannerSliderProps {
  slides: BannerSlide[];
  autoPlay?: boolean;
  interval?: number;
}

const BannerSlider = ({
  slides,
  autoPlay = true,
  interval = 5000,
}: BannerSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);
  
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    if (!autoPlay) return;
    
    const slideInterval = setInterval(next, interval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, next]);
  
  if (!slides.length) return null;
  
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-[400px] sm:h-[500px] md:h-[600px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:p-12">
              <div className="max-w-xl text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3">
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className="text-lg md:text-xl opacity-90 mb-6">
                    {slide.subtitle}
                  </p>
                )}
                {slide.cta && (
                  <Button asChild className="bg-white text-black hover:bg-white/90">
                    <a href={slide.cta.link}>{slide.cta.text}</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-none h-10 w-10 rounded-full"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-none h-10 w-10 rounded-full"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
