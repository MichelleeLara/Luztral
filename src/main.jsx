import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <section className="flex flex-col items-center justify-center w-full text-white bg-[url(/textura.svg)] ">
      <div className="mx-5 py-20 pt-44 text-center flex flex-col items-center justify-center gap-10 max-w-screen-xl md:flex-row">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-3xl font-semibold lg:font-extrabold">
            Liberamos de estrés a terapeutas, centros holísticos y marcas consientes.
          </h1>
          <p className="text-sm font-thin">
            Encargándonos de su sitio web y automatizando su negocio digital.
          </p>
          <div className="flex gap-3 items-center justify-center text-xs">
            <a href="" className="px-4 py-2 bg-[#8533ff] rounded-full flex items-center gap-2">
              Ver planes
              <img src="/public/Vector.svg" alt="" />
            </a>
            <a href="" className="px-4 py-2 bg-[#1d192e] rounded-full">
              Contactar
            </a>
          </div>
        </div>

        <div className="hidden relative bg-[url(/circles.svg)] bg-no-repeat min-w-[540px] min-h-[540px] max-w-[540px] max-h-[540px] md:flex w-fit">
          {/* Elements */}
          <img src="cube.png" alt="" className="absolute top-[200px] right-[28px]" />
          <img src="sphere.png" alt="" className="absolute top-44 right-[342px]" />
          <img src="gem.png" alt="" className="absolute top-44 right-[172px]" />
        </div>
      </div>
    </section>
  </StrictMode>,
)
