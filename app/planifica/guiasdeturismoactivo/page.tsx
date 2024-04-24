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

import PrestadoresData from "../prestadoresactivos/PrestadoresData";
interface PrestadoresData {
  titulo: string;
  subtitulo: string;
  direccion: string;
  localidad: string[];
  actividades?: string[];
  contacto: string;
  email?: string;
  web?: string;
  facebook?: URL;
  instagram?: string;
  rrss?: string;
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

function GuiasDeTurismoActivo() {
  return (
    <>
      <div className="bg-cover bg-fixed bg-left bg-no-repeat grid content-end bg-[url('/images/planifica/guiasactivo.jpg')]  h-[450px] lg:h-[750px]">
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Guías de Turismo Activo
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
          <p className="text-2xl">
            Guías de Turismo Aventura Habilitados
          </p>
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
        <div className="my-16">
          <p className="text-2xl font-bold text-gray-600 text-center">
            Buscá aquí que actividad querés hacer
          </p>
          <div className="flex justify-center mt-8">
            <PiMagnifyingGlassBold className="text-2xl text-gray-600 self-center" />{" "}
            <input
              type="text"
              placeholder="Ej. Trekking, Kayak, Parapente, Cabalgata..."
              className="w-[400px] text-lg ml-3 border-b-1 p-1"
            />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {PrestadoresData.map((prestador, index) => (
            <div key={index} className="shadow-md rounded-sm h-fit">
              <p className="font-bold text-md text-white bg-lime-600 p-4  rounded-t-md text-lg">
                {prestador.titulo}
              </p>
              <div className="p-4 pb-0">
                <p className="text-slate-600 font-semibold text-md">
                  {prestador.subtitulo}
                </p>
                <p className="text-slate-500 italic text-sm">
                  {prestador.direccion}
                </p>
                <p className="text-slate-500 text-sm">{prestador.localidad}</p>
                <p className="text-slate-600 text-sm uppercase font-medium mt-5 mb-1">
                  Actividades habilitadas
                </p>

                {prestador.actividades.map((actividad, index) => (
                  <ul key={index} className="list-disc px-4 inline-block">
                    <li className="text-lime-800 font-medium text-md">
                      {actividad}
                    </li>
                  </ul>
                ))}
                <p className="mt-3 text-lg text-gray-800 font-medium">
                  <LiaPhoneVolumeSolid className="inline-block text-lg mr-2 text-gray-600" />
                  {prestador.contacto}
                </p>
                <p className="mt-1 mb-3  text-slate-500 italic text-sm">
                  <LiaEnvelope className="inline-block text-lg text-gray-600 mr-2" />
                  {prestador.email}
                </p>
                <p className="text-slate-600 text-sm uppercase font-medium mt-4 pb-1">
                  Encontranos en
                </p>
                <p className="text-3xl font-bold text-lime-700 inline-block mr-3">
                  <PiGlobe />
                </p>
                <p className="text-3xl font-bold text-lime-700 inline-block mr-3">
                  <LiaFacebook />
                </p>
                <p className="text-3xl font-bold text-lime-700 inline-block">
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

export default GuiasDeTurismoActivo;
