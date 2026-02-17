import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section data-hero-section className="relative h-[68vh] min-h-[500px] w-full overflow-hidden md:h-[78vh]">
      <img
        src="https://www.wewire-harness.com/fileadmin/_processed_/4/a/csm_ww-entwicklungskompetenz_d3781af347.jpg"
        alt="About Raj Industries"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      <div className="absolute top-0 h-[3px] w-full bg-[#d60f3c]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-end px-6 pb-16 md:pb-20">
        <div className="max-w-4xl">
          <small className="mb-5 block text-[12px] font-bold uppercase tracking-[0.18em] text-[#d9d9d9] md:text-[13px]">
            About Us
          </small>

          <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Engineering Partnerships Built for Long-Term Programs
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            Raj Industries designs and manufactures wire harness systems for automotive,
            industrial, and custom applications with a process focused on quality and consistency.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#about-overview"
              className="inline-flex border-b-2 border-[#d60f3c] pb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#d60f3c]"
            >
              Our Profile
            </a>
            <a
              href="#certifications"
              className="inline-flex border-b border-white/60 pb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-[#d60f3c] hover:text-[#d60f3c]"
            >
              Certificates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
