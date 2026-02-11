import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1600&q=80"
          alt="About Raj Industries"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <span className="text-sm md:text-base tracking-widest text-[var(--primary-color)] font-semibold mb-4">
          ABOUT US
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Building Trust <br />
          Through Precision
        </h1>

        <p className="text-gray-200 text-lg max-w-2xl mb-8">
          Raj Industries delivers reliable wire harness and cable assembly
          solutions for automotive, industrial, and custom applications —
          engineered with quality, safety, and consistency at the core.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#about-overview"
            className="px-8 py-4 bg-[var(--primary-color)]                        text-white font-semibold rounded-lg shadow-lg 
                       hover:shadow-xl transition-all duration-300"
          >
            Our Story
          </a>

          <a
            href="#certifications"
            className="px-8 py-4 border border-white text-white font-semibold 
                       rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Certifications
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--primary-color)]" />
    </section>
  );
};

export default AboutHero;
