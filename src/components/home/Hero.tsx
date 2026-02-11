import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  video: string;
  category: string;
  heading: string;
  cta: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const slides: Slide[] = [
    {
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      category: "CABLE ASSEMBLY",
      heading: "Reliable Wire Harnesses",
      cta: "Learn More",
    },
    {
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      category: "MANUFACTURING",
      heading: "Precision Engineering",
      cta: "Explore",
    },
    {
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      category: "INDUSTRY",
      heading: "Smart Cabling Solutions",
      cta: "Get Started",
    },
    {
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      category: "TECHNOLOGY",
      heading: "Future Ready Systems",
      cta: "Discover",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleDotClick = (index: number): void => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-black">

      {/* ===================== VIDEO BACKGROUND (CLEAN - NO COLOR) ===================== */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 1 : 0
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.9)' }}   // keeps video natural but readable
          >
            <source src={slide.video} type="video/mp4" />
          </video>

          {/* VERY SUBTLE DARK OVERLAY ONLY FOR TEXT READABILITY (NO COLOR) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>
      ))}

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">

        <div className="relative h-80 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-1000 ease-out"
              style={{
                transform: currentSlide === index
                  ? 'translateY(0) scale(1)'
                  : currentSlide > index
                    ? 'translateY(-100%) scale(0.9)'
                    : 'translateY(100%) scale(0.9)',
                opacity: currentSlide === index ? 1 : 0,
                pointerEvents: currentSlide === index ? 'auto' : 'none'
              }}
            >

              {/* CATEGORY */}
              <div
                className="text-sm md:text-base tracking-widest text-white/90 mb-4 font-bold flex items-center gap-3"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                <div className="w-12 h-px bg-white/60" />
                {slide.category}
              </div>

              {/* HEADING */}
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-8"
                style={{
                  fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                  letterSpacing: '0.02em',
                }}
              >
                {slide.heading}
              </h1>

              {/* CTA BUTTON */}
              <button
                className="group relative px-8 py-4 bg-white text-black font-bold text-lg overflow-hidden transition-all duration-300 hover:px-10"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                <div className="absolute inset-0 bg-black transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {slide.cta}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* SLIDE COUNTER + PROGRESS */}
        <div className="mt-12 flex items-center gap-6">
          <div className="text-white font-bold text-lg">
            <span className="text-4xl">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-400 text-2xl">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden max-w-xs">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* NAVIGATION ARROWS */}
      <div className="absolute bottom-6 right-4 md:bottom-12 md:right-16 z-20 flex gap-3 md:gap-4">
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/20"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </button>

        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/20"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white scale-125'
                  : 'bg-white/40'
              }`}
            />
          </button>
        ))}
      </div>

      {/* TOP DECORATIVE LINE (KEPT SIMPLE) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-10" />

    </div>
  );
};

export default Hero;
