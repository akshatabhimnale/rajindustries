import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function WheelArchSection() {
  return (
    <section className="bg-[#e7e7e7] px-4 py-14 sm:px-6 lg:py-20 [font-family:'Helvetica_Neue',Arial,Verdana,sans-serif]">
      <div className="mx-auto max-w-[1260px]">
        <div className="relative">
          <div className="h-[290px] w-full overflow-hidden sm:h-[380px] lg:h-[470px] lg:w-[700px]">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
              alt="Automotive wheel close-up"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <Link
            to="/products"
            className="relative mt-0 block bg-[#d90745] px-7 py-7 text-white no-underline sm:px-10 sm:py-9 lg:absolute lg:left-[470px] lg:top-[138px] lg:min-h-[375px] lg:w-[870px] lg:px-8 lg:py-7"
          >
            <div className="max-w-[760px]">
              <span className="mb-4 block text-[14px] font-semibold uppercase tracking-[0.16em] text-white">
                Products
              </span>

              <h2 className="mb-6 text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[48px]">
                Our core competence lies in the wheel arch
              </h2>

              <p className="mb-6 max-w-[760px] text-[16px] leading-[1.5] text-white/95">
                Driver assistance systems and fully automated driving lead to more and
                more technology in the automobile - and thus also in the wheel arch: we
                develop suitable solutions.
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
