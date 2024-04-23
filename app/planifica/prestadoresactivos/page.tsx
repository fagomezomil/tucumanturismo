"use client";
import React from "react";

import PrestadoresData from "./PrestadoresData";
interface PrestadoresData {
  titulo: string;
  subtitulo: string;
  direccion: string;
  localidad: string[];
  actividades: string[];
  contacto: string;
  email?: string;
  web?: string;
  facebook?: string;
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
import { FaMapLocationDot, FaRegFilePdf } from "react-icons/fa6";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <div className="bg-cover bg-fixed bg-left bg-no-repeat grid content-end bg-[url('/images/headers/nunorco.jpg')]  h-[450px] lg:h-[750px]">
        <div
          id="titulo-articulo"
          className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left"
        >
          Modelo de Artículo
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
                Prestadores de Turismo Activo
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="max-w-7xl w-full mx-auto pl-6 pr-6">
        <div className="text-14 text-gray-800 mt-5 col-span-2">
          <p className="text-2xl">
            Prestadores de Turismo Aventura Habilitados
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
        <div className="grid grid-cols-3 gap-6">
          {PrestadoresData.map((prestador) => (
            <div>
              <p className="font-bold text-md text-white bg-lime-600 p-4">
                {prestador.titulo}
              </p>
              <div className="p-4">
                <p className="text-slate-600 font-semibold">
                  {prestador.subtitulo}
                </p>
                <p className="text-slate-500 italic text-sm">
                  {prestador.direccion}
                </p>
                <p className="text-slate-500 text-sm">{prestador.localidad}</p>
                <p>{prestador.actividades}</p>
                <p>{prestador.contacto}</p>
                <p>{prestador.email}</p>
                <p>{prestador.web}</p>
                {/* <Link href={prestador.facebook}>Facebook</Link> */}
                <p>{prestador.facebook}</p>
                <p>{prestador.instagram}</p>
                <p>{prestador.rrss}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NotFound;
