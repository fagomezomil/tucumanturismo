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
import { Card, CardContent, CardTitle } from "../../../components/ui/card";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline, IoSearchSharp } from "react-icons/io5";
import calendarioData from "../../../components/home/CalendarioData";
import Modal from "../../../components/home/Modal";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

export default function Page() {
  const [date, setDate] = React.useState<Date>();
  const [selectedEvent, setSelectedEvent] =
    React.useState<CalendarioDataItem | null>(null);
  const [isModalOpen, setModalOpen] = React.useState(false);

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
      <div className="max-w-7xl w-full mx-auto pt-28 mb-6 pl-6">
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
                Imperdibles
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-11" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-11">
                Eventos Destacados
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <div className="mt-6 mb-9  max-w-7xl w-full mx-auto">
          <p className="ml-6 text-2xl text-14 text-gray-800">
            Eventos Destacados
          </p>
          <p className="ml-6 mt-3 text-lg font-bold text-gray-800">
            Buscá tu evento
          </p>
          <div className="flex">
            <div className="flex items-center">
              <p className="ml-6 mt-3 uppercase text-13 mr-2">Filtrar por:</p>
              <button className="bg-gray-400 hover:bg-gray-600 rounded-md text-xs font-semibold px-3 py-2 mt-3 mx-1 text-white">
                Eventos de Hoy
              </button>
              <button className="bg-gray-400  hover:bg-gray-600 rounded-md text-xs font-semibold px-3 py-2 mt-3 mx-1  text-white">
                Eventos para mañana
              </button>
              <button className="bg-gray-400 hover:bg-gray-600 rounded-md text-xs font-semibold px-3 py-2 mt-3 mx-1  text-white">
                Todos los eventos
              </button>
            </div>
            <div className="flex items-center">
              <div>
                <p className="ml-6 mr-4 uppercase text-13">Buscar por fecha:</p>
              </div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[180px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Elige tu fecha</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center">
              <p className="ml-6 mt-3 mr-4 uppercase text-13">Buscar:</p>{" "}
              <input
                type="text"
                className="rounded-md text-xs font-semibold border-slate-400 border-1 mt-3 mx-2 p-2"
              />
              <button className="bg-gray-400 hover:bg-gray-600 rounded-md text-xs font-semibold px-4 py-2 mt-3 mx-1 text-white">
                <IoSearchSharp />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto grid grid-cols-3 gap-12 pl-6">
        {calendarioData.map((item, index) => (
          <div
            key={index}
            className="text-14 text-gray-800 col-span-1"
            onClick={() => handleEventClick(item)}
          >
            <Card className="h-100 ">
              <CardContent className="flex items-center justify-center h-72 relative">
                <div className="rounded-b-md bg-white text-gray-700 px-2 z-10 top-0 left-6 font-semibold absolute">
                  {item.fecha}
                </div>
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
            </Card>
          </div>
        ))}
      </div>
      {isModalOpen && selectedEvent && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div>
            <h2 className="text-xl font-bold mb-3 text-gray-700">
              {selectedEvent.actividad}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
              <div className="grid-cols-1 mr-7">
                <div className="mb-2">
                  <span className="uppercase text-13 font-semibold text-gray-500">
                    Tipo de evento:
                  </span>{" "}
                  <span className="text-13 font-bold">
                    {selectedEvent.tipo}
                  </span>
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
