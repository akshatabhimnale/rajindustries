import React from "react";

interface GalleryItem {
  title: string;
  subtitle: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Automated Wiring Line",
    subtitle: "High precision robotics & assembly",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80",
  },
  {
    title: "Quality Testing Lab",
    subtitle: "Material & performance validation",
    image:
      "https://images.unsplash.com/photo-1590608897129-441dbbdcf688?w=900&q=80",
  },
  {
    title: "Cable Assembly Station",
    subtitle: "Skilled engineering workflow",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=900&q=80",
  },
  {
    title: "Smart Factory Floor",
    subtitle: "Industry 4.0 manufacturing",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=900&q=80",
  },
  {
    title: "Robotics Integration",
    subtitle: "Automated process control",
    image:
      "https://images.unsplash.com/photo-1581092332557-8a79b2cf7dd2?w=900&q=80",
  },
  {
    title: "Production Monitoring",
    subtitle: "Real-time quality tracking",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&q=80",
  },
];

const FacilityGallery: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our advanced manufacturing infrastructure, automation,
            and quality-driven production environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
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
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 to-red-600" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-80">{item.subtitle}</p>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacilityGallery;
