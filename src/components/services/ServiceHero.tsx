import React from "react";

const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
          alt="Wire harness manufacturing facility"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">

        <span className="text-sm md:text-base tracking-widest text-[var(--primary-color)] font-semibold mb-4">
          OUR SERVICES
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          End-to-End <br />
          Wire Harness Solutions
        </h1>

        <p className="text-gray-200 text-lg max-w-2xl mb-8">
          From concept to series production, we deliver high-precision wiring systems
          for automotive, EV, and industrial applications — engineered for reliability,
          performance, and scalability.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#core-services"
            className="px-8 py-4 bg-[var(--primary-color)] 
                       text-white font-semibold rounded-lg shadow-lg 
                       hover:shadow-xl transition-all duration-300"
          >
            Explore Services
          </a>

          <a
            href="#process"
            className="px-8 py-4 border border-white text-white font-semibold 
                       rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Our Process
          </a>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--primary-color)]" />
    </section>
  );
};

export default ServicesHero;
