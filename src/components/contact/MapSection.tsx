import React from "react";

const MapSection: React.FC = () => {
  return (
    <section id="map" className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Visit Our Facility
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Unit B4, Phase 1, Plot No. 32, D-2 Block MIDC, Chinchwad Nigdi Bhosari Road,
            Opposite HDFC Colony, Pimpri Chinchwad, Pune 411019.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[450px] rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">

          <iframe
            src="https://www.google.com/maps?q=Unit%20B4%2C%20Phase%201%2C%20Plot%20No%2032%2C%20D-2%20Block%20MIDC%2C%20Chinchwad%20Nigdi%20Bhosari%20Road%2C%20Opposite%20HDFC%20Colony%2C%20Pimpri%20Chinchwad%20Pune%20411019&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Pune Location Map"
          />

          {/* Floating Location Badge */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md 
                          px-5 py-3 rounded-lg shadow-md text-sm font-semibold text-gray-800">
            📍 Pimpri Chinchwad, Pune 411019
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
