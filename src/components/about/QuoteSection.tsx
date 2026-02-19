import React from "react";

const QuoteSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f2f2f2] py-20 px-6">
      <div className="max-w-5xl mx-auto flex gap-8 bg-white rounded-2xl p-8 md:p-10 float-card card-shadow border border-black/5">

        {/* Big red quotation mark */}
        <div className="text-[#e31b3b] text-7xl leading-none">
          ”
        </div>

        {/* Quote content */}
        <div className="flex-1">
          <p className="text-[#2f2f2f] text-xl md:text-2xl leading-relaxed max-w-4xl">
            We are not only close to our customers, but we also work with them on
            a daily basis and consequently are able to act quickly, efficiently,
            and with expert implementation.
          </p>

          <p className="mt-6 text-gray-400 text-sm tracking-widest uppercase">
            Ali Iliköz | Head of Business Unit WeWire
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
