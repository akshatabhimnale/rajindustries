const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function WheelArchSection() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -250% 0; }
          100% { background-position: 250% 0; }
        }

        .shimmer-effect {
          background: linear-gradient(45deg, transparent 25%, rgba(255,255,255,.2) 50%, transparent 75%, transparent 100%);
          background-size: 250% 250%;
          animation: shimmer 3s ease-in-out infinite;
        }

        .product-card {
          cursor: pointer;
        }

        .product-card .content-section {
          background-color: white;
          transition: background-color 0.5s ease;
        }

        .product-card:hover .content-section {
          background-color: #E31C5F;
        }

        .product-card .label-text {
          color: #6b7280;
          transition: color 0.5s ease;
        }

        .product-card:hover .label-text {
          color: rgba(255, 255, 255, 0.8);
        }

        .product-card .heading-text {
          color: #111827;
          transition: color 0.5s ease;
        }

        .product-card:hover .heading-text {
          color: white;
        }

        .product-card .description-text {
          color: #4b5563;
          transition: color 0.5s ease;
        }

        .product-card:hover .description-text {
          color: rgba(255, 255, 255, 0.9);
        }

        .product-card .cta-button {
          color: #dc2626;
          transition: all 0.5s ease;
        }

        .product-card:hover .cta-button {
          color: white;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-image {
          transition: transform 0.7s ease;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="product-card grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-2xl">
            {/* Image Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-amber-100/50 to-slate-100">
              <div className="shimmer-effect absolute inset-0" />
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
                alt="Premium automotive wheel"
                className="product-image w-full h-full object-cover min-h-[380px] sm:min-h-[450px] lg:min-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
            </div>

            {/* Content Section */}
            <div className="content-section flex items-center">
              <div className="p-12 lg:p-16 space-y-6">
                {/* Label */}
                <div className="label-text text-sm font-semibold tracking-[0.2em] uppercase">
                  PRODUCTS
                </div>

                {/* Main Heading */}
                <h2 className="heading-text text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Our core competence lies in the wheel arch
                </h2>

                {/* Description */}
                <p className="description-text text-base lg:text-lg leading-relaxed max-w-xl">
                  Driver assistance systems and fully automated driving lead to more and more 
                  technology in the automobile - and thus also in the wheel arch: we develop 
                  suitable solutions.
                </p>

                {/* CTA Button */}
                <button className="cta-button inline-flex items-center gap-3 text-base font-semibold mt-4">
                  READ MORE
                  <ArrowRight className="arrow-icon w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
