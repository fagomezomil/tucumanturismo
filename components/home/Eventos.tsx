"use client";

import { useState, useEffect } from "react";

import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardTitle } from "../ui/card";
import calendarioData from "./CalendarioData";
import Modal from "./Modal";

interface CalendarioDataItem {
  actividad: string;
  tipo: string;
  síntesis?: string;
  descripcion?: string;
  fecha: string;
  horario: string;
  lugar: string;
  img: string;
  href: string;
}

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarioDataItem | null>(
    null
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEventClick = (event: CalendarioDataItem) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <main>
        <section>
          <div className="text-center my-9">
            <p className="uppercase text-3xl font-normal text-neutral-400">
              Eventos Destacados
            </p>
          </div>
          <Carousel className="max-w-7xl mx-auto w-full" opts={{ loop: true }}>
            <CarouselContent className="-ml-1 relative">
              {calendarioData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-8/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 mx-2"
                >
                  <div onClick={() => handleEventClick(item)}>
                    <Card className="h-100">
                      <CardContent className="flex items-center justify-center h-72 relative">
                        <Image
                          src={item.img}
                          alt={item.actividad}
                          fill={true}
                          style={{ objectFit: "cover" }}
                          className=""
                        />
                        <CardTitle className="font-bold text-sm text-slate-700 absolute top-72 mt-4 left-2">
                          <span className="uppercase">{item.actividad}</span>
                          <div className="font-light flex items-center mt-1">
                            <span>
                              <FiClock className="mr-2 text-sm" />
                            </span>{" "}
                            <span>{item.horario}</span>
                          </div>
                          <div className="font-light flex mt-2">
                            <span>
                              <IoLocationOutline className="mr-2 text-lg" />
                            </span>{" "}
                            <span>{item.lugar}</span>
                          </div>
                          <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
                            Conocé más aquí
                          </button>
                        </CardTitle>
                      </CardContent>
                      <div className="absolute top-0 left-14 rounded-b-md bg-white text-gray-700 px-2 font-semibold">
                        {item.fecha}
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>

      {isModalOpen && selectedEvent && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="overflow-y-auto">
          <h2 className="text-xl font-bold mb-3 text-gray-700">
            {selectedEvent.actividad}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="grid-cols-1 mr-7">
              <div className="mb-2">
                <span className="uppercase text-13 font-semibold text-gray-500">
                  Tipo de evento:
                </span>{" "}
                <span className="text-13 font-bold">{selectedEvent.tipo}</span>
              </div>
              <div className="flex items-center mb-2">
                <span>
                  <FiClock className="mr-2 text-sm" />
                </span>
                <span className="text-13 font-bold">
                  {selectedEvent.fecha} -{selectedEvent.horario}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span>
                  <IoLocationOutline className="mr-2 text-lg" />
                </span>{" "}
                <p className="text-13 font-bold">{selectedEvent.lugar}</p>
              </div>
              {selectedEvent.síntesis && (
                <p className="mb-4 mt-3 text-13">{selectedEvent.síntesis}</p>
              )}
              {selectedEvent.descripcion && (
                <p className="mb-4 mt-3 text-13">
                  {selectedEvent.descripcion}
                </p>
              )}
            </div>
            <div className="grid-cols-1 h-max">
              <Image
                src={selectedEvent.img}
                alt={selectedEvent.actividad}
                width={400}
                height={300}
              />
            </div>
          </div>
          <button
            onClick={closeModal}
            className="bg-lime-500 rounded-md text-white px-4 py-2 mt-4"
          >
            Cerrar
          </button>
        </div>
      </Modal>
      )}
    </>
  );
}
