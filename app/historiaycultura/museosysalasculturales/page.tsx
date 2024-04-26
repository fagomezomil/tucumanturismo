"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { FaMapLocationDot, FaRegFilePdf } from "react-icons/fa6";
import MuseosData from "./MuseosData";

interface MuseosData {
  titulo: string;
  descripcion: string;
  img: string;
  direccion?: string;
  info?: string;
}

export default function page() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat  grid content-end"
        style={{
          backgroundImage: `url('/images/headers/historica.jpg')`,
          height: "750px",
        }}
      >
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Museos y Salas Culturales
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
      <div
        id="titulo-articulo"
        className="max-w-7xl w-full mt-6 pl-6 mb-6 mx-auto "
      >
        <p className="text-2xl">Circuitos de Tucumán</p>
      </div>
      <div className="max-w-7xl w-full mx-auto pl-6">
        {MuseosData.map((museo, index) => {
          const isRightDiv = index % 2 === 0;
          return (
            <div
              className={`mt-11 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 ${
                isRightDiv
                  ? "lg:grid-rows-1 xl:grid-rows-1"
                  : "lg:grid-rows-2 xl:grid-rows-2"
              }`}
              key={index}
            >
              <div
                id={isRightDiv ? "derecha" : "izquierda"}
                className={`${
                  isRightDiv
                    ? "lg:row-span-1 xl:row-span-1"
                    : "lg:row-span-2 xl:row-span-2"
                } ${isRightDiv ? "ml-32" : "mr-32"}`}
              >
                <div className="w-fit justify-self-center">
                  <Image src={museo.img} alt="" width={500} height={150} />
                </div>
                <div className="mx-6 mt-14">
                  <p className="font-bold text-3xl text-gray-600">
                    {museo.titulo}
                  </p>
                  <p className="text-gray-600 mt-6">
                    {museo.descripcion.slice(0, 250)}...
                  </p>
                  <Link href={`/tucuman/destinosycircuitos/circuito`}>
                    <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
                      Conocé más aquí
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

{
  /* {MuseosData.map((museo, index) => (
          <div className="mt-11 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2">
            <div id="derecha" key={index}>
              <div className="w-fit justify-self-end">
                <Image src={museo.img} alt="" width={500} height={150} />
              </div>
              <div className="mx-6 mt-14 mr-32">
                <p className="font-bold text-3xl text-gray-600">
                  {museo.titulo}
                </p>
                <p className="text-gray-600 mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  maiores fuga praesentium doloremque consectetur accusamus
                  quam, nostrum quos magni sunt, dolor consequatur odit rem.
                  Obcaecati nobis modi ducimus harum.
                </p>
                <Link href="/tucuman/destinosycircuitos/circuitoyungas">
                  <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
                    Conocé más aquí
                  </button>
                </Link>
              </div>
            </div>
            <div id="izquierda">
              <div className="mx-6 mt-32 ml-32" key={index}>
                <p className="font-bold text-3xl text-gray-600">
                  {museo.titulo}
                </p>
                <p className="text-gray-600 mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  maiores fuga praesentium doloremque consectetur accusamus
                  quam, nostrum quos magni sunt, dolor consequatur odit rem.
                  Obcaecati nobis modi ducimus harum.
                </p>
                <Link href="/tucuman/destinosycircuitos/circuitovallecalchaqui">
                  <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
                    Conocé más aquí
                  </button>{" "}
                </Link>
              </div>
              <div className="w-fit justify-self-start mt-20">
                <Image src={museo.img} alt="" width={500} height={150} />
              </div>
            </div>
          </div>
        ))} */
}
