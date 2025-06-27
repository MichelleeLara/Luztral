import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const stepsData = [
  {
    img: "/Exploracion.svg",
    num: "01",
    title: (
      <>
        Exploración y <span className="text-[#8533FF]">Conexión</span> Profunda
      </>
    ),
    desc:
      "Iniciamos con una sesión de inmersión para entender la esencia de tu marca, tu misión y el impacto que deseas dejar en este plano digital.",
  },
  {
    img: "/Intuicion.svg",
    num: "02",
    title: (
      <>
        Intuición <span className="text-[#8533FF]">Creativa</span> y Visualización
      </>
    ),
    desc:
      "Aquí es donde canalizamos tu visión y creamos un diseño conceptual que refleje tu autenticidad y atraiga a quienes buscan lo que ofreces. Cada decisión de diseño nace desde la intuición, la inspiración y la información.",
  },
  {
    img: "/Manifestacion.svg",
    num: "03",
    title: (
      <>
        <span className="text-[#8533FF]">Manifestación</span> Digital
      </>
    ),
    desc:
      "Transformamos el diseño en una realidad funcional, asegurándonos de que cada página y cada interacción refleje la magia y energía de tu marca.",
  },
  {
    img: "/Lanzamiento.svg",
    num: "04",
    title: (
      <>
        <span className="text-[#8533FF]">Lanzamiento</span> y Expansión
      </>
    ),
    desc:
      "Con cada detalle en su lugar, lanzamos tu sitio y abrimos la puerta para que tu mensaje impacte el universo digital. Tu presencia está lista para resonar y expandirse.",
  },
];
export default function RitualTimeline() {
  const stepsRef = useRef([]);
  const timelineRef = useRef();
  const ballRef = useRef();

  useLayoutEffect(() => {
    function animateBallAndOpacity() {
      if (!timelineRef.current || !ballRef.current) return;
      const steps = stepsRef.current.filter(Boolean);
      if (steps.length === 0) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const viewportCenter = scrollY + window.innerHeight / 2;

      // Centros absolutos de cada step
      const stepCenters = steps.map((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top + scrollY + rect.height / 2;
      });

      // Límite superior (centro del primer step)
      const limitTop = stepCenters[0];
      // Límite inferior (centro del último step)
      const limitBottom = stepCenters[stepCenters.length - 1];

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top + scrollY;

      // Calcula el centro donde debe estar la bola
      let ballCenter =
        viewportCenter < limitTop
          ? limitTop
          : viewportCenter > limitBottom
          ? limitBottom
          : viewportCenter;

      let y = ballCenter - timelineTop - 14;

      gsap.set(ballRef.current, { y });

      // Opacity de los steps (con hotZone controlado)
      const hotZone = 210;
      steps.forEach((el, idx) => {
        const center = stepCenters[idx];
        const dist = Math.abs(center - viewportCenter);
        let opacity = 1 - Math.min(dist / hotZone, 0.7);
        opacity = Math.max(0.4, Math.min(opacity, 1));
        gsap.set(el, { opacity });
      });
    }

    // Ejecutar en scroll, resize, y tras montar el componente
    window.addEventListener("scroll", animateBallAndOpacity, { passive: true });
    window.addEventListener("resize", animateBallAndOpacity);

    // Esperar un ciclo de render para asegurar refs pobladas
    setTimeout(animateBallAndOpacity, 60);

    return () => {
      window.removeEventListener("scroll", animateBallAndOpacity);
      window.removeEventListener("resize", animateBallAndOpacity);
    };
  }, []);

  return (
    <section className="py-20 bg-[#090319] text-white relative overflow-x-hidden flex items-center justify-center">
      <div className="w-full max-w-screen-xl">
        <div className="flex flex-col items-center text-center gap-6 text-white  w-full">
          <h1 className="text-4xl max-w-[525px] text-balance lg:font-extralight">
            Nuestro ritual de manifestación
          </h1>
          <p className="font-thin max-w-[535px] text-balance">
            Tenemos más de 8 años de experiencia desarrollando proyectos
            digitales
          </p>
          <div
            className="flex gap-10 w-full justify-center mt-14 relative sm:gap-24"
            style={{ minHeight: 500 }}
          >
            <div
              className="flex flex-col items-center relative"
              ref={timelineRef}
              style={{ minHeight: 500, width: 50 }}
            >
              {/* Línea superior */}
              <div className="w-1.5 flex-1 bg-gradient-to-b from-[#9752ff] to-[#6500FA] rounded-full" />
              {/* Bola blanca única */}
              <div
                ref={ballRef}
                className="w-12 h-12 bg-white border-[14px] border-[#090319] rounded-full z-10 absolute -left-2 -translate-x-1/2 transition-transform"
                style={{ top: 0 }}
              />
              {/* Línea inferior */}
              <div className="w-1.5 flex-1 bg-gradient-to-b from-[#6500FA] to-[#9752ff] rounded-full" />
            </div>
            <div className="flex flex-col gap-24">
              {stepsData.map((step, i) => (
                <div
                  key={i}
                  ref={el => stepsRef.current[i] = el}
                  className="flex flex-col gap-14 items-center justify-center sm:flex-row sm:flex-row-reverse"
                  style={{
                    opacity: 1, // el default es visible, gsap lo va a cambiar
                    transition: 'opacity 0.18s cubic-bezier(.4,0,.2,1)'
                  }}
                >
                  <div className="min-w-[180px] max-w-[180px] flex items-center justify-center">
                    <img src={step.img} alt="" className="max-w-[180px]" />
                  </div>
                  <div className="flex text-start gap-2">
                    <span className="text-[#8533FF] text-lg">{step.num}</span>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-3xl mt-1 max-w-[525px] text-balance lg:font-extralight">
                        {step.title}
                      </h2>
                      <p className="font-thin max-w-[535px] text-balance">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
