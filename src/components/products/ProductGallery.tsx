import React from "react";

const galleryImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/42/Wiring_assemblies_at_a_junction_box_on_the_fire_wall_of_a_B-25_bomber.jpg",
    title: "High-Current Routing Assembly",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d2/US_Navy_100816-N-3327M-047_Aviation_Electrician%27s_Mate_Airman_Hugh_Ratsch%2C_from_Montegomery%2C_Ala.%2C_installs_the_electrical_harnesses.jpg",
    title: "Pre-Assembly Harness Installation",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg",
    title: "Control and Panel Harnessing",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/65/US_Navy_040406-N-8770A-003_Aviation_Machinist%27s_Mate_2nd_Class_Wilfredo_Medina%2C_of_Carson%2C_Calif.%2C_works_on_an_engine_electrical_harness_for_a_P-3C_Orion_anti-submarine_and_reconnaissance_aircraft.jpg",
    title: "Engine Harness Workstation",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/US_Navy_090622-N-6720T-015_Aviation_Machinist%27s_Mate_1st_Class_James_Gregorio%2C_assigned_to_the_jet_engine_shop_in_the_aviation_intermediate_maintenance_department%2C_installs_a_wiring_harness_on_an_F-A-18E_Super_Hornet_engine.jpg",
    title: "Complex Multi-Branch Harness",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Engineering_Labs_Equipment_%28KSC-20201006-PH-ILW01_0054%29.jpg",
    title: "Testing and Validation Lab",
  },
];

const ProductGallery: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">
            Product Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Product Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A closer look at stand-alone harness builds, testing, and installation workflows.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md 
                         transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 
                           group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 
                              transition-opacity duration-400 group-hover:opacity-100" />

              {/* Gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-t 
                              from-pink-600/40 to-transparent opacity-0 
                              transition-opacity duration-400 group-hover:opacity-100" />

              {/* Floating title */}
              <div
                className="absolute bottom-6 left-6 right-6 transform translate-y-6 
                           opacity-0 transition-all duration-500 
                           group-hover:translate-y-0 group-hover:opacity-100"
              >
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-sm text-pink-600 font-semibold">
                    View details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
  

      </div>
    </section>
  );
};

export default ProductGallery;
