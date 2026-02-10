import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactOptions = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: "sales@wewire.com",
    link: "mailto:sales@wewire.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    detail: "+91 9XXXXXXXXX",
    link: "tel:+919XXXXXXXXX",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Our Location",
    detail: "Wuppertal, Germany",
    link: "#map",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    detail: "Mon–Fri | 9:00 AM – 6:00 PM",
    link: "",
  },
];

const ContactOptions: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Choose how you’d like to reach us. We’re here to help with your wire-harness projects.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 
                         p-6 flex flex-col items-start gap-4 
                         hover:shadow-lg transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 flex items-center justify-center 
                              bg-gradient-to-br from-pink-600 to-red-600 
                              text-white rounded-lg 
                              group-hover:scale-105 transition-transform">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.detail}
              </p>

              {/* Small underline hover effect */}
              <span className="mt-2 text-sm font-semibold text-pink-600 
                               group-hover:underline">
                {item.link ? "Contact Now →" : "Available Hours"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
