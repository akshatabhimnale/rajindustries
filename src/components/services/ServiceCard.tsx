import React from "react";
import {
  PenTool,
  Zap,
  Factory,
  CheckCircle,
  Puzzle,
  Headphones
} from "lucide-react";

const services = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Design & Engineering",
    description:
      "CAD-driven harness architecture with DFM, material selection, and routing optimized for your application environment.",
    image:
      "https://images.unsplash.com/photo-1603114595741-e60bf9486e04?auto=format&fit=crop&w=2000&q=80",
    points: [
      "CAD design, schematics, and 3D routing",
      "Circuit analysis and load optimization",
      "Connector and material selection",
      "DFM consultation and cost-down"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Prototyping",
    description:
      "Rapid prototypes to validate fit, routing, and performance before series builds.",
    image:
      "https://images.unsplash.com/photo-1561138804-bff5b4ec2965?auto=format&fit=crop&w=2000&q=80",
    points: [
      "Quick-turn prototype builds",
      "Design verification testing",
      "Iterative design updates",
      "Cost optimization feedback"
    ]
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Manufacturing",
    description:
      "Automated and manual assembly lines for reliable, repeatable production.",
    image:
      "https://images.unsplash.com/photo-1751846545116-838fe2e7e815?auto=format&fit=crop&w=2000&q=80",
    points: [
      "High-volume production",
      "Automated cutting & stripping",
      "Precision crimping",
      "Over-molding & potting"
    ]
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Quality Testing",
    description:
      "In-process and final validation to ensure reliability and compliance.",
    image:
      "https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?auto=format&fit=crop&w=2000&q=80",
    points: [
      "100% continuity testing",
      "Hi-pot testing",
      "Pull force testing",
      "Environmental testing"
    ]
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "Custom Solutions",
    description:
      "Consultative builds for complex programs and application-specific needs.",
    image:
      "https://images.unsplash.com/photo-1767961124255-0211254231a6?auto=format&fit=crop&w=2000&q=80",
    points: [
      "Application-specific designs",
      "Complex multi-branch assemblies",
      "Special materials and shielding",
      "Custom packaging and kitting"
    ]
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Technical Support",
    description:
      "Lifecycle support for installation, troubleshooting, and documentation.",
    image:
      "https://images.unsplash.com/photo-1638707023303-20b161e73428?auto=format&fit=crop&w=2000&q=80",
    points: [
      "Installation guidance",
      "Troubleshooting support",
      "Maintenance assistance",
      "Training & documentation"
    ]
  }
];

const ServiceCards: React.FC = () => {
  return (
    <section id="core-services" className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            End-to-end wire harness services — from concept and prototyping to testing and support.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden 
                         hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[220px] object-cover transition-transform duration-500 
                             group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Icon badge */}
                <div className="absolute bottom-4 left-4 w-12 h-12 flex items-center 
                                justify-center bg-gradient-to-br from-pink-600 to-red-600 
                                text-white rounded-xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-5 inline-flex items-center gap-2 text-pink-600 font-semibold text-sm">
                  Learn more →
                </div> */}
              </div>

              {/* Brand accent line */}
              <div className="w-full h-1 bg-gradient-to-r from-pink-600 to-red-600" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceCards;
