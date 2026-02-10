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
      "High-quality harnesses designed for automotive applications, meeting international safety standards.",
    bullets: [
      "Engine compartment harnesses",
      "Interior dashboard harnesses",
      "Body and chassis harnesses",
      "Trailer and towing harnesses",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80",
  },
  {
    id: "industrial",
    label: "Industrial",
    title: "Industrial Solutions",
    description:
      "Robust harnesses for industrial machinery and automation systems.",
    bullets: [
      "Control panel wiring",
      "Machine tool harnesses",
      "Conveyor systems",
      "Robotics and automation",
    ],
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=900&q=80",
  },
  {
    id: "aerospace",
    label: "Aerospace",
    title: "Aerospace Wiring Systems",
    description:
      "Lightweight, high-precision harnesses for aircraft, drones, and avionics.",
    bullets: [
      "Avionics wiring harnesses",
      "Cabin electrical systems",
      "Power distribution cables",
      "Sensor and control wiring",
    ],
    image:
      "https://images.unsplash.com/photo-1590608897129-441dbbdcf688?w=900&q=80",
  },
  {
    id: "custom",
    label: "Custom",
    title: "Custom Assemblies",
    description:
      "Tailored solutions designed to meet your specific requirements.",
    bullets: [
      "Project consultation",
      "Prototype development",
      "Custom design services",
      "Small to large volume production",
    ],
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=900&q=80",
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
            Our Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of wire harness solutions across industries.
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
