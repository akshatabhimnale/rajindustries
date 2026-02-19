import React from "react";

interface GalleryItem {
  title: string;
  subtitle: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Automated Wiring Line",
    subtitle: "High-precision cutting, crimping, and routing",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg",
  },
  {
    title: "Quality Testing Lab",
    subtitle: "Continuity, hi-pot, pull force, and environmental tests",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Engineering_Labs_Equipment_%28KSC-20201006-PH-ILW01_0054%29.jpg",
  },
  {
    title: "Cable Assembly Station",
    subtitle: "Skilled craftsmanship for custom assemblies",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/US_Navy_100816-N-3327M-047_Aviation_Electrician%27s_Mate_Airman_Hugh_Ratsch%2C_from_Montegomery%2C_Ala.%2C_installs_the_electrical_harnesses.jpg",
  },
  {
    title: "Smart Factory Floor",
    subtitle: "Automation with real-time production monitoring",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/US_Navy_090622-N-6720T-015_Aviation_Machinist%27s_Mate_1st_Class_James_Gregorio%2C_assigned_to_the_jet_engine_shop_in_the_aviation_intermediate_maintenance_department%2C_installs_a_wiring_harness_on_an_F-A-18E_Super_Hornet_engine.jpg",
  },
  {
    title: "Robotics Integration",
    subtitle: "Automated handling and defect detection",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/US_Navy_040406-N-8770A-003_Aviation_Machinist%27s_Mate_2nd_Class_Wilfredo_Medina%2C_of_Carson%2C_Calif.%2C_works_on_an_engine_electrical_harness_for_a_P-3C_Orion_anti-submarine_and_reconnaissance_aircraft.jpg",
  },
  {
    title: "Production Monitoring",
    subtitle: "Traceability and process control",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Wiring_assemblies_at_a_junction_box_on_the_fire_wall_of_a_B-25_bomber.jpg",
  },
];

const FacilityGallery: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Facilities & Equipment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Automated lines, skilled assembly stations, and testing labs built
            for precision, speed, and repeatability.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl float-card card-shadow border border-black/5"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Brand accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary-color)]" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-80">{item.subtitle}</p>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-[var(--primary-color)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacilityGallery;
