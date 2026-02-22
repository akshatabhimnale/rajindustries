import React, { useState } from "react";

const Careers: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
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
        email: form.email.trim(),
        phone: form.phone.trim(),
        role: form.role,
        message: form.message.trim(),
        source: "Website Careers Form",
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
        email: "",
        phone: "",
        role: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError("Unable to send. Please try again or email us directly.");
    }
  };

  return (
    <>
      <section
        data-hero-section
        className="relative h-[60vh] min-h-[420px] w-full overflow-hidden md:h-[70vh]"
      >
        <img
          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80"
          alt="Team collaborating in a modern office setting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        <div className="absolute top-0 h-[3px] w-full bg-[#d60f3c]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-end px-6 pb-16 md:pb-20">
          <div className="max-w-4xl">
            <small className="mb-5 block text-[12px] font-bold uppercase tracking-[0.18em] text-[#d9d9d9] md:text-[13px]">
              Careers
            </small>
            <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Build with Raj Industries
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
              Join a focused team delivering stand‑alone wire harnesses for demanding applications.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work Here
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We value precision, ownership, and practical problem‑solving. You’ll work
              closely with engineering and production teams to build reliable harnesses
              that fit 100%.
            </p>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Hands‑on engineering and manufacturing exposure</li>
              <li>Clear processes with room for improvement</li>
              <li>Stable, long‑term program work</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-black/5 float-card card-shadow p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Open Roles
            </h3>
            <p className="text-gray-600 mb-6">
              We’re hiring selectively. Send your resume and a brief note about your
              experience.
            </p>
            <div className="space-y-3 text-gray-900 font-semibold">
              <div>Wire Harness Technician</div>
              <div>Quality Inspector</div>
              <div>Production Supervisor</div>
            </div>
            <div className="mt-6">
              <a
                href="mailto:raj.industries14@yahoo.com?subject=Careers%20-%20Raj%20Industries"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg"
              >
                Apply via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Career Inquiry Form
            </h2>
            <p className="text-gray-600">
              Share your details and the role you’re interested in.
            </p>
          </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
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
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Role of Interest *
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                value={form.role}
                onChange={onChange("role")}
                required
              >
                <option value="">Select Role</option>
                <option>Wire Harness Technician</option>
                <option>Quality Inspector</option>
                <option>Production Supervisor</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your experience..."
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
              {status === "sending" ? "Sending..." : "Submit Application"}
            </button>

            {status === "success" && (
              <p className="text-green-600 font-semibold">Thanks! We received your details.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-semibold">{error}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Careers;
