import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type AboutItem = {
  topline: string;
  title: string;
  description: string;
  image: string;
  to: string;
};

const aboutItems: AboutItem[] = [
  {
    topline: "About us",
    title: "Engineering-First Collaboration",
    description:
      "We work closely with OEMs and Tier suppliers to deliver stand-alone harnesses that fit 100%.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Engineering_Labs_Equipment_%28KSC-20201006-PH-ILW01_0054%29.jpg",
    to: "/about",
  },
  {
    topline: "Process",
    title: "From Routing to Validation",
    description:
      "3D routing, collision checks, prototypes, and validation before series builds.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg",
    to: "/about",
  },
  {
    topline: "Quality",
    title: "Built for Harsh Environments",
    description:
      "Heat-resistant conductors, sealed connections, and robust protection systems.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Wiring_assemblies_at_a_junction_box_on_the_fire_wall_of_a_B-25_bomber.jpg",
    to: "/products",
  },
];

export default function AboutTeaserList() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-8 text-[32px] font-bold leading-tight text-[#7f7f7f] md:mb-10 md:text-[40px]">
          About us
        </h2>

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-8">
          {aboutItems.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group relative block h-full text-[#1a1a1a] no-underline transition-shadow duration-200 hover:shadow-[0_5px_15px_rgba(26,26,26,0.2)]"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[320px] w-full object-cover opacity-90 md:h-[360px]"
                />
              </div>

              <div className="relative mt-[-44px] px-5">
                <div className="relative bg-white p-5 transition-colors duration-200 group-hover:bg-[#d60f3c]">
                  <h3 className="mb-3 text-[22px] font-bold leading-[1.3] text-[#1a1a1a] transition-colors duration-200 group-hover:text-white md:text-[28px]">
                    <span className="mb-[10px] block text-[13px] uppercase tracking-[0.15em] text-[#adadad] transition-colors duration-200 group-hover:text-white">
                      {item.topline}
                    </span>
                    {item.title}
                  </h3>

                  <p className="pb-14 text-[16px] leading-[1.625] text-[#1a1a1a] transition-colors duration-200 group-hover:text-white">
                    {item.description}
                  </p>

                  <strong className="absolute bottom-5 left-5 flex items-center gap-3 pl-[34px] text-[13px] uppercase tracking-[0.15em] text-[#1a1a1a] transition-colors duration-200 group-hover:text-white">
                    <span className="absolute left-0 top-1/2 h-[2px] w-[21px] -translate-y-1/2 bg-[#d60f3c] transition-colors duration-200 group-hover:bg-white" />
                    Read more
                    <ArrowRight className="h-[14px] w-[14px]" />
                  </strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
