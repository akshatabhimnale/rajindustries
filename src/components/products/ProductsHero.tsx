import React from "react";

const ProductsHero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
          alt="Wire harness manufacturing facility"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          <span className="inline-block text-sm font-semibold tracking-widest text-pink-400 uppercase mb-4">
            Our Products
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Comprehensive Wire Harness Solutions  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
              {" "}
              for Every Industry
            </span>
          </h1>

          <p className="mt-6 text-gray-200 max-w-2xl text-lg">
            We design and manufacture high-precision wire harness systems for
            Automotive, Industrial, Aerospace, and Custom applications —
            built for reliability, safety, and scalability.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#categories"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Explore Categories →
            </a>

            <a
              href="/contact"
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all"
            >
              Request Quote
            </a>
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
    </section>
  );
};

export default ProductsHero;
