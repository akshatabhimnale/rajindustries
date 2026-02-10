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
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our office is located in Pune, Maharashtra. You can view the location on the map below.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[450px] rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17005851687!2d73.6981553041223!3d18.52454504095413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1770706255075!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Pune Location Map"
          />

          {/* Floating Location Badge */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md 
                          px-5 py-3 rounded-lg shadow-md text-sm font-semibold text-gray-800">
            📍 Pune, Maharashtra, India
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
