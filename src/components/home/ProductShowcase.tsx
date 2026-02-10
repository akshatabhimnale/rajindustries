
export default function ProductShowcase() {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      title: 'System expertise for injection molding components',
      description:
        'Regardless of whether directly molded onto the cable or as a falling part, WeWire develops demanding system solutions.',
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      title: 'Wiring harnesses',
      description: 'We have many years of experience in the production of cable harnesses.',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
          More WeWire Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-lg shadow-lg
                transition-all duration-300 hover:shadow-2xl
                min-h-[420px] sm:min-h-[460px] md:min-h-[500px]
              "
            >
              <div className="relative h-full w-full flex flex-col">

                {/* IMAGE */}
                <div className="
                  relative w-full overflow-hidden
                  aspect-[16/10]
                ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="
                  relative bg-white p-5 flex flex-col justify-center flex-1
                ">
                  <div className="
                    absolute inset-0 
                    bg-gradient-to-br from-pink-600 to-red-600 
                    opacity-0 transition-opacity duration-300 
                    group-hover:opacity-100
                  " />

                  <div className="relative z-10">
                    <p className="
                      mb-1 text-[10px] sm:text-xs font-semibold 
                      uppercase tracking-wider text-gray-400 
                      group-hover:text-white/80
                    ">
                      Products
                    </p>

                    <h3 className="
                      mb-2 text-base sm:text-lg md:text-xl font-bold 
                      text-gray-900 group-hover:text-white line-clamp-2
                    ">
                      {product.title}
                    </h3>

                    <p className="
                      mb-3 text-xs sm:text-sm text-gray-600 
                      group-hover:text-white/90 line-clamp-2
                    ">
                      {product.description}
                    </p>

                    <button className="
                      flex items-center gap-2 text-xs sm:text-sm 
                      font-semibold text-gray-900 group-hover:text-white
                    ">
                      READ MORE
                      <svg
                        className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
