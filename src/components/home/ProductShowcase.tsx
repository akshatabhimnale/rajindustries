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
    <section className="home-list-section home-ref-font">
      <div className="home-list-wrap">
        <h2 className="home-list-title">More WeWire Products</h2>

        <div className="home-teaser-grid-2">
          {products.map((product) => (
            <div key={product.title}>
              <Link to={product.to} className="home-teaser-card">
                <div className="relative">
                  <img src={product.image} alt={product.title} className="home-teaser-image" />
                </div>

                <div className="home-teaser-text-wrap">
                  <div className="home-teaser-text-box">
                    <h3 className="home-teaser-headline">
                      <span className="home-teaser-topline">Products</span>
                      {product.title}
                    </h3>

                    <p className="home-teaser-copy">{product.description}</p>

                    <strong className="home-teaser-cta">
                      <span className="home-teaser-cta-line" />
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
