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
      "Our expert engineering team develops high-precision, manufacturable wire harness designs tailored to your technical and business needs.",
    image:
      "https://images.unsplash.com/photo-1590608897129-441dbbdcf688?w=900&q=80",
    points: [
      "CAD design and modeling",
      "Circuit analysis and optimization",
      "Material selection",
      "DFM consultation"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Prototyping",
    description:
      "We provide rapid prototyping services to validate designs before full-scale production, minimizing risk and development time.",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=900&q=80",
    points: [
      "Quick turnaround prototypes",
      "Design verification testing",
      "Iterative improvements",
      "Cost optimization"
    ]
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Manufacturing",
    description:
      "Our state-of-the-art facilities combine automation and skilled craftsmanship to deliver high-quality wire harnesses at scale.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80",
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
      "Every harness undergoes rigorous testing to ensure safety, reliability, and compliance with industry standards.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&q=80",
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
      "We design tailor-made wire harness systems for complex and specialized applications across multiple industries.",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=900&q=80",
    points: [
      "Application-specific designs",
      "Complex assemblies",
      "Special materials",
      "Custom packaging"
    ]
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Technical Support",
    description:
      "We support our customers throughout the product lifecycle with expert guidance, troubleshooting, and training.",
    image:
      "https://images.unsplash.com/photo-1581092332557-8a79b2cf7dd2?w=900&q=80",
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
            End-to-end wire harness solutions — from design to lifecycle support.
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
