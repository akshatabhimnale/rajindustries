import React from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80",
    title: "Automotive Engine Harness",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    title: "EV Battery Wiring",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    title: "Industrial Control Harness",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e6d9e5?w=900&q=80",
    title: "Aerospace Cabling",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160904-5c0b6a3b3c01?w=900&q=80",
    title: "Custom Multi-Core Harness",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160545-ec65a5a0f5b7?w=900&q=80",
    title: "Precision Cable Assembly",
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
            Explore our precision-engineered wire harness solutions across
            automotive, industrial, aerospace, and custom applications.
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
