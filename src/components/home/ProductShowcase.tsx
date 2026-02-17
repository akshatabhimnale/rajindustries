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
      "Regardless of whether directly molded onto the cable or as a falling part, WeWire develops demanding system solutions.",
    image:
      "https://www.wewire-harness.com/fileadmin/_processed_/b/5/csm_wewire-cn-injection-mouled-components-brown_dcc07d1080.jpg",
    to: "/products",
  },
  {
    title: "Wiring harnesses",
    description:
      "We have many years of experience in the production of cable harnesses.",
    image:
      "https://www.wewire-harness.com/fileadmin/_processed_/e/4/csm_wewire-cn-wire-harnesses-engine-wiring_143a9e96f0.jpg",
    to: "/products",
  },
  {
    title: "High-Voltage Vehicle EDS",
    description:
      "Our high-voltage vehicle electrical distribution systems connect vehicle-specific applications of electrified vehicles and consequently support the growing market for electric mobility.",
    image:
      "https://www.wewire-harness.com/fileadmin/_processed_/4/3/csm_hochvolt-leitungsaetze-eingebaut_e27e71a866.png",
    to: "/products",
  },
  {
    title: "Wheel arch and axle wiring",
    description:
      "Integrated system technology for wheel arch applications with high routing density and robust vehicle integration.",
    image:
      "https://www.wewire-harness.com/fileadmin/_processed_/a/f/csm_radhausverkabelung-wewire_911845d2a5.jpg",
    to: "/products",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 [font-family:'Helvetica_Neue',Arial,Verdana,sans-serif]">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-8 text-[32px] font-bold leading-tight text-[#7f7f7f] md:mb-10 md:text-[40px]">
          More WeWire Products
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
