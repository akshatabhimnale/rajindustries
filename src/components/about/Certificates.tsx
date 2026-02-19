import React, { useEffect, useRef, useState } from "react";

interface Certificate {
  title: string;
  issuedBy: string;
  year: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "ISO 9001 Certification",
    issuedBy: "Quality Management Standard",
    year: "Current",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Panel_wiring_1.jpg",
  },
  {
    title: "IATF 16949 Certification",
    issuedBy: "Automotive Quality Standard",
    year: "Current",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/US_Navy_100816-N-3327M-047_Aviation_Electrician%27s_Mate_Airman_Hugh_Ratsch%2C_from_Montegomery%2C_Ala.%2C_installs_the_electrical_harnesses.jpg",
  },
  {
    title: "RoHS Compliance Certificate",
    issuedBy: "Environmental Compliance",
    year: "Current",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Wiring_assemblies_at_a_junction_box_on_the_fire_wall_of_a_B-25_bomber.jpg",
  },
  {
    title: "CE Certification",
    issuedBy: "European Conformity",
    year: "Current",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Engineering_Labs_Equipment_%28KSC-20201006-PH-ILW01_0054%29.jpg",
  },
];

const Certificates: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  // Smooth continuous animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let speed = 0.35;
    const targetSpeed = 0.35;

    const animate = () => {
      if (!isPaused) {
        speed += (targetSpeed - speed) * 0.05;
        position -= speed;

        if (Math.abs(position) >= track.scrollWidth / 2) {
          position = 0;
        }

        track.style.transform = `translateX(${position}px)`;

        const cardWidth = 320 + 24;
        const currentIndex =
          Math.abs(Math.round(position / cardWidth)) % certificates.length;
        setActiveDot(currentIndex);
      }

      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isPaused]);

  // Mobile swipe
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      setIsPaused(false);
    }
  };

  // Manual arrows
  const moveLeft = () => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform += " translateX(350px)";
  };

  const moveRight = () => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform += " translateX(-350px)";
  };

  // Close lightbox with ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Certifications & Awards
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We follow globally recognized standards for quality, safety, and
          environmental compliance in wire harness manufacturing.
        </p>
      </div>

      <div
        className="relative max-w-7xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-white/70 z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-white/70 z-10" />

        {/* Arrows */}
        <button
          onClick={moveLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 icon-box p-3 rounded-full z-20"
        >
          ◀
        </button>

        <button
          onClick={moveRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 icon-box p-3 rounded-full z-20"
        >
          ▶
        </button>

        {/* Moving track */}
        <div
          ref={trackRef}
          className="flex gap-6 items-stretch whitespace-nowrap"
        >
          {[...certificates, ...certificates].map((cert, i) => (
            <div
              key={i}
              className="min-w-[320px] bg-white rounded-xl border border-gray-200 
                         float-card card-shadow transition-all duration-500 ease-out overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              {/* IMAGE WITH ZOOM */}
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-[200px] object-cover 
                             transition-transform duration-700 ease-out
                             hover:scale-110"
                />
              </div>

              <div className="p-5 text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Issued by: {cert.issuedBy}
                </p>
                <span className="text-sm font-semibold text-[var(--primary-color)]">
                  Year: {cert.year}
                </span>
              </div>

              <div className="w-full h-1 bg-[var(--primary-color)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {certificates.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveDot(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeDot === i
                ? "bg-[var(--primary-color)] scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 bg-white p-2 rounded-full shadow-lg"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <img
            src={selectedImage}
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-xl"
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
