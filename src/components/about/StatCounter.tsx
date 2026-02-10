import React, { useEffect, useState } from "react";

interface StatCard {
  label: string;
  value: number;
  suffix: string;
  image: string;
}

const stats: StatCard[] = [
  {
    label: "Years of Excellence",
    value: 23,
    suffix: "+",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80",
  },
  {
    label: "Global Clients",
    value: 50,
    suffix: "+",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=900&q=80",
  },
  {
    label: "Engineers",
    value: 120,
    suffix: "+",
    image:
      "https://images.unsplash.com/photo-1590608897129-441dbbdcf688?w=900&q=80",
  },
  {
    label: "Countries Served",
    value: 25,
    suffix: "+",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=900&q=80",
  },
];

const StatCounters: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);

      setCounts(
        stats.map((s) => Math.floor(s.value * progress))
      );

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Raj Industries in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over two decades of engineering excellence in wire-harness
            manufacturing for automotive, EV, and industrial sectors.
          </p>
        </div>

        {/* Image + Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Background image */}
              <img
                src={stat.image}
                alt={stat.label}
                className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Brand gradient strip */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 to-red-600" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-5xl font-bold">
                  {counts[i]}
                  <span className="text-pink-400">{stat.suffix}</span>
                </h3>
                <p className="text-sm tracking-widest uppercase mt-2 opacity-80">
                  {stat.label}
                </p>
              </div>

              {/* Hover glow accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-red-600/20 to-transparent" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatCounters;
