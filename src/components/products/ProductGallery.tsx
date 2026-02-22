import React from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1767961124255-0211254231a6?auto=format&fit=crop&w=2000&q=80",
    title: "High-Current Routing Assembly",
  },
  {
    src: "https://images.unsplash.com/photo-1561138804-bff5b4ec2965?auto=format&fit=crop&w=2000&q=80",
    title: "Pre-Assembly Harness Installation",
  },
  {
    src: "https://images.unsplash.com/photo-1603114595741-e60bf9486e04?auto=format&fit=crop&w=2000&q=80",
    title: "Control and Panel Harnessing",
  },
  {
    src: "https://images.unsplash.com/photo-1751846545116-838fe2e7e815?auto=format&fit=crop&w=2000&q=80",
    title: "Engine Harness Workstation",
  },
  {
    src: "https://images.unsplash.com/photo-1638707023303-20b161e73428?auto=format&fit=crop&w=2000&q=80",
    title: "Complex Multi-Branch Harness",
  },
  {
    src: "https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?auto=format&fit=crop&w=2000&q=80",
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
