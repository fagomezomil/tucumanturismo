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
import { FaMapLocationDot, FaRegFilePdf, FaRegClock } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlinePinDrop } from "react-icons/md";

function Page() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat  grid content-end"
        style={{
          backgroundImage: `url('/images/headers/transporte.jpg')`,
          height: "750px",
        }}
      >
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Transporte Urbano
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto pt-6 mb-6 pl-6">
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
          <p className="mx-6 mb-8">
            Si querés conocer todos los atractivos que Tucumán tiene para
            ofrecerte y no contás con vehículo propio, o no querés conducir para
            no perderte todas las maravillas del paisaje, no te preocupes. Aquí
            te dejamos los recorridos de los micros a todos los puntos
            turísticos de nuestra provincia, para que puedas armar tu propio
            itinerario.
          </p>
          <div className="rounded-lg bg-white p-6 shadow-lg relative mx-6">
            <div className="text-xl font-semibold text-white bg-lime-700 px-4 py-2 w-fit rounded-lg absolute -top-2">
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
                  <p className="uppercase text-md font-semibold">
                    Encontrá la línea que se adapte a tu destino
                  </p>
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
                    <iframe
                      className="w-full"
                      width="425"
                      height="350"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-65.27638435363771%2C-26.862208663146948%2C-65.13304710388185%2C-26.7932754116777&amp;layer=mapnik"
                    ></iframe>
                  </div>
                </div>
                <div className="grid grid-rows-1">
                  <div className="grid grid-cols-12 w-fit items-center mt-3 mb-3">
                    <div className="grid-cols-1 w-fit text-4xl text-lime-700">
                      <AiOutlineDollar />
                    </div>
                    <div className="col-span-11 w-fit">
                      <p>
                        {" "}
                        <strong className="uppercase">Costo:</strong>{" "}
                        Dependiendo hasta qué parte de Yerba Buena decidas
                        viajar el costo del boleto varía desde $690.-
                      </p>
                    </div>
                    <div className="grid-cols-1 w-fit text-4xl text-lime-700 mt-3">
                      <MdOutlinePinDrop />
                    </div>
                    <div className="col-span-11 w-fit mt-5">
                      <p>
                        {" "}
                        <strong className="uppercase">
                          Dónde Tomarlo:
                        </strong>{" "}
                        Las líneas 118 o 100 circulan por calle Santiago del
                        Estero, o bien podes esperarlo en terminal de ómnibus.
                        La línea 102 también tiene parada en la terminal o si
                        estas en el centro podes esperarlo en calle San Lorenzo.
                      </p>
                    </div>
                    <div className="grid-cols-1 w-fit text-3xl text-lime-700 mt-3">
                      <FaRegClock />
                    </div>
                    <div className="col-span-11 w-fit mt-5">
                      <p>
                        {" "}
                        <strong className="uppercase">
                          Horarios:
                        </strong>{" "}
                        Cualquiera de estas líneas tiene una frecuencia de 10 minutos. 
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg relative mx-6 mt-12">
            <div className="text-xl font-semibold text-white bg-red-700 px-4 py-2 w-fit rounded-lg absolute -top-2">
              Circuito Valle Calchaquí
            </div>
            <div className="grid grid-cols-5 mt-8 ">
              <div className="inline-grid  grid-cols-1 gap-1 h-fit">
                <button className="focus:text-red-700 focus:border-red-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Tafí del Valle
                </button>
                <button className="focus:text-red-700 focus:border-red-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  El Mollar
                </button>
                <button className="focus:text-red-700 focus:border-red-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Ampimpa
                </button>
                <button className=" focus:text-red-700 focus:border-red-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Amaicha del Valle
                </button>
                <button className="focus:text-red-700 focus:border-red-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Quilmes
                </button>
                <button className="focus:text-red-700 focus:border-red-700 focus:bg-white focus:font-semibold focus:border-2 rounded-md text-md font-medium px-3 py-2 mt-3 mx-1 text-gray-600 block border-1 hover:text-white hover:bg-gray-400 h-fit w-fit">
                  Colalao del Valle
                </button>
              </div>
              <div className="col-span-4">
                <div className="mt-2">
                  <p className="uppercase text-md font-semibold">
                    Encontrá la línea que se adapte a tu destino
                  </p>
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
                    <iframe
                      className="w-full"
                      width="425"
                      height="350"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-65.27638435363771%2C-26.862208663146948%2C-65.13304710388185%2C-26.7932754116777&amp;layer=mapnik"
                    ></iframe>
                  </div>
                </div>
                <div className="grid grid-rows-1">
                  <div className="grid grid-cols-12 w-fit items-center mt-3 mb-3">
                    <div className="grid-cols-1 w-fit text-4xl text-red-700">
                      <AiOutlineDollar />
                    </div>
                    <div className="col-span-11 w-fit">
                      <p>
                        {" "}
                        <strong className="uppercase">Costo:</strong>{" "}
                        Dependiendo hasta qué parte de Yerba Buena decidas
                        viajar el costo del boleto varía desde $690.-
                      </p>
                    </div>
                    <div className="grid-cols-1 w-fit text-4xl text-red-700 mt-3">
                      <MdOutlinePinDrop />
                    </div>
                    <div className="col-span-11 w-fit mt-5">
                      <p>
                        {" "}
                        <strong className="uppercase">
                          Dónde Tomarlo:
                        </strong>{" "}
                        Las líneas 118 o 100 circulan por calle Santiago del
                        Estero, o bien podes esperarlo en terminal de ómnibus.
                        La línea 102 también tiene parada en la terminal o si
                        estas en el centro podes esperarlo en calle San Lorenzo.
                      </p>
                    </div>
                    <div className="grid-cols-1 w-fit text-3xl text-red-700 mt-3">
                      <FaRegClock />
                    </div>
                    <div className="col-span-11 w-fit mt-5">
                      <p>
                        {" "}
                        <strong className="uppercase">
                          Horarios:
                        </strong>{" "}
                        Cualquiera de estas líneas tiene una frecuencia de 10 minutos. 
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
