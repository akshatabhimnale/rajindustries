import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section id="contact-form" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: CONTACT FORM */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Send Us Your Inquiry
          </h2>

          <p className="text-gray-600 mb-8">
            Tell us about your project and our engineering team will get back to you shortly.
          </p>

          <form className="space-y-5">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                placeholder="Your company"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone (Optional)
              </label>
              <input
                type="tel"
                placeholder="+91 9XXXXXXXXX"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Industry *
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none">
                <option value="">Select Industry</option>
                <option>Automotive</option>
                <option>EV</option>
                <option>Industrial</option>
                <option>Aerospace</option>
                <option>Medical</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                rows={4}
                placeholder="Describe your requirement..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Send Inquiry
            </button>
          </form>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
            alt="Wire harness production"
            className="w-full h-[480px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-md text-sm font-semibold text-gray-800">
            Engineering-Grade Solutions
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
