export default function Footer() {
  return (
    <section className='py-14 flex items-center justify-center'>
      <div className='text-white mx-5 flex flex-col items-center w-full justify-center gap-10 max-w-screen-xl'>
        <div className='flex flex-col items-center justify-center gap-6 text-center md:flex-row md:justify-between w-full'>
          <div className='flex flex-col items-center gap-6 md:flex-row '>
            <img
              src='/icon-company.svg'
              alt=''
              className="w-[8rem] relative z-50"
            />
            <div className='flex gap-5 items-center justify-center'>
              <img
                src='/Instagram.svg'
                alt=''
                className="w-[1.8rem]"
              />
              <img
                src='/Youtube.svg'
                alt=''
                className="w-[1.8rem]"
              />
            </div>
          </div>
          <p className='text-2xl'>Hola@luztral.com</p>

          <a
            href=''
            className='w-full px-5 py-2.5 rounded-4xl gradient-to-b  bg-gradient-to-b from-[#934bff] to-[#8941f7] md:w-fit '
          >
            Inciar un proyecto
          </a>
        </div>
        <div className='w-full h-[.1px] bg-[#934bff3d]'></div>
        <div className='flex  justify-center flex-col items-center  gap-5 text-center w-full lg:flex-row lg:justify-between'>
          <p>© 2024 luztral. Todos los derechos reservados</p>
          <div className='flex flex-col gap-5 lg:flex-row'>
            <p>Pólitica de privacidad</p>
            <p>Términos y condiciones</p>
            <p>Aviso de cookies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
