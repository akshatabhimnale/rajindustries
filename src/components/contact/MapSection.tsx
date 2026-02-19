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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30241.923815137114!2d73.76536057431639!3d18.653201800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91a8929b9d5%3A0x9eab44357564958a!2sRaj%20Industries!5e0!3m2!1sen!2sus!4v1771505006540!5m2!1sen!2sus"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Raj Industries Map"
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
