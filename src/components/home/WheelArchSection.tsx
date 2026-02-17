import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function WheelArchSection() {
  return (
    <section className="home-core-section home-ref-font">
      <div className="home-core-wrap">
        <div className="home-core-stage">
          <div className="home-core-image">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
              alt="Automotive wheel close-up"
            />
          </div>

          <Link to="/products" className="home-core-panel">
            <div className="max-w-[760px]">
              <span className="home-core-topline">Products</span>

              <h2 className="home-core-title">
                Our core competence lies in the wheel arch
              </h2>

              <p className="home-core-copy">
                Driver assistance systems and fully automated driving lead to more and
                more technology in the automobile - and thus also in the wheel arch: we
                develop suitable solutions.
              </p>

              <span className="home-core-cta">
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
