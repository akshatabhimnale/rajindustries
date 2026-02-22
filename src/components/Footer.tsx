import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%]">
        {/* LEFT: dark gray navigation area */}
        <div className="bg-[#666666] px-8 py-12 text-white sm:px-12 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-[1080px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div>
              <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white/95">Product</h4>
              <ul className="space-y-[11px] text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
                <li>
                  <Link to="/products" className="hover:text-white">
                    Stand-Alone Wire Harnesses
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white">
                    Technical Specifications
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white/95">Company</h4>
              <ul className="space-y-[11px] text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Raj Industries
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Visit &amp; Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em] text-white/95">Navigation</h4>
              <ul className="space-y-[11px] text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/90">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white">
                    Product Details
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white">
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>

        {/* RIGHT: red contact panel */}
        <div className="bg-[#d90745] px-8 py-12 text-white sm:px-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[430px] lg:max-w-[390px]">
            <div className="text-[22px] font-semibold tracking-[0.08em] text-white">
              RAJ INDUSTRIES
            </div>

            <div className="mt-9 flex items-start justify-between gap-3">
              <address className="not-italic text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/95">
                Raj Industries
                <br />
                Unit B4, Phase 1, Plot No. 32, D-2 Block MIDC
                <br />
                Chinchwad Nigdi Bhosari Road, Opposite HDFC Colony
                <br />
                Pimpri Chinchwad, Pune 411019
              </address>
            
            </div>

            <div className="mt-14">
              <h4 className="text-[16px] font-bold leading-[1.5625] tracking-[0.05em]">Do you have any questions?</h4>
              <p className="mt-6 text-[13px] leading-[1.6923076923] tracking-[0.05em] text-white/95">
                Please write to us if you have any questions about Raj Industries
                or about our products and solutions.
              </p>

              <div className="mt-8 space-y-4 text-[13px] leading-[1.6923076923] tracking-[0.05em]">
                <a href="mailto:raj.industries14@yahoo.com" className="inline-block border-b border-white pb-1 hover:text-black/90">
                  raj.industries14@yahoo.com
                </a>
                <br />
                <a href="tel:+919762893857" className="inline-block border-b border-white pb-1 hover:text-black/90">
                  +91 9762893857
                </a>
                <br />
                <a href="tel:+919011021342" className="inline-block border-b border-white pb-1 hover:text-black/90">
                  +91 9011021342
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
