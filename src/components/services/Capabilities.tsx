import React from "react";
import {
  Factory,
  Cpu,
  CheckCircle,
  Settings,
  BarChart4,
} from "lucide-react";

const capabilities = [
  {
    icon: <Factory className="w-5 h-5 text-pink-600" />,
    title: "Automated Assembly Lines",
    desc: "Automated cutting, stripping, crimping, and routing for repeatable quality.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-pink-600" />,
    title: "Robotics & Smart Automation",
    desc: "Robotics and smart tooling for high-precision assembly and monitoring.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-pink-600" />,
    title: "Advanced Quality Inspection",
    desc: "In-process validation with defect detection and traceability.",
  },
  {
    icon: <Settings className="w-5 h-5 text-pink-600" />,
    title: "Lean Manufacturing",
    desc: "Optimized workflows to reduce waste and support on-time delivery.",
  },
  {
    icon: <BarChart4 className="w-5 h-5 text-pink-600" />,
    title: "High-Volume Production",
    desc: "Prototype, pilot, and high-volume production at scale.",
  },
];

const Capabilities: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: Content */}
        <div>
          <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">
            Manufacturing Excellence
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Advanced Manufacturing Capabilities
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl">
            Our facilities combine automation with skilled craftsmanship to deliver
            high-precision harness assemblies—built for reliability, efficiency, and
            repeatable quality from pilot runs through series production.
          </p>

          {/* Capability List */}
          <div className="space-y-5">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl hover:shadow-md transition-all"
              >
                <div className="bg-pink-50 p-2 rounded-lg">{cap.icon}</div>

                <div>
                  <h4 className="font-semibold text-gray-900">{cap.title}</h4>
                  <p className="text-gray-600 text-sm">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#process"
            className="inline-block mt-8 px-7 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            View Our Process →
          </a>
        </div>

        {/* RIGHT: Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?auto=format&fit=crop&w=2000&q=80"
            alt="Electrical control panel wiring"
            className="w-full h-[450px] object-cover"
          />

          {/* Brand overlay accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-red-600/10" />

          {/* Small floating badge */}
          <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold text-gray-900">
            Industry 4.0 Ready
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
