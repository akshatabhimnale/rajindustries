import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT as string | undefined;

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!endpoint) {
      setStatus("error");
      setError("Form endpoint is not configured.");
      return;
    }

    setStatus("sending");

    try {
      const body = new URLSearchParams({
        fullName: form.fullName.trim(),
        companyName: form.companyName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        industry: form.industry,
        message: form.message.trim(),
        source: "Website Contact Form",
      });

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Accept: "application/json",
        },
        body,
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setStatus("success");
      setForm({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        industry: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError("Unable to send. Please try again or email us directly.");
    }
  };

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

          <form className="space-y-5" onSubmit={onSubmit}>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={form.fullName}
                onChange={onChange("fullName")}
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
                value={form.companyName}
                onChange={onChange("companyName")}
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
                value={form.email}
                onChange={onChange("email")}
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
                value={form.phone}
                onChange={onChange("phone")}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Industry *
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                value={form.industry}
                onChange={onChange("industry")}
                required
              >
                <option value="">Select Application</option>
                <option>Automotive</option>
                <option>Industrial</option>
                <option>HVAC</option>
                <option>Seats & Interior</option>
                <option>Generators</option>
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
                value={form.message}
                onChange={onChange("message")}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Inquiry"}
            </button>

            {status === "success" && (
              <p className="text-green-600 font-semibold">Thanks! We received your inquiry.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-semibold">{error}</p>
            )}
          </form>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg"
            alt="Wire harness assembly"
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
