import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type ProductItem = {
  title: string;
  description: string;
  image: string;
  to: string;
};

const products: ProductItem[] = [
  {
    title: "System expertise for injection molding components",
    description:
      "Whether directly molded onto the cable or as a separate part, we develop demanding system solutions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg",
    to: "/products",
  },
  {
    title: "Wiring harnesses",
    description:
      "Decades of experience in building production-ready cable harnesses.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/US_Navy_100816-N-3327M-047_Aviation_Electrician%27s_Mate_Airman_Hugh_Ratsch%2C_from_Montegomery%2C_Ala.%2C_installs_the_electrical_harnesses.jpg",
    to: "/products",
  },
  {
    title: "High-Voltage Vehicle EDS",
    description:
      "Our high-voltage vehicle electrical distribution systems connect vehicle-specific applications of electrified vehicles and consequently support the growing market for electric mobility.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/US_Navy_040406-N-8770A-003_Aviation_Machinist%27s_Mate_2nd_Class_Wilfredo_Medina%2C_of_Carson%2C_Calif.%2C_works_on_an_engine_electrical_harness_for_a_P-3C_Orion_anti-submarine_and_reconnaissance_aircraft.jpg",
    to: "/products",
  },
  {
    title: "Wheel arch and axle wiring",
    description:
      "Integrated system technology for wheel arch applications with high routing density and robust vehicle integration.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Wiring_assemblies_at_a_junction_box_on_the_fire_wall_of_a_B-25_bomber.jpg",
    to: "/products",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-8 text-[32px] font-bold leading-tight text-[#7f7f7f] md:mb-10 md:text-[40px]">
          More Raj Industries Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
          {products.map((product) => (
            <div key={product.title}>
              <Link
                to={product.to}
                className="group relative block h-full text-[#1a1a1a] no-underline transition-shadow duration-200 hover:shadow-[0_5px_15px_rgba(26,26,26,0.2)]"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[320px] w-full object-cover opacity-90 md:h-[360px]"
                  />
                </div>

                <div className="relative mt-[-44px] px-5">
                  <div className="relative bg-white p-5 transition-colors duration-200 group-hover:bg-[#d60f3c]">
                    <h3 className="mb-3 text-[22px] font-bold leading-[1.3] text-[#1a1a1a] transition-colors duration-200 group-hover:text-white md:text-[28px]">
                      <span className="mb-[10px] block text-[13px] uppercase tracking-[0.15em] text-[#adadad] transition-colors duration-200 group-hover:text-white">
                        Products
                      </span>
                      {product.title}
                    </h3>

                    <p className="pb-14 text-[16px] leading-[1.625] text-[#1a1a1a] transition-colors duration-200 group-hover:text-white">
                      {product.description}
                    </p>

                    <strong className="absolute bottom-5 left-5 flex items-center gap-3 pl-[34px] text-[13px] uppercase tracking-[0.15em] text-[#1a1a1a] transition-colors duration-200 group-hover:text-white">
                      <span className="absolute left-0 top-1/2 h-[2px] w-[21px] -translate-y-1/2 bg-[#d60f3c] transition-colors duration-200 group-hover:bg-white" />
                      Read more
                      <ArrowRight className="h-[14px] w-[14px]" />
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
