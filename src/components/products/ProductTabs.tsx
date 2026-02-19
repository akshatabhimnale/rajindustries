import React, { useState } from "react";

type Tab = "automotive" | "industrial" | "aerospace" | "custom";

interface ProductCategory {
  id: Tab;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const productData: ProductCategory[] = [
  {
    id: "automotive",
    label: "Automotive",
    title: "Automotive Wire Harnesses",
    description:
      "Harness systems engineered for heat, vibration, tight packaging, and reliable routing from engine bay to cabin.",
    bullets: [
      "Engine compartment harnesses with high-heat routing",
      "Instrument panel and interior harness assemblies",
      "Body, chassis, and trailer/towing harnesses",
      "EV and hybrid power/logic routing support",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "industrial",
    label: "Industrial",
    title: "Industrial Solutions",
    description:
      "Rugged assemblies for machinery, automation, and control systems where uptime and serviceability matter.",
    bullets: [
      "Control panel and cabinet wiring layouts",
      "Machine tool and CNC harness assemblies",
      "Conveyor and material handling systems",
      "Robotics, sensors, and automation cells",
    ],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "aerospace",
    label: "Aerospace",
    title: "Aerospace Wiring Systems",
    description:
      "Lightweight, precise harnessing for avionics, cabins, and mission-critical power distribution.",
    bullets: [
      "Avionics harness assemblies and routing",
      "Cabin electrical and interior systems",
      "Power distribution and grounding paths",
      "Sensor, actuator, and control wiring",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "custom",
    label: "Custom",
    title: "Custom Assemblies",
    description:
      "Consultative builds for unique applications, from concept sketches to validated prototypes and production.",
    bullets: [
      "Requirements alignment and DFM guidance",
      "Prototype development and design iteration",
      "Special materials, tooling, and fixtures",
      "Small-batch through high-volume production",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80",
  },
];

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("automotive");

  const activeContent = productData.find(
    (p) => p.id === activeTab
  ) as ProductCategory;

  return (
    <section id="categories" className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Categories Built for Real-World Conditions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical, production-ready harness platforms shaped by manufacturing, testing,
            and field performance needs.
          </p>
        </div>

        {/* TABS NAVIGATION — Dynamic */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {productData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT — Dynamic */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {activeContent.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {activeContent.description}
              </p>

              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                {activeContent.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4">
                <a
                  href="#quote"
                  className="px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg"
                >
                  Request Quote
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="rounded-xl shadow-md"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
