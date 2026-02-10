import React from "react";
import {
  MessageSquare,
  PencilRuler,
  Beaker,
  CheckCircle,
  Factory,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <MessageSquare className="w-7 h-7 text-pink-600" />,
    title: "Consultation",
    desc: "We align with your technical requirements, application needs, and production goals."
  },
  {
    id: "02",
    icon: <PencilRuler className="w-7 h-7 text-pink-600" />,
    title: "Engineering Design",
    desc: "Our engineers develop CAD models, schematics, and DFM-optimized designs."
  },
  {
    id: "03",
    icon: <Beaker className="w-7 h-7 text-pink-600" />,
    title: "Prototype Development",
    desc: "Rapid prototypes are built and validated through rigorous testing."
  },
  {
    id: "04",
    icon: <CheckCircle className="w-7 h-7 text-pink-600" />,
    title: "Testing & Validation",
    desc: "Electrical, mechanical, and environmental tests ensure reliability."
  },
  {
    id: "05",
    icon: <Factory className="w-7 h-7 text-pink-600" />,
    title: "Series Production",
    desc: "Full-scale automated manufacturing with strict quality control."
  }
];

const ProcessFlow: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">
          OUR WORKFLOW
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
          End-to-End Process
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          From initial concept to mass production, we follow a structured,
          transparent, and quality-driven process.
        </p>

        {/* PROCESS CONTAINER */}
        <div className="relative flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-8">

          {steps.map((step, index) => (
            <div key={step.id} className="relative w-full sm:w-[320px]">

              {/* STEP NUMBER BADGE */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                {step.id}
              </div>

              {/* CARD */}
              <div className="bg-white h-full p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all">

                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full">
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* ARROW — desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-pink-400">
                  <div className="absolute right-0 -top-[5px] w-3 h-3 border-t-2 border-r-2 border-pink-400 rotate-45" />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
