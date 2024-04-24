"use client";
import React from "react";

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

function Ubicacion() {
  return (
    <>
      <div className="bg-cover bg-fixed bg-left bg-no-repeat grid content-end bg-[url('/images/headers/nunorco.jpg')]  h-[450px] lg:h-[750px]">
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Ubicación
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto mt-6 pl-6">
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
                Tucumán
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-11" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-11">
                Ubicación
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="max-w-7xl w-full mx-auto md:grid md:grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-12 xl:grid xl:grid-cols-3 xl:gap-12 pl-6 pr-6">
        <div className="text-14 text-gray-800 mt-5 col-span-2">
          <p className="text-2xl">Vení y conocé Tucumán</p>
          <br />
          <p>
            El corazón de Argentina se encuentra en el Norte y se llama Tucumán.
            Es la provincia que le dió el soplo de vida al país con la
            independencia, por lo que es reconocida como la cuna donde nació.
            Rodeada al norte por Salta, al sureste por Santiago del Estero y al
            suroeste por Catamarca, es la provincia más pequeña, lo que ofrece a
            sus visitantes la posibilidad de recorrerla de punta a punta en poco
            tiempo. Con naturaleza exuberante y paisajes paradisíacos que van
            desde densas selvas hasta áridos valles que se pierden en el
            infinito, Tucumán es una verdadera tierra de contrastes. La
            parsimonia de los pueblos de su interior se contrapone con la
            vibración de su capital, que se enciende mucho más por las noches
            bajo la ‘lunita tucumana’.
          </p>
          <p className="uppercase font-bold text-12 text-gray-600 mt-8 mb-3">
            Video
          </p>
          <video
            width="auto"
            height="400"
            autoPlay
            loop
            muted
            className=" w-fit"
          >
            <source src="/video/video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <div className="mt-5">
          <p className="uppercase font-bold text-12 text-gray-600 mt-8">
            Galería de imágenes
          </p>
          <div className="md:w-fit sm:w-fit md:grid md:grid-cols-3 lg:grid lg:grid-cols-1 md:gap-4">
            <Image
              src="/images/galeria/1.jpg"
              alt=""
              width={400}
              height={300}
              className="mt-3 w-full col-span-2"
            />
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-3 xl:grid xl:grid-cols-2 xl:gap-3 mt-2">
              <Image
                src="/images/galeria/2.jpg"
                alt=""
                width={200}
                height={150}
                className="mt-1 w-full"
              />
              <Image
                src="/images/galeria/3.jpg"
                alt=""
                width={200}
                height={150}
                className="mt-1 w-full"
              />
            </div>
          </div>
          <div className="">
            <p className="uppercase font-bold text-12 text-gray-600 mt-8">
              Para descargar
            </p>
            <div className="align-middle mt-4 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-1">
              <div className="flex">
                <FaMapLocationDot className="text-gray-500 text-5xl" />
                <div className="ml-3 mt-1">
                  <p className="text-12 font-medium text-gray-600">
                    Hacé click para descargar
                  </p>
                  <p className="font-bold text-gray-500">
                    Mapa Circuito Las Yungas
                  </p>
                </div>
              </div>
              <div className="flex mt-4 md:mt-0 lg:mt-4">
                <FaRegFilePdf className="text-gray-500 text-5xl" />
                <div className="ml-3 mt-1">
                  <p className="text-12 font-medium text-gray-600">
                    Hacé click para descargar
                  </p>
                  <p className="font-bold text-gray-500">
                    Folleto Circuito Las Yungas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ubicacion;
