import {
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaXing,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { label: "Automotive Harnesses", to: "/products" },
    { label: "Industrial Solutions", to: "/products" },
    { label: "Aerospace Wiring Systems", to: "/products" },
  ];

  const aboutLinks = [
    { label: "Who We Are", to: "/about" },
    { label: "Quality & Certificates", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const serviceLinks = [
    { label: "Design & Engineering", to: "/services" },
    { label: "Manufacturing", to: "/services" },
    { label: "Technical Support", to: "/services" },
  ];

  const legalLinks = ["Imprint", "Data Privacy", "Terms & Conditions", "Cookie Settings"];

  return (
    <footer className="w-full overflow-hidden bg-[#666666] text-white">
      <div className="mx-auto w-full max-w-[1600px] px-6">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
          <div className="order-2 py-10 lg:order-1 lg:col-span-8 lg:py-12">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em]">Products</h4>
                <ul className="space-y-3 text-[15px] leading-relaxed text-white/85">
                  {productLinks.map((item) => (
                    <li key={item.label}>
                      <Link className="transition-colors hover:text-[#d60f3c]" to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em]">About Us</h4>
                <ul className="space-y-3 text-[15px] leading-relaxed text-white/85">
                  {aboutLinks.map((item) => (
                    <li key={item.label}>
                      <Link className="transition-colors hover:text-[#d60f3c]" to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em]">Services</h4>
                <ul className="space-y-3 text-[15px] leading-relaxed text-white/85">
                  {serviceLinks.map((item) => (
                    <li key={item.label}>
                      <Link className="transition-colors hover:text-[#d60f3c]" to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 bg-[#d60f3c] px-6 py-10 lg:order-2 lg:col-span-4 lg:px-8 lg:py-12">
            <div className="space-y-8">
              <div>
                <Link to="/" className="inline-block">
                  <span className="text-[30px] font-light tracking-wide text-white">
                    <span className="font-semibold">Raj</span> Industries
                  </span>
                </Link>
                <address className="mt-5 not-italic text-[15px] leading-relaxed text-white/95">
                  Raj Industries
                  <br />
                  Industrial Area, Phase 2
                  <br />
                  Pune, Maharashtra, India
                </address>
              </div>

              <div>
                <h4 className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em]">
                  Do you have any questions?
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-white/95">
                  Please call or write to us for product, engineering, or manufacturing inquiries.
                </p>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="mb-2 block w-fit border-b border-white/80 pb-1 text-[15px] transition-colors hover:text-black"
                >
                  T +91 XXX XXX XXXX
                </a>
                <a
                  href="mailto:info@rajindustries.com"
                  className="block w-fit border-b border-white/80 pb-1 text-[15px] transition-colors hover:text-black"
                >
                  info@rajindustries.com
                </a>
              </div>

              <div>
                <h4 className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em]">Follow us</h4>
                <div className="flex items-center gap-4 text-base">
                  <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-black">
                    <FaLinkedin />
                  </a>
                  <a href="#" aria-label="Facebook" className="transition-colors hover:text-black">
                    <FaFacebookF />
                  </a>
                  <a href="#" aria-label="YouTube" className="transition-colors hover:text-black">
                    <FaYoutube />
                  </a>
                  <a href="#" aria-label="Xing" className="transition-colors hover:text-black">
                    <FaXing />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-6 py-5 text-sm text-gray-300 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item}>
                <a href="#" className="transition-colors hover:text-[#d60f3c]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs tracking-wide text-gray-400 md:text-sm">© 2026 Raj Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
