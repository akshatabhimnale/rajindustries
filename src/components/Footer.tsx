import { FaLinkedin, FaFacebookF, FaYoutube, FaXing } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden [font-family:'helvetica-neue-lt-pro',Arial,Verdana,sans-serif]">
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%]">
        {/* LEFT: dark gray navigation area */}
        <div className="bg-[#666666] px-8 py-12 text-white sm:px-12 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-[1080px]">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              <div>
                <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white/95">Products</h4>
                <ul className="space-y-[11px] text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
                  <li>
                    <Link to="/products" className="hover:text-white">
                      Wheel arch and axle wiring
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="hover:text-white">
                      Injection-molded components
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="hover:text-white">
                      Stand alone wiring harnesses
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white/95">About Us</h4>
                <ul className="space-y-[11px] text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
                  <li>
                    <Link to="/about" className="hover:text-white">
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-white">
                      Suppliers
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-white">
                      Quality &amp; Certificates
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-white">
                      Compliance
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white/95">Careers</h4>
                <ul className="space-y-[11px] text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
                  <li>
                    <a href="#" className="hover:text-white">
                      People at WeWire
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers at WeWire
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Job Vacancies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:max-w-[66%]">
              <div>
                <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white/95">Newsroom</h4>
                <ul className="space-y-[11px] text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
                  <li>
                    <a href="#" className="hover:text-white">
                      WeWire News
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white/95">Follow Us</h4>
                <ul className="space-y-[11px] text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
                  <li>
                    <a href="#" className="flex items-center gap-5 hover:text-white" aria-label="LinkedIn">
                      <FaLinkedin className="text-[18px]" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-5 hover:text-white" aria-label="Facebook">
                      <FaFacebookF className="text-[18px]" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-5 hover:text-white" aria-label="YouTube">
                      <FaYoutube className="text-[18px]" />
                      <span>YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-5 hover:text-white" aria-label="Xing">
                      <FaXing className="text-[18px]" />
                      <span>Xing</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: red contact panel */}
        <div className="bg-[#d90745] px-8 py-12 text-white sm:px-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[430px] lg:max-w-[390px]">
            <img
              src="https://www.wewire-harness.com/_assets/2da2ad70d45e9fd2f98434f152f81244/Frontend/_Default/images/structuredDataLogo/logo-wewire.svg"
              alt="WeWire"
              className="h-[32px] w-auto [filter:brightness(0)_invert(1)]"
            />

            <div className="mt-9 flex items-start justify-between gap-3">
              <address className="not-italic text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/95">
                Coroplast Fritz Muller
                <br />
                GmbH &amp; Co. KG
                <br />
                Wittener StraBe 271
                <br />
                42279 Wuppertal
              </address>
            
            </div>

            <div className="mt-14">
              <h4 className="text-[16px] font-bold leading-[1.5625] tracking-[0.05em]">Do you have any questions?</h4>
              <p className="mt-6 text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/95">
                Please call or write to us if you have any questions about WeWire or the
                Coroplast Group or about our products and solutions.
              </p>

              <div className="mt-8 space-y-4 text-[13px] leading-[1.6923076923] tracking-[0.05em]">
                <a href="tel:+4920226810" className="inline-block border-b border-white pb-1 hover:text-black/90">
                  T +49 202 2681 0
                </a>
                <br />
                <a href="mailto:info@wewire-harness.com" className="inline-block border-b border-white pb-1 hover:text-black/90">
                  info@wewire-harness.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="bg-[#111317] px-8 py-6 text-white sm:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-14 gap-y-4 text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
          <a href="#" className="hover:text-white">
            Imprint
          </a>
          <a href="#" className="hover:text-white">
            Data Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-white">
            Cookie settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
