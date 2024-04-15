"use client";

import { useState, useEffect } from "react";
import { MdOutlineHiking } from "react-icons/md";
import { HiOutlineMap } from "react-icons/hi2";
import { FiClock } from "react-icons/fi";
import { IoBusOutline, IoBedOutline, IoLocationOutline } from "react-icons/io5";
import {
  AiOutlineSchedule,
  AiTwotoneShop,
  AiOutlineFlag,
  AiOutlineCar,
} from "react-icons/ai";
import { IconType } from "react-icons";
import { barData } from "./BarData";
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



// Define el tipo CalendarioDataItem
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

interface BarDataItem {
  icon: string;
  name: string;
  title: string;
  text: string;
  img: string;
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<BarDataItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarioDataItem | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setSelectedItem(barData[0]);
  }, []);

  const getIconComponent = (iconName: string): IconType | null => {
    switch (iconName) {
      case "IoBedOutline":
        return IoBedOutline;
      case "IoBusOutline":
        return IoBusOutline;
      case "AiOutlineCar":
        return AiOutlineCar;
      case "MdOutlineHiking":
        return MdOutlineHiking;
      case "AiTwotoneShop":
        return AiTwotoneShop;
      case "AiOutlineFlag":
        return AiOutlineFlag;
      case "AiOutlineSchedule":
        return AiOutlineSchedule;
      case "HiOutlineMap":
        return HiOutlineMap;
      default:
        return null;
    }
  };

  const handleIconClick = (item: BarDataItem) => {
    setSelectedItem(item);
  };

  const dataSlider = [
    { id: 1, title: "Aventura por Tierra", img: "/images/slide/slide1.jpg", href: "/naturaleza/aventuraportierra" },
    { id: 2, title: "Aventura por Agua", img: "/images/slide/slide2.jpg", href: "/naturaleza/aventuraporagua" },
    { id: 3, title: "Aventura por Aire", img: "/images/slide/slide3.jpg", href: "/naturaleza/aventuraporaire" },
    { id: 4, title: "Áreas Protegidas", img: "/images/slide/slide4.jpg", href: "/naturaleza/areasprotegidas" },
    { id: 5, title: "Espacios Verdes", img: "/images/slide/slide5.jpg", href: "/naturaleza/espaciosverdes" },
  ];

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
        {/* Resto del código... */}
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
        {/* Código restante */}
      </main>
      {/* Añade el modal para mostrar los detalles del evento seleccionado */}
      {isModalOpen && selectedEvent && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{selectedEvent.actividad}</h2>
            <p>{selectedEvent.tipo}</p>
            <p>{selectedEvent.fecha} - {selectedEvent.horario}</p>
            <p>{selectedEvent.lugar}</p>
            <Image
              src={selectedEvent.img}
              alt={selectedEvent.actividad}
              width={500}
              height={500}
              className="mb-4"
            />
            {selectedEvent.síntesis && (
              <p className="mb-4">{selectedEvent.síntesis}</p>
            )}
            {selectedEvent.descripcion && (
              <p className="mb-4">{selectedEvent.descripcion}</p>
            )}
            <button onClick={closeModal} className="bg-lime-500 rounded-md text-white px-4 py-2">
              Cerrar
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
