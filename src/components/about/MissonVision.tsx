import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">

        {/* MISSION CARD */}
        <div className="relative p-10 rounded-2xl bg-white border border-black/5 float-card card-shadow">
          <span className="text-sm font-semibold tracking-widest text-[var(--primary-color)] mb-3 block">
            OUR MISSION
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powering the Future of Mobility
          </h2>

          <div className="w-20 h-1 bg-[var(--primary-color)] mb-6" />

          <p className="text-gray-600 leading-relaxed text-lg">
            To deliver reliable, innovative, and high-precision wire-harness 
            solutions that enable safer, smarter, and more sustainable mobility 
            systems for automotive, EV, and industrial applications.
          </p>
        </div>

        {/* VISION CARD */}
        <div className="relative p-10 rounded-2xl bg-white border border-black/5 float-card card-shadow">
          <span className="text-sm font-semibold tracking-widest text-[var(--primary-color)] mb-3 block">
            OUR VISION
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Leader in Wiring Systems
          </h2>

          <div className="w-20 h-1 bg-[var(--primary-color)] mb-6" />

          <p className="text-gray-600 leading-relaxed text-lg">
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
