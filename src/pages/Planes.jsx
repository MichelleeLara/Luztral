'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

export default function Navbar() {
  const [isAnual, setIsAnual] = useState(false);
  const toggleBallRef = useRef(null);
  const pricesRef = useRef([]);

  const handleToggle = () => {
    const newState = !isAnual;

    gsap.to(toggleBallRef.current, {
      x: newState ? '100%' : '0%',
      duration: 0.3,
      ease: 'power2.inOut',
    });

    const monthlyPrices = [11500, 25000, 15000];
    const anualPrices = [115000, 250000, 150000];

    pricesRef.current.forEach((el, index) => {
      const target = `$${(newState ? anualPrices[index] : monthlyPrices[index]).toLocaleString()}`;
      gsap.timeline()
        .to(el, {
          filter: 'blur(4px)',
          opacity: 0.2,
          duration: 0.2,
          ease: 'power1.in'
        })
        .add(() => {
          el.textContent = target;
        })
        .to(el, {
          filter: 'blur(0px)',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
    });

    setIsAnual(newState);
  };

  return (
    <>
      <section className='relative flex flex-col items-center justify-center overflow-hidden w-full text-white'>
        <div className='bg-[url(/bg_planes.svg)] bg-no-repeat bg-contain bg-center absolute inset-0 min-h-[540px] z-0'></div>
        <div className='shadow-hero absolute z-10 top-0 left-0 min-h-full w-full opacity-25'></div>
        <div className='relative z-20 w-full max-w-screen-xl'>
          <div className='py-20 text-center flex flex-col items-center justify-center gap-10 min-w-full md:flex-row lg:text-start'>
            <div className='flex flex-col gap-6 items-center justify-center lg:items-start w-full max-w-[525px]'>
              <h1 className='text-4xl mx-4 font- max-w-[575px] lg:text-[2.5rem] lg:font-extralight'>Portales digitales</h1>
              <p className='font-thin max-w-[535px] mx-4 text-pretty'>Tu conexión con el mundo online.</p>
              <a href='' className='px-[30px] uppercase w-fit text-[11px] py-2 rounded-full flex items-center gap-2 shadow-[0px_4px_10px_#7C23FF80] button-gradient'>
                Ver planes
                <img src='/Frame.svg' alt='' />
              </a>
            </div>
            <div className='relative flex justify-center items-center pt-8 w-full h-full'>
              <div className='flex relative items-center justify-center max-w-[300px] z-20 '>
                <img src='sphere_main.svg' alt='' />
                <div className='w-[29rem] h-[30rem] rounded-full bg-[#090319] absolute z-[-1] blur-[18px]'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#100239] to-[#090319] py-20 flex flex-col items-center justify-center">
        <div className='relative z-20 w-full flex-col gap-16 max-w-screen-xl  flex items-center justify-center px-6'>
          <div className='flex flex-col text-white gap-8 items-center justify-center  w-full '>
            <h1 className='text-4xl lg:text-[2.5rem] lg:font-extralight'>Planes</h1>
            <p className='text-center'>Recomendamos a nuestros clientes estos planes como punto de partida</p>
            <div className="flex items-center gap-3">
              <p className="text-[#E1E2E480] text-[14px]">Mensual</p>
              <div className="w-18 h-10 bg-[#7C23FF] rounded-full relative flex items-center justify-start px-1.5 cursor-pointer" onClick={handleToggle}>
                <div ref={toggleBallRef} className="w-8 rounded-full  h-8 bg-[#ffffff] absolute left-1 top-1"></div>
              </div>
              <p className="text-[#E1E2E480] text-[14px]">Anual</p>
            </div>
          </div>
          <div className="grid grid-cols-1 text-2xl text-white gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[11500, 25000, 15000].map((price, index) => (
              <article key={index} className="flex flex-col items-start gap-6 border border-[#362d4b] bg-[#090319] p-6 lg:my-4 rounded-2xl shadow-[10px_-0px_110px_#7C23FF80]">
                <img src="holistico_plan.svg" alt="" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg">{['Portal Semilla', 'Portal Holístico', 'Portal Ceremonial'][index]}</h3>
                  <h4 ref={(el) => (pricesRef.current[index] = el)} className="text-[16px] font-medium text-[#b7b3c4]">
                    ${price.toLocaleString()}
                  </h4>
                  <p className="text-[16px] text-[#b7b3c4]">
                    {[
                      'Para terapeútas, profesores y coaches',
                      'Centros holísticos y negocios',
                      'Eventos holísticos y retiros espirituales',
                    ][index]}
                  </p>
                </div>
                <hr className="w-full h-1 text-[#b7b3c452]" />
                <div className="flex flex-col gap-4">
                  {[
                    [
                      'Una página (navegación vertical)',
                      'Hasta 5 secciones (misma página)',
                      'Muestra tus servicios y testimonios',
                      'Transmitir confianza y profesionalismo.',
                      'Integración con calendario para agendar sesiones',
                      'Un formulario de contacto',
                      'Chat de Whatsapp o Facebook',
                      'Diseño responsivo y optimizado para SEO básico.',
                      'Soporte tecnico gratis dos meses.'
                    ],
                    [
                      'Sitio web empresarial con múltiples páginas',
                      'Hasta 7 páginas con secciones',
                      'Catálogo de clases, cursos y servicios',
                      'Mayor alcance al digitalizar la presencia del centro',
                      'Dos formulario de contacto',
                      'Chat de Whatsapp o Facebook',
                      'Análisis de posicionamiento en Google Maps',
                      'Diseño responsivo y optimizado para SEO básico.',
                      'Soporte tecnico gratis dos meses.'
                    ],
                    [
                      'Sitio web de evento',
                      'Genera registros a tu evento.',
                      'Información clave del evento: fecha, lugar, programa y enfoque.',
                      'Información clave del evento: fecha, lugar, programa y enfoque.',
                      'Transmitir confianza y profesionalismo.',
                      'Un formulario de registro',
                      'Chat de Whatsapp o Facebook',
                      'Diseño responsivo y optimizado para SEO básico.',
                      'Soporte tecnico gratis dos meses.'
                    ]
                  ][index].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 text-sm ${i === 8 ? 'text-[#C299FF]' : ''}`}>
                      <img src="check.svg" alt="" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
