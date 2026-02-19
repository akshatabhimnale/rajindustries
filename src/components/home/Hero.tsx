import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  type: "video" | "image";
  media: string;
  topline: string;
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
}

const Hero: React.FC = () => {
  const slides = useMemo<Slide[]>(
    () => [
      {
        type: "image",
        media:
          "https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg",
        topline: "Product",
        heading: "Stand-Alone Wire Harnesses Built to Fit 100%",
        ctaLabel: "Find out more",
        ctaHref: "/products",
      },
      {
        type: "image",
        media:
          "https://upload.wikimedia.org/wikipedia/commons/d/d2/US_Navy_100816-N-3327M-047_Aviation_Electrician%27s_Mate_Airman_Hugh_Ratsch%2C_from_Montegomery%2C_Ala.%2C_installs_the_electrical_harnesses.jpg",
        topline: "About us",
        heading: "Engineering Collaboration From Concept to Series",
        ctaLabel: "Find out more",
        ctaHref: "/about",
      },
      {
        type: "image",
        media:
          "https://upload.wikimedia.org/wikipedia/commons/4/42/Wiring_assemblies_at_a_junction_box_on_the_fire_wall_of_a_B-25_bomber.jpg",
        topline: "Product",
        heading: "High-Current and High-Reliability Harness Builds",
        ctaLabel: "Find out more",
        ctaHref: "/products",
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section data-hero-section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden md:h-[86vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.heading}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: currentSlide === index ? 1 : 0 }}
        >
          {slide.type === "video" ? (
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src={slide.media} type="video/mp4" />
            </video>
          ) : (
            <img src={slide.media} alt={slide.heading} className="h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/20" />
        </div>
      ))}

      <div className="absolute top-0 h-[3px] w-full bg-[#d60f3c]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-end px-6 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <small className="mb-5 block text-[12px] font-bold uppercase tracking-[0.18em] text-[#d9d9d9] md:text-[13px]">
            {slides[currentSlide].topline}
          </small>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            {slides[currentSlide].heading}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-5 md:mt-10">
            {slides[currentSlide].external ? (
              <a
                href={slides[currentSlide].ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex border-b-2 border-[#d60f3c] pb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#d60f3c]"
              >
                {slides[currentSlide].ctaLabel}
              </a>
            ) : (
              <Link
                to={slides[currentSlide].ctaHref}
                className="inline-flex border-b-2 border-[#d60f3c] pb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#d60f3c]"
              >
                {slides[currentSlide].ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3 md:bottom-12 md:right-10">
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-[#d60f3c]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-[#d60f3c]"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 md:bottom-12">
        <div className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#d60f3c]" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
