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
            End-to-End Wire Harness Engineering and Manufacturing
          </h1>

          {/* Brand accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-red-600 mb-6" />

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Raj Industries is a B2B manufacturing partner for OEMs and Tier suppliers,
            focused on stand-alone wire harnesses for pre-assembled components.
            We operate from Pimpri Chinchwad, Pune 411019, India and support programs
            that require precise fit, dependable routing, and high reliability.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our teams combine CAD-led engineering, rapid prototyping, automated and manual
            production, and in-process validation to deliver assemblies that meet
            ISO 9001 and IATF 16949 quality expectations.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Our Capabilities Include:
          </h3>

          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
            <li>• Design & engineering (CAD, DFM, material selection)</li>
            <li>• 3D routing and collision checks (DMU)</li>
            <li>• Prototype builds and design validation</li>
            <li>• Automated cutting, stripping, and crimping</li>
            <li>• 100% continuity and hi-pot testing</li>
            <li>• Documentation and technical support</li>
          </ul>
        </div>

        {/* RIGHT: FACTORY IMAGE */}
        <div className="relative rounded-2xl overflow-hidden float-card card-shadow border border-black/5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d2/US_Navy_100816-N-3327M-047_Aviation_Electrician%27s_Mate_Airman_Hugh_Ratsch%2C_from_Montegomery%2C_Ala.%2C_installs_the_electrical_harnesses.jpg"
            alt="Wire harness manufacturing and assembly line"
            className="w-full h-[480px] object-cover"
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Floating credibility badge */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md 
                          px-4 py-2 rounded-lg shadow-md text-sm font-semibold 
                          text-gray-800">
            ISO 9001 • IATF 16949 • RoHS • CE
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
