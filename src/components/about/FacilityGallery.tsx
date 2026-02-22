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
      "https://images.unsplash.com/photo-1603114595741-e60bf9486e04?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Quality Testing Lab",
    subtitle: "Continuity, hi-pot, pull force, and environmental tests",
    image:
      "https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Cable Assembly Station",
    subtitle: "Skilled craftsmanship for custom assemblies",
    image:
      "https://images.unsplash.com/photo-1561138804-bff5b4ec2965?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Smart Factory Floor",
    subtitle: "Automation with real-time production monitoring",
    image:
      "https://images.unsplash.com/photo-1638707023303-20b161e73428?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Robotics Integration",
    subtitle: "Automated handling and defect detection",
    image:
      "https://images.unsplash.com/photo-1751846545116-838fe2e7e815?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Production Monitoring",
    subtitle: "Traceability and process control",
    image:
      "https://images.unsplash.com/photo-1767961124255-0211254231a6?auto=format&fit=crop&w=2000&q=80",
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
