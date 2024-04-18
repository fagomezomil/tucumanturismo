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
          backgroundImage: `url('/images/headers/destinos.jpg')`,
          height: "750px",
        }}
      >
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Destinos y Circuitos
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
      <div className="max-w-7xl w-full mx-auto pl-6">
        <div className="mt-16 grid grid-cols-2">
          <div className="w-fit justify-self-end">
            <Image
              src="/images/galeria/1.jpg"
              alt=""
              width={500}
              height={150}
            />
          </div>
          <div className="mx-6 mt-14 mr-32">
            <p className="font-bold text-3xl text-gray-600">Circuito Yungas</p>
            <p className="text-gray-600 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              maiores fuga praesentium doloremque consectetur accusamus quam,
              nostrum quos magni sunt, dolor consequatur odit rem. Obcaecati
              nobis modi ducimus harum.
            </p>
            <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
              Conocé más aquí
            </button>
          </div>
          <div className="mx-6 mt-32 ml-32">
            <p className="font-bold text-3xl text-gray-600">Circuito Valle Calchaquí</p>
            <p className="text-gray-600 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              maiores fuga praesentium doloremque consectetur accusamus quam,
              nostrum quos magni sunt, dolor consequatur odit rem. Obcaecati
              nobis modi ducimus harum.
            </p>
            <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
              Conocé más aquí
            </button>
          </div>
          <div className="w-fit justify-self-start mt-20">
            <Image
              src="/images/galeria/2.jpg"
              alt=""
              width={500}
              height={150}
            />
          </div>
        </div>
        <div className="mt-16 mb-16 grid grid-cols-2">
          <div className="w-fit justify-self-end">
            <Image
              src="/images/galeria/4.jpg"
              alt=""
              width={500}
              height={150}
            />
          </div>
          <div className="mx-6 mt-14 mr-32">
            <p className="font-bold text-3xl text-gray-600">Circuito Sur</p>
            <p className="text-gray-600 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              maiores fuga praesentium doloremque consectetur accusamus quam,
              nostrum quos magni sunt, dolor consequatur odit rem. Obcaecati
              nobis modi ducimus harum.
            </p>
            <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
              Conocé más aquí
            </button>
          </div>
          <div className="mx-6 mt-32 ml-32">
            <p className="font-bold text-3xl text-gray-600">Circuito Valle de Choromoro</p>
            <p className="text-gray-600 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              maiores fuga praesentium doloremque consectetur accusamus quam,
              nostrum quos magni sunt, dolor consequatur odit rem. Obcaecati
              nobis modi ducimus harum.
            </p>
            <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
              Conocé más aquí
            </button>
          </div>
          <div className="w-fit justify-self-start mt-20">
            <Image
              src="/images/galeria/3.jpg"
              alt=""
              width={500}
              height={150}
            />
          </div>
        </div>
      </div>
    </>
  );
}
