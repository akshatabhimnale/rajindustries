import React from "react";

const RequestQuoteCTA: React.FC = () => {
  return (
    <section className="relative bg-gray-900 py-16 md:py-24 px-6 overflow-hidden">
      
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-red-900/20" />

      <div className="relative max-w-7xl mx-auto text-center text-white">

        <span className="text-sm font-semibold tracking-widest text-pink-400 uppercase">
          GET IN TOUCH
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Need a Wire Harness Built to Your Specification?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
          From consultation and DFM guidance to prototyping, validation, and volume production,
          we help OEMs and Tier suppliers move confidently from concept to series builds.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 
                       text-white font-semibold rounded-lg shadow-lg 
                       hover:shadow-xl transition-all"
          >
            Request a Quote →
          </a>

          <a
            href="/services"
            className="px-8 py-4 border border-white text-white font-semibold 
                       rounded-lg hover:bg-white/10 transition-all"
          >
            Explore Our Services
          </a>
        </div>

      

      </div>
    </section>
  );
};

export default RequestQuoteCTA;
