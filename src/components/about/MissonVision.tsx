import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="relative bg-[#0B1020] py-20 px-6 overflow-hidden">

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-transparent to-red-900/20 animate-pulse" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

        {/* MISSION CARD */}
        <div className="relative p-10 rounded-2xl backdrop-blur-md 
                        bg-white/5 border border-white/10 
                        hover:scale-[1.02] transition-all duration-500">
          
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                          from-pink-600/10 to-red-600/10 blur-xl opacity-40" />

          <h3 className="text-pink-400 text-sm tracking-widest mb-3">
            OUR MISSION
          </h3>

          <h2 className="text-3xl font-bold text-white mb-4">
            Powering the Future of Mobility
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            To deliver reliable, innovative, and high-precision wire-harness 
            solutions that enable safer, smarter, and more sustainable mobility 
            systems for automotive, EV, and industrial applications.
          </p>
        </div>

        {/* VISION CARD */}
        <div className="relative p-10 rounded-2xl backdrop-blur-md 
                        bg-white/5 border border-white/10 
                        hover:scale-[1.02] transition-all duration-500">
          
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                          from-red-600/10 to-pink-600/10 blur-xl opacity-40" />

          <h3 className="text-red-400 text-sm tracking-widest mb-3">
            OUR VISION
          </h3>

          <h2 className="text-3xl font-bold text-white mb-4">
            Global Leader in Wiring Systems
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            To become a globally recognized leader in advanced wire-harness 
            engineering by driving innovation in automation, e-mobility, and 
            next-generation industrial cabling technologies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
