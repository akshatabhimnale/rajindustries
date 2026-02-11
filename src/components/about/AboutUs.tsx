import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT CONTENT */}
        <div>
          <span className="text-sm font-semibold tracking-widest text-pink-600 mb-3 block">
            ABOUT RAJ INDUSTRIES
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Excellence in Wire Harness Manufacturing Since 2001
          </h1>

          {/* Brand accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-red-600 mb-6" />

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Raj Industries has been a trusted partner for OEMs and Tier suppliers 
            for over two decades. We design, engineer, and manufacture 
            high-quality wire harness systems that power automotive, EV, 
            and industrial applications.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Built on precision, innovation, and long-term collaboration, 
            we combine advanced manufacturing, skilled engineering, and 
            rigorous quality processes to deliver reliable cabling solutions 
            that meet global standards.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Our Expertise Includes:
          </h3>

          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
            <li>• Automotive wiring harnesses</li>
            <li>• EV battery cabling systems</li>
            <li>• Industrial control cables</li>
            <li>• Custom engineered solutions</li>
          </ul>
        </div>

        {/* RIGHT: FACTORY IMAGE */}
        <div className="relative rounded-2xl overflow-hidden float-card card-shadow border border-black/5">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
            alt="Wire harness manufacturing facility"
            className="w-full h-[480px] object-cover"
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Floating credibility badge */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md 
                          px-4 py-2 rounded-lg shadow-md text-sm font-semibold 
                          text-gray-800">
            ISO Certified • Automotive Grade
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
