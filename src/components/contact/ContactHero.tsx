import React from "react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative h-[68vh] min-h-[500px] w-full overflow-hidden md:h-[78vh]">
      <img
        src="https://www.wewire-harness.com/fileadmin/global_data/Unternehmen/Qualitaet/coroplast-group-wuppertal-laborsituation_01.jpg"
        alt="Wire harness factory"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      <div className="absolute top-0 h-[3px] w-full bg-[#d60f3c]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-end px-6 pb-16 md:pb-20">
        <div className="max-w-4xl">
          <small className="mb-5 block text-[12px] font-bold uppercase tracking-[0.18em] text-[#d9d9d9] md:text-[13px]">
            Contact
          </small>

          <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Connect with Our Engineering and Sales Team
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            Share your application requirements, sourcing timelines, or technical questions.
            Our team will respond with the relevant next steps.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact-form"
              className="inline-flex border-b-2 border-[#d60f3c] pb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#d60f3c]"
            >
              Send Inquiry
            </a>
            <a
              href="#map"
              className="inline-flex border-b border-white/60 pb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-[#d60f3c] hover:text-[#d60f3c]"
            >
              Visit Facility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
