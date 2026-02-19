import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactOptions = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: "raj.industries14@yahoo.com",
    link: "mailto:raj.industries14@yahoo.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    detail: "+91 9762893857\n+91 9011021342",
    link: "tel:+919762893857",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Our Location",
    detail:
      "Unit B4, Phase 1, Plot No. 32, D-2 Block MIDC, Chinchwad Nigdi Bhosari Road, Opposite HDFC Colony, Pimpri Chinchwad, Pune 411019",
    link: "#map",
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

        {/* Single Contact Card */}
        <div className="bg-white rounded-2xl border border-black/5 float-card card-shadow px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactOptions.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-5"
              >
                <div className="w-12 h-12 flex items-center justify-center icon-box rounded-lg shrink-0">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    {item.title}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-900 font-semibold leading-relaxed hover:text-[var(--primary-color)] transition-colors whitespace-pre-line"
                    >
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-semibold leading-relaxed whitespace-pre-line">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
