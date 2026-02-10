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
    desc: "Fully automated production systems ensuring speed, accuracy, and consistency.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-pink-600" />,
    title: "Robotics & Smart Automation",
    desc: "Industry 4.0 robotics for precision cutting, crimping, and routing.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-pink-600" />,
    title: "Advanced Quality Inspection",
    desc: "Real-time monitoring and automated defect detection systems.",
  },
  {
    icon: <Settings className="w-5 h-5 text-pink-600" />,
    title: "Lean Manufacturing",
    desc: "Optimized workflows to reduce waste and improve efficiency.",
  },
  {
    icon: <BarChart4 className="w-5 h-5 text-pink-600" />,
    title: "High-Volume Production",
    desc: "Scalable manufacturing for OEM and Tier supplier demands.",
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
            Our state-of-the-art facilities combine cutting-edge automation with
            expert craftsmanship to deliver high-precision wire harness solutions
            at scale — ensuring reliability, efficiency, and quality for every project.
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
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
            alt="Wire harness manufacturing facility"
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
