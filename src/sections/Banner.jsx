import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const services = [
  { title: "Diseño de marca", icon: "/icon-banner.svg" },
  { title: "Desarrollo web", icon: "/icon-banner.svg" },
  { title: "Estrategia digital", icon: "/icon-banner.svg" },
  // Agrega más servicios según necesites
];

export default function InfiniteBanner() {
  const containerRef = useRef(null);
  const [copyWidth, setCopyWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  // Velocidad en píxeles por segundo
  const speed = 50;

  // Calcula el ancho de una copia (la lista duplicada suma 2 copias)
  const updateWidth = () => {
    if (containerRef.current) {
      const oneCopyWidth = containerRef.current.scrollWidth / 2;
      setCopyWidth(oneCopyWidth);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Actualiza el desplazamiento en cada frame
  useAnimationFrame((time, delta) => {
    if (!copyWidth) return;
    setOffset((prev) => {
      let newOffset = prev - (speed * delta) / 1000;
      // Cuando se haya recorrido una copia completa, reinicia a 0
      if (Math.abs(newOffset) >= copyWidth) {
        newOffset = 0;
      }
      return newOffset;
    });
  });

  return (
    <section className="bg-[#100239] border border-t-[#4F00C4] border-b-[#4F00C4] overflow-hidden">
      <div className="py-2 mx-6">
        <motion.div ref={containerRef} className="flex" style={{ x: offset }}>
          {/* Primera copia */}
          <div className="flex">
            {services.map((service, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 text-white font-extralight flex items-center justify-center gap-5 whitespace-nowrap"
              >
                <p>{service.title}</p>
                <img onLoad={updateWidth} src={service.icon} alt={service.title} />
              </div>
            ))}
          </div>
          {/* Segunda copia */}
          <div className="flex">
            {services.map((service, i) => (
              <div
                key={`second-${i}`}
                className="flex-shrink-0 text-white font-extralight flex items-center justify-center gap-5 whitespace-nowrap"
              >
                <p>{service.title}</p>
                <img onLoad={updateWidth} src={service.icon} alt={service.title} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
