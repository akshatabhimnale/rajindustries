import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function WheelArchSection() {
  return (
    <section className="bg-[#e7e7e7] px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-[1260px]">
        <div className="relative">
          <div className="h-[290px] w-full overflow-hidden sm:h-[380px] lg:h-[470px] lg:w-[700px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg"
              alt="Stand-alone wire harness assembly"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <Link
            to="/products"
            className="relative mt-0 block bg-[#d90745] px-7 py-7 text-white no-underline sm:px-10 sm:py-9 lg:absolute lg:left-[470px] lg:top-[138px] lg:min-h-[375px] lg:w-[870px] lg:px-8 lg:py-7"
          >
            <div className="max-w-[760px]">
              <span className="mb-4 block text-[14px] font-semibold uppercase tracking-[0.16em] text-white">
                Product
              </span>

              <h2 className="mb-6 text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[48px]">
                Stand-Alone Harnesses Built for Precise Fit
              </h2>

              <p className="mb-6 max-w-[760px] text-[16px] leading-[1.5] text-white/95">
                We develop highly customized harnesses for pre-assembled components,
                optimizing routing, protection, and installation in tight spaces.
              </p>

              <span className="inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.16em] text-white">
                <ArrowRight className="h-[20px] w-[20px]" />
                Read more
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
