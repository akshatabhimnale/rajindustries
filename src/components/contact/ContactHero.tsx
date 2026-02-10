import React from "react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
          alt="Wire harness factory"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        
        <span className="text-sm md:text-base tracking-widest text-pink-500 font-semibold mb-4">
          CONTACT US
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Get in Touch <br />
          With Our Team
        </h1>

        <p className="text-gray-200 text-lg max-w-2xl mb-8">
          We partner with OEMs and Tier suppliers to deliver reliable, 
          high-performance wire harness solutions. Let’s build your next project together.
        </p>

        <div className="flex gap-4">
          <a
            href="#contact-form"
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 
                       text-white font-semibold rounded-lg shadow-lg 
                       hover:shadow-xl transition-all duration-300"
          >
            Send Inquiry
          </a>

          <a
            href="#map"
            className="px-8 py-4 border border-white text-white font-semibold 
                       rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 
                      bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
};

export default ContactHero;
