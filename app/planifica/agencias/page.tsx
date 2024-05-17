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

import AgenciasData from "../agencias/AgenciasData";
interface AgenciasData {
  titulo: string;
  subtitulo?: string;
  email: string;
  telefono: string;
  domicilio: string;
  legajo: string;
  web?: string;
  facebook?: string;
  instagram?: string;
}

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

function Agencias() {
  return (
    <>
      <div className="bg-cover bg-fixed bg-left bg-no-repeat grid content-end bg-[url('/images/planifica/agencias.jpg')]  h-[450px] lg:h-[750px]">
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Agencias de Turismo
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
              <BreadcrumbPage className="text-11">
                Guías de Turismo Activo
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="max-w-7xl w-full mx-auto pl-6 pr-6">
        <div className="text-14 text-gray-800 mt-5 col-span-2">
          <p className="text-2xl">Conocé donde organizar tu viaje a Tucumán</p>
          <br />
          <p>
            Se caracteriza por destinos paradisíacos de visita obligada, entre
            los que destacan San Javier, con sus espectaculares vistas
            panorámicas desde el magnífico Cristo Bendicente; Villa Nougués que
            permite pasar una jornada tranquila en una verdadera campiña
            europea; Yerba Buena que combina la calma de la naturaleza y el
            ritmo vertiginoso de sus noches; y El Cadillal, ideal para relajarse
            frente al imponente dique Celestino Gelsi o emprender una aventura
            en sus aguas.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {AgenciasData.map((agencia, index) => (
            <div key={index} className="shadow-md rounded-sm h-fit">
              <p className="font-bold text-md text-white bg-amber-500 p-4  rounded-t-md text-lg">
                {agencia.titulo}
              </p>
              <div className="p-4 pb-0">
                <p className="text-slate-600 font-semibold text-md">
                  Legajo de Agencia: N° {agencia.legajo}
                </p>
                <hr className="mt-2 mb-4"/>
                <p className="text-slate-500 italic text-sm">
                  {agencia.domicilio}
                </p>
                <p className="text-slate-500 text-sm">{agencia.email}</p>
                <p className="text-slate-600 text-sm uppercase font-medium mt-5 mb-1">
                  Actividades habilitadas
                </p>

                
                <p className="mt-3 text-lg text-gray-800 font-medium">
                  <LiaPhoneVolumeSolid className="inline-block text-lg mr-2 text-gray-600" />
                  {agencia.telefono}
                </p>
                <p className="mt-1 mb-3  text-slate-500 italic text-sm">
                  <LiaEnvelope className="inline-block text-lg text-gray-600 mr-2" />
                  {agencia.email}
                </p>
                <p className="text-slate-600 text-sm uppercase font-medium mt-4 pb-1">
                  Encontranos en
                </p>
                <p className="text-3xl font-bold text-amber-500 inline-block mr-3">
                  <PiGlobe />
                </p>
                <p className="text-3xl font-bold text-amber-500 inline-block mr-3">
                  <LiaFacebook />
                </p>
                <p className="text-3xl font-bold text-amber-500 inline-block">
                  <LiaInstagram />
                </p>
              </div>
              <p className="text-slate-600 text-sm uppercase font-medium  px-4 mt-2">
                Descargas
              </p>
              <p className="text-gray-500 italic font-semibold text-sm px-4 align-middle mt-1 mb-6">
                <FaRegFilePdf className="inline-block text-lg mr-2" />
                Credencial de habilitación
              </p>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Agencias;
