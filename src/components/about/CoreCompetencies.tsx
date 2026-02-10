import type { FC } from "react";
import {
  Cable,
  Factory,
  Workflow,
  Beaker,
  Settings,
  ShieldCheck,
} from "lucide-react";

const competencies = [
  {
    id: "01",
    icon: <Cable className="w-6 h-6" />,
    title: "Full-Service Wire Systems",
    desc: "End-to-end engineering, prototyping, and series production for automotive and mobility harnesses.",
  },
  {
    id: "02",
    icon: <Settings className="w-6 h-6" />,
    title: "System & Automation Expertise",
    desc: "Advanced automation for wheel-arch wiring, injection-molded parts, and special harness solutions.",
  },
  {
    id: "03",
    icon: <Workflow className="w-6 h-6" />,
    title: "Interdisciplinary Development",
    desc: "From concept to validation — including 3D routing, pilot runs, and series optimization.",
  },
  {
    id: "04",
    icon: <Beaker className="w-6 h-6" />,
    title: "Simulation & Testing",
    desc: "Dynamic analysis of moving harness systems using state-of-the-art simulation tools.",
  },
  {
    id: "05",
    icon: <Factory className="w-6 h-6" />,
    title: "Smart Manufacturing",
    desc: "Robotics, linked transfer lines, and digital process optimization for high precision.",
  },
  {
    id: "06",
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Quality & Validation Lab",
    desc: "Central technical center for material testing, fault analysis, and certification.",
  },
];

const CoreCompetenciesModern: FC = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-red mb-4">
          Our Core Competencies
        </h2>

        <p className="text-gray-400 max-w-3xl mb-12">
          As a specialist in advanced engineering and continuous improvement, 
          we are shaping the future of e-mobility, autonomous driving, and 
          in-vehicle connectivity through high-precision wire-harness systems.
        </p>

        {/* Card Grid — SAME STYLE AS YOUR IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#0F1525] border border-[#1A2238] rounded-xl p-6 
                         hover:border-pink-500/40 transition-all duration-300"
            >
              {/* Top-right number */}
              <span className="absolute top-4 right-4 text-gray-600 text-sm font-mono">
                {item.id}
              </span>

              <div className="flex items-start gap-4">
                {/* Icon Box */}
                <div className="w-10 h-10 flex items-center justify-center 
                                bg-[#162032] text-pink-500 rounded-lg">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Subtle glow dot like your reference */}
              <div className="absolute top-3 right-10 w-2 h-2 rounded-full 
                              bg-pink-500/60 blur-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetenciesModern;
