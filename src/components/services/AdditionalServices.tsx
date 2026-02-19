import React from "react";
import {
  Package,
  Truck,
  Wrench,
  Settings,
  ClipboardCheck,
  FileText,
  Layers,
  Headphones,
} from "lucide-react";

const additionalServices = [
  {
    icon: <Package className="w-6 h-6 text-pink-600" />,
    title: "Packaging",
    desc: "Custom packaging and kitting aligned to your assembly flow.",
  },
  {
    icon: <Truck className="w-6 h-6 text-pink-600" />,
    title: "Logistics",
    desc: "Supply-chain coordination and on-time delivery support.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-pink-600" />,
    title: "After-Sales Support",
    desc: "Dedicated technical assistance post-delivery.",
  },
  {
    icon: <Settings className="w-6 h-6 text-pink-600" />,
    title: "Custom Tooling",
    desc: "Jigs, fixtures, and custom tooling for repeatable builds.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-pink-600" />,
    title: "Training",
    desc: "Operator training, maintenance guidance, and handover.",
  },
  {
    icon: <Layers className="w-6 h-6 text-pink-600" />,
    title: "R&D Support",
    desc: "Collaboration on new product development and pilots.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-pink-600" />,
    title: "Repair Services",
    desc: "Diagnosis, rework, and refurbishment when needed.",
  },
  {
    icon: <FileText className="w-6 h-6 text-pink-600" />,
    title: "Documentation",
    desc: "Technical drawings, manuals, and compliance reports.",
  },
];

const AdditionalServicesGrid: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">
            VALUE ADDED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Additional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond manufacturing, we provide program support for smooth integration,
            delivery, and long-term performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 
                         hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 w-12 h-12 flex items-center justify-center 
                              bg-white rounded-xl shadow-sm">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>

              {/* Brand accent */}
              <div className="mt-5 w-10 h-1 bg-gradient-to-r from-pink-600 to-red-600" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdditionalServicesGrid;
