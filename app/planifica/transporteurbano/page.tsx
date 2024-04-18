"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { FaMapLocationDot, FaRegFilePdf } from "react-icons/fa6";

function Page() {
  return (
    <>
      <div className="max-w-7xl w-full mx-auto pt-28 mb-6 pl-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-11" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-11" />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-11" href="/tucuman">
                Planificá
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-11" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-11">
                Transporte Urbano
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-6 mb-9  max-w-7xl w-full mx-auto">
        <div className=" ">
          <p className="mx-6 text-2xl text-14 text-gray-800 mb-6">
            Transporte Urbano
          </p>
          <p className="mx-6 mb-8">
            Si querés conocer todos los atractivos que Tucumán tiene para
            ofrecerte y no contás con vehículo propio, o no querés conducir para
            no perderte todas las maravillas del paisaje, no te preocupes. Aquí
            te dejamos los recorridos de los micros a todos los puntos
            turísticos de nuestra provincia, para que puedas armar tu propio
            itinerario.
          </p>
          <div className="rounded-lg bg-white p-6 shadow-lg relative mx-6">
            <div className="text-xl font-semibold text-white bg-lime-700 px-4 py-2 w-64 rounded-lg absolute -top-2">
              Circuito Las Yungas
            </div>
            <div className="grid grid-cols-5 mt-8 ">
              <div className="inline-grid  grid-cols-1 gap-1 h-fit">
                <button className="focus:text-lime-700 focus:border-lime-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Yerba Buena
                </button>
                <button className="focus:text-lime-700 focus:border-lime-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  San Javier
                </button>
                <button className="focus:text-lime-700 focus:border-lime-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Raco y El Siambón
                </button>
                <button className=" focus:text-lime-700 focus:border-lime-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  El Cadillal
                </button>
                <button className="focus:text-lime-700 focus:border-lime-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Tafí Viejo
                </button>
                <button className="focus:text-lime-700 focus:border-lime-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Villa Nougués
                </button>
              </div>
              <div className="col-span-4">
                <div className="mt-2">
                  <p className="uppercase text-md font-semibold">Encontrá la linea que se adapte a tu destino</p>
                  <button className="bg-gray-400 hover:bg-gray-600 rounded-md text-md font-semibold px-3 py-2 mt-3 mx-1 text-white">
                    Línea 100
                  </button>
                  <button className="bg-gray-400 hover:bg-gray-600 rounded-md text-md font-semibold px-3 py-2 mt-3 mx-1 text-white">
                    Línea 102
                  </button>
                  <button className="bg-gray-400 hover:bg-gray-600 rounded-md text-md font-semibold px-3 py-2 mt-3 mx-1 text-white">
                    Línea 118
                  </button>
                  <div className="mt-4">
                    <iframe className="w-full" width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-65.27638435363771%2C-26.862208663146948%2C-65.13304710388185%2C-26.7932754116777&amp;layer=mapnik" ></iframe>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente omnis harum non facere similique delectus, odio ea illum quis debitis totam id iusto dolorum, cum, corporis velit dolor ullam. Dicta in dignissimos exercitationem ut cupiditate cum doloribus, nihil alias illum ab molestias aliquid mollitia, explicabo voluptatibus possimus nisi. Soluta earum sint nam, numquam exercitationem perferendis cum, eius, expedita eum iure dolorem! Dicta iusto impedit porro consequatur architecto. Ipsum nihil tempora, laboriosam dolores consequuntur iusto sit rem quos voluptate a sapiente quo est minima delectus molestiae ad culpa saepe mollitia, debitis odit eaque omnis similique. Non sequi aliquam iste ratione?
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Page;
