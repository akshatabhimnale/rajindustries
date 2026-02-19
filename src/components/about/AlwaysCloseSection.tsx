import type { FC } from "react";
import { 
  Users, 
  Clock, 
  ShieldCheck, 
  Cable 
} from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Consultative Start",
    desc: "Requirements alignment, DFM guidance, and material selection."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Rapid Prototyping",
    desc: "Quick-turn builds with iterative design validation."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Built-In Quality",
    desc: "Continuity, hi-pot, pull-force, and environmental testing."
  },
  {
    icon: <Cable className="w-6 h-6" />,
    title: "Scale to Series",
    desc: "Prototype to high-volume production with process control."
  }
];

const AlwaysCloseSection: FC = () => {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 px-6 overflow-hidden">

      {/* Soft brand accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 to-red-50/30" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block text-sm font-semibold tracking-widest text-pink-600 mb-4">
            CUSTOMER CENTRIC
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Always Aligned With Your Program
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We work as an extension of your engineering team—coordinating design,
            prototype validation, series production, and ongoing technical support
            to keep programs on schedule and within spec.
          </p>

          {/* Feature grid with icons */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div 
                key={i}
                className="group p-5 bg-white rounded-xl border border-gray-100 
                           float-card card-shadow hover:border-[var(--primary-color)]/40"
              >
                <div className="w-12 h-12 flex items-center justify-center 
                                icon-box rounded-lg mb-4 
                                group-hover:scale-105 transition-transform">
                  {f.icon}
                </div>

                <h3 className="font-semibold text-gray-800 mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative rounded-2xl overflow-hidden float-card card-shadow border border-black/5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg"
            alt="Industrial control wiring and assembly"
            className="w-full h-[420px] object-cover"
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md 
                          px-4 py-2 rounded-lg shadow-md text-sm font-semibold 
                          text-gray-800">
            OEM & Tier Supplier Focused
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlwaysCloseSection;
