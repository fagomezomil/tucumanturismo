"use client";
import React from "react";
import {
  LiaFacebook,
  LiaInstagram,
  LiaEnvelope,
  LiaPhoneVolumeSolid,
} from "react-icons/lia";
import { PiGlobe } from "react-icons/pi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa6";
import Link from "next/link";

function Alojamiento() {
  return (
    <>
      <div className="bg-cover bg-fixed bg-left bg-no-repeat grid content-end bg-[url('/images/headers/recepcion.jpg')]  h-[450px] lg:h-[750px]">
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Alojamientos en Tucumán
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
                Planificá
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-11" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-11">Alojamiento</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="max-w-7xl w-full mx-auto pl-6 pr-6">
        <div className="my-16">
          <p className="text-2xl font-bold text-gray-600 text-center">
            Buscá aquí donde hospedarte
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-around mx-auto mt-8">
            <div className="flex mb-7">
            <PiMagnifyingGlassBold className="text-2xl text-gray-600 self-center" />{" "}
            <input
              type="text"
              placeholder="Ej. Hotel, Cabaña, Hostel, Glamping..."
              className="w-full text-lg ml-3 border-b-1 p-1"
            />
            </div>
            <div>
              <select
                name="Categoria"
                id="Categoria"
                className="ml-4 p-3 text-gray-600 border-1 rounded-lg"
              >
                <option value="Hotel">Hotel</option>
              </select>
              <select
                name="Categoria"
                id="Categoria"
                className="ml-4 p-3 text-gray-600 border-1 rounded-lg"
              >
                <option value="Hotel">Estrellas</option>
              </select>
              <select
                name="Categoria"
                id="Categoria"
                className="ml-4 p-3 text-gray-600 border-1 rounded-lg"
              >
                <option value="Hotel">Localidad</option>
              </select>
              <button className="bg-lime-500 rounded-md text-xs font-semibold ml-4 px-5 py-2 mt-3 text-white">
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 justify-center">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="shadow-md my-3 rounded-md w-fit">
              <Image
                src="/images/hotel.jpg"
                alt=""
                width={300}
                height={300}
                className="w-fit"
              />
              <div className="p-4">
                <div className="flex text-yellow-500 text-lg">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="text-xl font-bold text-gray-800 my-2">
                  Nombre Hotel {i + 1}
                </p>
                <p className="text-sm text-gray-600">
                  Dirección y ubicación 4200
                </p>
                <p className="text-sm text-gray-600">
                  San Miguel de Tucumán - CP 4000
                </p>
                <p className="text-14 font-semibold text-gray-600 mt-1">
                  +54 (381) 6544566
                </p>
                <p className="text-sm italic text-gray-600">
                  contacto@hotelcategoria.com.ar
                </p>
                <p className="text-sm font-medium text-gray-600">
                  www.hotelcategoria.com.ar
                </p>
              </div>
            </div>
          ))}
        </div>
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default Alojamiento;
