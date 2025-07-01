import Banner from '../sections/Banner';
import StepsComponent from '../sections/Steps';

export default function Home() {
  return (
    <>
    <img
      src='/sphere_main.svg'
      alt=''
      className='absolute z-10 top-[-9.5rem] w-[15rem] left-[2rem] md:top-[-14.5rem] md:left-[18.5rem] blur-[18px] md:w-[20rem] rotate-[-19deg]'
    />
    {/* hero */}
    <section className='relative flex flex-col items-center justify-center overflow-hidden w-full text-white'>
      <img
        src='/sphere_main.svg'
        alt=''
        className='absolute bottom-[-11rem] right-[-9rem] blur-[18px] w-[20rem] rotate-[19deg]'
      />
      {/* Capa de fondo con opacidad */}
      <div className='shadow-hero absolute z-10 top-0 left-0 min-h-full w-full opacity-25'></div>

      {/* Contenido que se muestra por encima del fondo */}
      <div className='relative z-10 w-full max-w-screen-xl'>
        <div className='py-20 text-center flex flex-col items-center justify-center gap-10  min-w-full md:flex-row lg:text-start'>
          <div className='flex flex-col gap-10 items-center justify-center  lg:items-start w-full max-w-[525px]'>
            <h1 className='text-4xl mx-4 font- max-w-[575px]  lg:text-[2.5rem] lg:font-extralight'>
              Liberamos de estrés a negocios holísticos y marcas conscientes.
            </h1>
            <p className='font-thin max-w-[535px] mx-4 text-pretty'>
              Encargándonos de su sitio web, automatizando su negocio digital
              y guiando el proceso.
            </p>
            <div className='flex gap-3 items-center mx-4 w-fit justify-center text-xs flex-col md:items-start'>
              <a
                href=''
                className='px-[30px] uppercase w-fit text-[11px] py-2 rounded-full flex items-center gap-2 shadow-[0px_4px_10px_#7C23FF80] button-gradient'
              >
                Abrir un portal digital
                <img
                  src='/Frame.svg'
                  alt=''
                />
              </a>
              <p className='text-[#c4c4c4] text-xs'>
                Es un espacio en el plano digital para conectar con tus
                clientes
              </p>
            </div>
          </div>

          <div className=' relative flex justify-center items-center pt-8 w-full h-full md:flex'>
            <div className='bg-[url(/circles.svg)] bg-no-repeat bg-cover min-w-[540px] min-h-[540px] absolute z-10'></div>
            {/* Elementos decorativos */}
            <div className='flex relative items-center justify-center max-w-[300px] z-20 '>
              <img
                src='sphere_main.svg'
                alt=''
                className=''
              />
              <img
                src='person.svg'
                alt=''
                className='absolute max-w-[220px] opacity-45'
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* banner */}
    <Banner />

    {/* benefits grid */}
    <section className='flex items-center justify-center'>
      <div className='text-white mx-6 py-20 pb-0 flex flex-col gap-3 relative w-full max-w-screen-xl px-6'>
        {/* shade */}
        <div className='absolute w-32 h-32 bg-[#7C23FF] blur-3xl top-[20rem] left-[3rem]'></div>
        {/* header */}
        <div className='rounded-2xl bg-[#150830] py-[40px] min-h-[180px] flex items-center justify-center  font-extralight text-[2rem] text-center'>
          <p>Manifiesta en digital</p>
        </div>
        {/* main */}
        <div className='flex gap-3 overflow-x-auto'>
          {/* item */}
          <div className='flex items-center gap-3  w-full px-12 justify-center bg-[#150830] rounded-2xl text-xs font-semibold min-h-[65px] '>
            <img
              src='/Therapist.svg'
              alt=''
              className='w-5'
            />
            <p className='w-fit'>Tearapeutas</p>
          </div>
          <div className='flex items-center gap-3  w-full px-12 justify-center bg-[#150830] rounded-2xl text-xs font-semibold min-h-[65px] '>
            <img
              src='/Therapist.svg'
              alt=''
              className='w-5'
            />
            <p className='w-fit'>Centros holísticos</p>
          </div>
          <div className='flex items-center gap-3  w-full px-12 justify-center bg-[#150830] rounded-2xl text-xs font-semibold min-h-[65px] '>
            <img
              src='/Therapist.svg'
              alt=''
              className='w-5'
            />
            <p className='w-fit'>Coaches</p>
          </div>
          <div className='flex items-center gap-3  w-full px-12 justify-center bg-[#150830] rounded-2xl text-xs font-semibold min-h-[65px] '>
            <img
              src='/Therapist.svg'
              alt=''
              className='w-5'
            />
            <p className='w-fit'>Eventos holísticos</p>
          </div>
          <div className='flex items-center gap-3  w-full px-12 justify-center bg-[#150830] rounded-2xl text-xs font-semibold min-h-[65px] '>
            <img
              src='/Therapist.svg'
              alt=''
              className='w-5'
            />
            <p className='w-fit'>Psícologos</p>
          </div>
        </div>
        {/* foot */}
        <div className='flex flex-col gap-3 md:flex-row'>
          <div className='w-full p-10 text-xs bg-[#150830] rounded-2xl md:w-1/2'>
            <p className='relative z-40'>
              Luztral surge con el propósito de guiar marcas en la
              manifestación de su portal digital para que puedan expandir su
              mensaje y conectar con su audiencia de forma genuina y poderosa
              en internet.
            </p>
          </div>

          <div className='w-full relative overflow-hidden flex items-center justify-center p-10 text-xs bg-[#100239] rounded-2xl md:w-1/2'>
            <a
              href=''
              className='px-[30px] uppercase w-fit text-[11px] py-2 rounded-full flex items-center gap-2 shadow-[0px_4px_10px_#7C23FF80] button-gradient'
            >
              Agendar llamada
              <img
                src='/Frame.svg'
                alt=''
              />
            </a>

            <div className='bg-[#7C23FF] absolute blur-3xl w-20 h-28'></div>
          </div>
        </div>
      </div>
    </section>

    {/* service */}
    <section className='pb-32'>
      <div className='flex flex-col gap-16 sm:flex-row sm:gap-0'>
        {/* service */}
        <div className='bg-service flex flex-col items-center justify-center gap-[14rem] relative w-full text-center overflow-hidden'>
          {/* background */}
          <div className=''></div>
          <div className='bg-[url(/background-service.svg)] bg-cover  absolute bg-no-repeat bg-top top-[-a5rem] w-full min-w-[410px] h-[480px] z-[-100]'></div>
          <div className='relative z-50 flex items-center justify-center top-[8rem]'>
            {/* Sombra ovalada en diagonal */}
            <div className='absolute w-[342px] h-[60px] blur-2xl bg-[#8533ff79] rounded-full z-20 rotate-[-49deg]' />
            {/* dark backgorund*/}
            <div className='w-[26rem] h-[22rem] blur-xl bg-[#090319] absolute z-10'></div>
            <img
              src='/gem.png'
              alt='Gem'
              className='w-44 relative z-30'
            />
          </div>
          <div className='text-white mt-20 flex flex-col w-full items-center justify-center text-start gap-4 relative z-50'>
            <h2 className='font-thin text-4xl text-center max-w-[250px] sm:text-start'>
              Marca y <span className='text-[#8533ff]'>esencia</span>
            </h2>
            <p className='text-sm font-extralight text-center max-w-[250px] sm:text-start'>
              Diseñamos marcas que conecten con tu propósito y vibren su
              propia esencia.{' '}
            </p>
          </div>
        </div>

        {/* service 2*/}
        <div className='bg-service flex flex-col items-center justify-center gap-[14rem] relative w-full text-center overflow-hidden'>
          {/* background */}
          <div className=''></div>
          <div className='bg-[url(/background-service.svg)] bg-cover  absolute bg-no-repeat bg-top top-[-a5rem] w-full min-w-[410px] h-[480px] z-[-100]'></div>
          <div className='relative z-50 flex items-center justify-center top-[8rem]'>
            {/* Sombra ovalada en diagonal */}
            <div className='absolute w-[342px] h-[60px] blur-2xl bg-[#8533ff79] rounded-full z-20 rotate-[-49deg]' />
            {/* dark backgorund*/}
            <div className='w-[26rem] h-[22rem] blur-xl bg-[#090319] absolute z-10'></div>
            <img
              src='/sphere_main.svg'
              alt='Gem'
              className='w-44 relative z-30'
            />
          </div>
          <div className='text-white mt-20 flex flex-col w-full items-center justify-center text-start gap-4 relative z-50'>
            <h2 className='font-thin text-4xl text-center max-w-[250px] sm:text-start'>
              Portales <span className='text-[#8533ff]'>digitales</span>
            </h2>
            <p className='text-sm font-extralight text-center max-w-[250px] sm:text-start'>
              Combinamos tecnología y diseño para crear sitios web que
              maximicen tus resultados.
            </p>
          </div>
        </div>

        {/* service 3*/}
        <div className='bg-service flex flex-col items-center justify-center gap-[14rem] relative w-full text-center overflow-hidden'>
          {/* background */}
          <div className=''></div>
          <div className='bg-[url(/background-service.svg)] bg-cover  absolute bg-no-repeat bg-top top-[-a5rem] w-full min-w-[410px] h-[480px] z-[-100]'></div>
          <div className='relative z-50 flex items-center justify-center top-[8rem]'>
            {/* Sombra ovalada en diagonal */}
            <div className='absolute w-[342px] h-[60px] blur-2xl bg-[#8533ff79] rounded-full z-20 rotate-[-49deg]' />
            {/* dark backgorund*/}
            <div className='w-[26rem] h-[22rem] blur-xl bg-[#090319] absolute z-10'></div>
            <img
              src='/cube.png'
              alt='Gem'
              className='w-44 relative z-30'
            />
          </div>
          <div className='text-white mt-20 flex flex-col w-full items-center justify-center text-start gap-4 relative z-50'>
            <h2 className='font-thin text-4xl text-center max-w-[250px] sm:text-start'>
              Automatiza <span className='text-[#8533ff]'>procesos</span>
            </h2>
            <p className='text-sm font-extralight text-center max-w-[250px] sm:text-start'>
              Potenciamos el negocio con automatizaciones y herramientas de
              inteligencia artificial.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Steps */}
    <StepsComponent />

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

    {/* Background */}
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



