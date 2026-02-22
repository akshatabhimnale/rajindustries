import React from "react";

const ProductTabs: React.FC = () => {
  return (
    <section id="categories" className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stand-Alone Wire Harnesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built for precise routing, 100% fit, and dependable performance in demanding
            environments.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Where They’re Used
              </h3>

              <ul className="list-disc ml-5 text-gray-700 space-y-2 mb-6">
                <li>Motors and generators</li>
                <li>Doors, roofs, headliners, tailgates</li>
                <li>Seats and seat systems</li>
                <li>HVAC and air-handling units</li>
                <li>Shock absorbers and front-end modules</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What You Can Expect
              </h3>

              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Simultaneous Engineering Team (SET) collaboration</li>
                <li>3D routing and collision checks (DMU)</li>
                <li>Wiring diagrams and component drawings</li>
                <li>Functional models using 3D printing</li>
                <li>Short development times with cost optimization</li>
              </ul>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?auto=format&fit=crop&w=2000&q=80"
                  alt="Stand-alone wire harness assembly"
                  className="h-[360px] w-full object-cover"
                />
              </div>

              <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Technical Specifications
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>Insulation: silicone and high-quality materials</li>
                  <li>Conductors: copper and aluminum</li>
                  <li>Cross-section: 16–70 mm²</li>
                  <li>Terminations: crimp terminals, lugs, die-cast contacts</li>
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="#quote"
                  className="inline-flex px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
