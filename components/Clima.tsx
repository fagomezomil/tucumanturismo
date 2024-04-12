import { FaSun } from "react-icons/fa";

// PARA SUMAR EL CLIMA
// https://www.npmjs.com/package/react-open-weather
// https://openweathermap.org/appid

export default function Clima() {
  // let date = new Date();

  return (
    <>
      <div className=" w-full text-12 font-medium h-8 bg-stone-300 text-gray-600 hidden md:block lg:block xl:block">
        <div className="max-w-7xl mx-auto flex justify-between barrita-clima align-bottom px-5">
          <div className="flex rounded-t-lg bg-white px-5 pt-1 pb-1">
            Hoy 14 de septiembre hay <FaSun className="text-amber-300" />{" "}
            <span className="temperture ml-2"> 28°</span>
          </div>
          <div className="flex">
            Comunicate y conocé Tucumán: +54-0381-4303644 | 4222199{" "}
            <span className="font-bold ml-2 uppercase">
              <a href="/contacto">Contacto</a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full text-12 font-medium bg-stone-300 text-gray-600 block sm:block md:hidden lg:hidden xl:hidden">
        <div className="max-w-7xl mx-auto flex justify-between barrita-clima align-bottom px-5">
          <div className="flex rounded-t-lg bg-white px-5 pt-1 pb-1">
            Hoy 14 de septiembre hay <FaSun className="text-amber-300" />{" "}
            <span className="temperture ml-2"> 28°</span>
          </div>
          <span className="font-bold ml-2 uppercase">
            <a href="/contacto">Contacto</a>
          </span>
        </div>
      </div>
    </>
  );
}
