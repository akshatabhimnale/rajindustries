import React, { useEffect, useState, useRef } from "react";

interface StatCard {
  label: string;
  value: number;
  suffix: string;
  image: string;
}

const stats: StatCard[] = [
  {
    label: "Years of Excellence",
    value: new Date().getFullYear() - 2001,
    suffix: "+",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Wiring_assemblies_at_a_junction_box_on_the_fire_wall_of_a_B-25_bomber.jpg",
  },
  {
    label: "Engineers",
    value: 120,
    suffix: "+",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/US_Navy_100622-N-6604E-023_viation_Structural_Mechanic_%28Equipment%29_2nd_Class_Stephen_Bessette_installs_a_wire_harness_on_a_replacement_canopy_for_an_F-A-18E_Super_Hornet.jpg",
  },
  {
    label: "Harness Types",
    value: 3,
    suffix: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/US_Navy_090622-N-6720T-015_Aviation_Machinist%27s_Mate_1st_Class_James_Gregorio%2C_assigned_to_the_jet_engine_shop_in_the_aviation_intermediate_maintenance_department%2C_installs_a_wiring_harness_on_an_F-A-18E_Super_Hornet_engine.jpg",
  },
  {
    label: "Test Methods",
    value: 4,
    suffix: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Engineering_Labs_Equipment_%28KSC-20201006-PH-ILW01_0054%29.jpg",
  },
];

const StatCounters: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Easing function for smooth animation
  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setCounts(stats.map((s) => Math.floor(s.value * easedProgress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((s) => s.value));
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Raj Industries in Numbers
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A snapshot of our engineering depth and the stand-alone harness programs
            we support.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 space-y-4">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl font-bold text-sm group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300 border border-cyan-500/30">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Counter Value */}
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-white tracking-tight">
                    {counts[i].toLocaleString()}
                    <span className="text-cyan-400">{stat.suffix}</span>
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>

                {/* Label */}
                <p className="text-gray-400 font-medium text-lg leading-snug">
                  {stat.label}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatCounters;
