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

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa6";
import Link from "next/link";

function Alojamiento() {
  return (
    <>
      <div className="bg-cover bg-fixed bg-left bg-no-repeat grid content-end bg-[url('/images/headers/nunorco.jpg')]  h-[450px] lg:h-[750px]">
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

          <div className="flex justify-center mt-8">
            <PiMagnifyingGlassBold className="text-2xl text-gray-600 self-center" />{" "}
            <input
              type="text"
              placeholder="Ej. Hotel, Cabaña, Hostel, Glamping..."
              className="w-[400px] text-lg ml-3 border-b-1 p-1"
            />
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
    </>
  );
}

export default Alojamiento;
