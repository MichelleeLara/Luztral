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
      const target = `$${(newState
        ? anualPrices[index]
        : monthlyPrices[index]
      ).toLocaleString()}`;
      gsap
        .timeline()
        .to(el, {
          filter: 'blur(4px)',
          opacity: 0.2,
          duration: 0.2,
          ease: 'power1.in',
        })
        .add(() => {
          el.textContent = target;
        })
        .to(el, {
          filter: 'blur(0px)',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
    });

    setIsAnual(newState);
  };

  return (
    <>
      <section className='relative flex flex-col items-center justify-center overflow-hidden w-full text-white'>
        <div className='bg-[url(/bg_planes.svg)] bg-no-repeat bg-initial bg-right absolute inset-0 min-h-[540px] z-0'></div>
        <div className='shadow-hero absolute z-10 top-0 left-0 min-h-full w-full opacity-25'></div>
        <div className='relative z-20 w-full max-w-screen-xl'>
          <div className='py-20 text-center flex flex-col items-center justify-center gap-10 min-w-full md:flex-row lg:text-start'>
            <div className='flex flex-col gap-6 items-center justify-center lg:items-start w-full max-w-[525px]'>
              <h1 className='text-4xl mx-4 font- max-w-[575px] lg:text-[2.5rem] lg:font-extralight'>
                Portales digitales
              </h1>
              <p className='font-thin max-w-[535px] mx-4 text-pretty'>
                Tu conexión con el mundo online.
              </p>
              <a
                href=''
                className='px-[30px] mx-6 uppercase w-fit text-[11px] py-2 rounded-full flex items-center gap-2 shadow-[0px_4px_10px_#7C23FF80] button-gradient'
              >
                Ver planes
                <img
                  src='/Frame.svg'
                  alt=''
                />
              </a>
            </div>
            <div className='relative flex justify-center items-center pt-8 w-full h-full'>
              {/* aqui */}
              <div className='flex relative items-center justify-center max-w-[300px] z-20 '>
                <img
                  src='sphere_main.svg'
                  alt=''
                />
                <div className='w-[31rem] h-[30rem] rounded-full bg-[#090319] absolute  z-[-1] blur-[18px]'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-b from-[#100239] to-[#090319] py-20 flex flex-col items-center justify-center'>
        <div className='relative z-20 w-full flex-col gap-16 max-w-screen-xl  flex items-center justify-center px-6'>
          <div className='flex flex-col text-white gap-8 items-center justify-center  w-full '>
            <h1 className='text-4xl lg:text-[2.5rem] lg:font-extralight'>
              Planes
            </h1>
            <p className='text-center'>
              Recomendamos a nuestros clientes estos planes como punto de
              partida
            </p>
            <div className='flex items-center gap-3'>
              <p className='text-[#E1E2E480] text-[14px]'>Mensual</p>
              <div
                className='w-18 h-10 bg-[#7C23FF] rounded-full relative flex items-center justify-start px-1.5 cursor-pointer'
                onClick={handleToggle}
              >
                <div
                  ref={toggleBallRef}
                  className='w-8 rounded-full  h-8 bg-[#ffffff] absolute left-1 top-1'
                ></div>
              </div>
              <p className='text-[#E1E2E480] text-[14px]'>Anual</p>
            </div>
          </div>
          <div className='grid grid-cols-1 text-2xl text-white gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {[11500, 25000, 15000].map((price, index) => (
              <article
                key={index}
                className='flex flex-col items-start gap-6 border border-[#362d4b] bg-[#090319] p-6 lg:my-4 rounded-2xl shadow-[10px_-0px_110px_#7C23FF80]'
              >
                <img
                  src='holistico_plan.svg'
                  alt=''
                />
                <div className='flex flex-col gap-2'>
                  <h3 className='text-lg'>
                    {
                      [
                        'Portal Semilla',
                        'Portal Holístico',
                        'Portal Ceremonial',
                      ][index]
                    }
                  </h3>
                  <h4
                    ref={(el) => (pricesRef.current[index] = el)}
                    className='text-[16px] font-medium text-[#b7b3c4]'
                  >
                    ${price.toLocaleString()}
                  </h4>
                  <p className='text-[16px] text-[#b7b3c4]'>
                    {
                      [
                        'Para terapeútas, profesores y coaches',
                        'Centros holísticos y negocios',
                        'Eventos holísticos y retiros espirituales',
                      ][index]
                    }
                  </p>
                </div>
                <hr className='w-full h-1 text-[#b7b3c452]' />
                <div className='flex flex-col gap-4'>
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
                      'Soporte tecnico gratis dos meses.',
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
                      'Soporte tecnico gratis dos meses.',
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
                      'Soporte tecnico gratis dos meses.',
                    ],
                  ][index].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 text-sm ${
                        i === 8 ? 'text-[#C299FF]' : ''
                      }`}
                    >
                      <img
                        src='check.svg'
                        alt=''
                      />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 flex items-center justify-center'>
        <div className='text-white text-center mx-6 flex flex-col max-w-screen-xl items-center justify-center gap-16 md:flex-row md:items-start'>
          <h1 className='text-4xl lg:text-[2.5rem] lg:font-extralight md:w-[300px] md:text-start'>
            Incluimos en todos los paquetes
          </h1>
          <div className='cursor-pointer p-[1.4px] rounded-[20px] z-50 bg-gradient-to-b from-[#8432fed8] to-[#200051c7] flex items-center justify-center '>
            <div className='bg-[#0a0724] rounded-[20px] h-full w-full flex flex-col p-6 gap-4 items-start justify-start text-start md:grid md:grid-cols-2 md:gap-6 '>
              {/*  */}
              <div className='flex items-center justify-start gap-4'>
                <div className='p-2 border-2 w-fit border-[#302942] rounded-xl'>
                  <img
                    src='/Frame.svg'
                    alt=''
                  />
                </div>
                <p className='text-[14px]'>Hosting 1 año</p>
              </div>
              {/*  */}
              <div className='flex items-center justify-start gap-4'>
                <div className='p-2 border-2 w-fit border-[#302942] rounded-xl'>
                  <img
                    src='/Frame.svg'
                    alt=''
                  />
                </div>
                <p className='text-[14px]'>Seguridad nivel empresarial</p>
              </div>
              {/*  */}
              <div className='flex items-center justify-start gap-4'>
                <div className='p-2 border-2 w-fit border-[#302942] rounded-xl'>
                  <img
                    src='/Frame.svg'
                    alt=''
                  />
                </div>
                <p className='text-[14px]'>Dominio 1 año</p>
              </div>
              {/*  */}
              <div className='flex items-center justify-start gap-4'>
                <div className='p-2 border-2 w-fit border-[#302942] rounded-xl'>
                  <img
                    src='/Frame.svg'
                    alt=''
                  />
                </div>
                <p className='text-[14px]'>
                  Diseño personalizado de alta calidad
                </p>
              </div>
              {/*  */}
              <div className='flex items-center justify-start gap-4'>
                <div className='p-2 border-2 w-fit border-[#302942] rounded-xl'>
                  <img
                    src='/Frame.svg'
                    alt=''
                  />
                </div>
                <p className='text-[14px]'>Alto rendimiento +90%</p>
              </div>
              {/*  */}
              <div className='flex items-center justify-start gap-4'>
                <div className='p-2 border-2 w-fit border-[#302942] rounded-xl'>
                  <img
                    src='/Frame.svg'
                    alt=''
                  />
                </div>
                <p className='text-[14px]'>
                  Panel de editor + tutoriales de uso
                </p>
              </div>
              {/*  */}
              <div className='flex items-center justify-start gap-4'>
                <div className='p-2 border-2 w-fit border-[#302942] rounded-xl'>
                  <img
                    src='/Frame.svg'
                    alt=''
                  />
                </div>
                <p className='text-[14px]'>Certificado SSL</p>
              </div>
              {/*  */}
              <div className='flex items-center justify-start gap-4'>
                <div className='p-2 border-2 w-fit border-[#302942] rounded-xl'>
                  <img
                    src='/Frame.svg'
                    alt=''
                  />
                </div>
                <p className='text-[14px]'>Atención y resolución de dudas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 my-10 mb-24 bg-[url('/back_svg.png')] bg-cover bg-no-repeat bg-right">
        {/* Overlay degradado con 90% de opacidad */}
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,_#090319e5,_#1f0470e5)] z-0'></div>

        <div className='relative z-10 mx-5 text-white flex flex-col items-center justify-center gap-5'>
          <h2 className='text-4xl text-center max-w-[525px] text-balance lg:font-extralight'>
            ¿Sientes el llamado a elevar tu mensaje al plano digital?
          </h2>
          <p className='text-center text-sm max-w-[750px]'>
            Nos encantaría guiarte en este viaje. Estamos aquí para ayudarte a
            crear un espacio digital que despierte, inspire y expanda tu impacto
          </p>
          <button className='flex text-sm items-center gap-2 bg-[#8533FF] px-5 py-2.5 rounded-4xl'>
            Agendar llamada
            <span className="inline-block w-4 h-4 bg-[url('/calendar_clock.svg')] bg-contain bg-no-repeat"></span>
          </button>
        </div>
      </section>

      <section className='relative py-12 my-10 mb-24 overflow-hidden'>
      {/* Overlay degradado con 90% de opacidad */}
      <div className='absolute inset-0 z-0'></div>

      <div className='relative z-10 mx-5 text-white flex flex-col items-center justify-center gap-6'>
        <h2 className='text-4xl text-center max-w-[525px] text-balance lg:font-extralight'>
          Detrás de luztral
        </h2>
        <p className='text-center text-sm max-w-[750px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quaerat voluptate facere et, quo saepe perspiciatis corporis
          similique.
        </p>
        <div className='flex items-center gap-20 mt-10 flex-col md:flex-row'>
          <img
            src='/row.png'
            alt=''
          />
          <img
            src='/Mich.png'
            alt=''
          />
        </div>
        <div className='w-[30rem] h-40 blur-3xl bg-[#8533ff57] absolute'></div>
      </div>
    </section>
    </>
  );
}
