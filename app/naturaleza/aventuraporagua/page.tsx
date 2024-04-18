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

export default function page() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat  grid content-end"
        style={{
          backgroundImage: `url('/images/headers/poragua.jpg')`,
          height: "750px",
        }}
      >
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Aventura por Agua
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
                Destinos y Circuitos
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="max-w-7xl w-full mx-auto grid grid-cols-3 gap-12 pl-6">
        <div className="text-14 text-gray-800 mt-5 col-span-2">
          <p className="text-2xl">Circuito Las Yungas</p>
          <br />
          <p>
            Se caracteriza por destinos paradisíacos de visita obligada, entre
            los que destacan San Javier, con sus espectaculares vistas
            panorámicas desde el magnífico Cristo Bendicente; Villa Nougués que
            permite pasar una jornada tranquila en una verdadera campiña
            europea; Yerba Buena que combina la calma de la naturaleza y el
            ritmo vertiginoso de sus noches; y El Cadillal, ideal para relajarse
            frente al imponente dique Celestino Gelsi o emprender una aventura
            en sus aguas. Tafí Viejo permite conocer en profundidad la historia
            ferroviaria de la provincia, en tanto que San Pablo encierra los
            vestigios de lo que fue uno de los ingenios azucareros más
            importantes. Raco, por su parte, te espera con sus tupidos bosques
            perfectos para una apacible cabalgata, mientras que El Siambón es un
            destino ideal para conectar con tu fe. Anfama, por último, es un
            paraje mágico ubicado a 2.000 metros de altura que podrás explorar
            en grupo, acompañado siempre por un guía.
          </p>
          <p className="uppercase font-bold text-12 text-gray-600 xl:mt-8 mb-3">
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
          <p className="uppercase font-bold text-12 text-gray-600 xl:mt-8">
            Galería de imágenes
          </p>
          <Image
            src="/images/galeria/1.jpg"
            alt=""
            width={400}
            height={300}
            className="mt-3"
          />
          <div className="grid grid-cols-2 gap-3 mt-2">
            <Image
              src="/images/galeria/2.jpg"
              alt=""
              width={200}
              height={150}
              className="mt-1"
            />
            <Image
              src="/images/galeria/3.jpg"
              alt=""
              width={200}
              height={150}
              className="mt-1"
            />
          </div>
          <p className="uppercase font-bold text-12 text-gray-600 xl:mt-8">
            Para descargar
          </p>
          <div className="mt-4 ">
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
            <div className="flex mt-4">
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
    </>
  );
}
