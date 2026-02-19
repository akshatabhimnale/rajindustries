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
            Stand-Alone Harnesses That Fit 100%
          </h2>

          <div className="w-20 h-1 bg-[var(--primary-color)] mb-6" />

          <p className="text-gray-600 leading-relaxed text-lg">
            To deliver reliable, high-precision stand-alone wire harnesses that
            support demanding applications with safety and performance at the core.
          </p>
        </div>

        {/* VISION CARD */}
        <div className="relative p-10 rounded-2xl bg-white border border-black/5 float-card card-shadow">
          <span className="text-sm font-semibold tracking-widest text-[var(--primary-color)] mb-3 block">
            OUR VISION
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Partner for Complex Harness Programs
          </h2>

          <div className="w-20 h-1 bg-[var(--primary-color)] mb-6" />

          <p className="text-gray-600 leading-relaxed text-lg">
            To become a globally recognized leader in stand-alone harness
            engineering through automation, process innovation, and deep
            collaboration with customers.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
