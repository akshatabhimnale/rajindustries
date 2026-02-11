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
    title: "Partnership Mindset",
    desc: "We work side-by-side with OEMs and Tier suppliers."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Response",
    desc: "Rapid prototyping and quick engineering changes."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Quality First",
    desc: "Certified processes and strict quality control."
  },
  {
    icon: <Cable className="w-6 h-6" />,
    title: "Custom Harnessing",
    desc: "Tailored solutions for automotive & industrial needs."
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
            Always Close to Our Customers
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We don’t just manufacture wire harnesses — we build long-term
            engineering partnerships. From concept to series production,
            our teams collaborate closely with you to deliver reliable,
            high-performance cabling solutions.
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
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
            alt="Wire harness assembly line"
            className="w-full h-[420px] object-cover"
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md 
                          px-4 py-2 rounded-lg shadow-md text-sm font-semibold 
                          text-gray-800">
            Trusted by 50+ Global Clients
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlwaysCloseSection;
