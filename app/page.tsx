"use client";

import { useState, useEffect } from "react"; // Importa el hook useState
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
import { barData } from "../components/BarData";
import Image from "next/image";
import Banner from "../components/Banner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import calendarioData from "../components/CalendarioData";

interface BarDataItem {
  icon: string;
  name: string;
  title: string;
  text: string;
  img: string;
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<BarDataItem | null>(null); // Estado para almacenar el ítem seleccionado

  useEffect(() => {
    setSelectedItem(barData[0]); // Establece el primer elemento como seleccionado al montar el componente
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

  // Función para manejar el clic en un ícono
  const handleIconClick = (item: BarDataItem) => {
    setSelectedItem(item); // Actualiza el estado con el ítem seleccionado
  };

  const dataSlider = [
    { id: 1, title: "Aventura por Tierra", img: "/images/slide/slide1.jpg" },
    { id: 2, title: "Aventura por Agua", img: "/images/slide/slide2.jpg" },
    { id: 3, title: "Aventura por Aire", img: "/images/slide/slide3.jpg" },
    { id: 4, title: "Áreas Protegidas", img: "/images/slide/slide4.jpg" },
    { id: 5, title: "Espacios Verdes", img: "/images/slide/slide5.jpg" },
  ];

  return (
    <>
      <main>
        <div className="video-container video-home hidden md:flex lg:flex xl:flex">
          <video width="auto" height="800" autoPlay loop muted>
            <source src="/video/video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <div className="video-container-mobile flex sm:block md:hidden lg:hidden xl:hidden object-cover">
          <video width="auto" height="700" autoPlay loop muted className="h-700 w-fit">
            <source src="/video/video-mobile.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <section>
          <div className="text-center mt-9">
            <p className="uppercase text-3xl font-normal text-neutral-400">
              Planificá tu viaje
            </p>
          </div>
          <div className="max-w-7xl mx-auto justify-evenly hidden lg:flex xl:flex">
            {barData.map((item, index) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <div
                  key={index}
                  className="mt-6"
                  onClick={() => handleIconClick(item)}
                >
                  <button className="flex flex-col items-center btn-planifica">
                    {IconComponent && (
                      <IconComponent className=" h-10 w-10 mb-3" />
                    )}
                    <span className="font-semibold text-sm">{item.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="max-w-7xl mx-auto justify-items-center grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:hidden xl:hidden">
            {barData.map((item, index) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <div
                  key={index}
                  className="mt-3"
                  onClick={() => handleIconClick(item)}
                >
                  <button className="flex flex-col items-center btn-planifica">
                    {IconComponent && (
                      <IconComponent className=" h-8 w-8 mb-1" />
                    )}
                    <span className="font-semibold text-sm">{item.name}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
        <section id="item-selected-planifica" className=" justify-center mb-16 hidden md:flex lg:flex xl:flex">
          {/* Renderiza la información del ítem seleccionado */}
          {selectedItem && (
            <div className="selected-item max-w-7xl flex mx-10 mt-10 overflow-hidden relative">
              <div className="bg-neutral-200 p-11 my-14 absolute w-96">
                <h2 className="text-2xl uppercase font-bold text-neutral-600">
                  {selectedItem.title}
                </h2>
                <p className="text-neutral-800 text-sm mt-4 mb-4">
                  {selectedItem.text}
                </p>
                <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
                  Conocé más aquí
                </button>
              </div>
              {selectedItem.img && (
                <Image
                  src={selectedItem.img}
                  alt="Imagen"
                  width={900}
                  height={600}
                  className="w-full object-cover ml-32 h-500 my-auto"
                />
              )}
            </div>
          )}
        </section>
        <section id="item-selected-planifica-mobile" className="flex justify-center sm:flex md:hidden lg:hidden xl:hidden">
          {/* Renderiza la información del ítem seleccionado */}
          {selectedItem && (
            <div className="selected-item max-w-7xl flex flex-col mt-4 overflow-hidden ">
              <div className="bg-neutral-200 p-5 ">
                <h2 className="text-xl uppercase font-bold text-neutral-600">
                  {selectedItem.title}
                </h2>
                <p className="text-neutral-800 text-13 mt-4 mb-4">
                  {selectedItem.text}
                </p>
                <button className="bg-lime-500 rounded-md text-11 font-semibold px-5 py-2 text-white">
                  Conocé más aquí
                </button>
              </div>
              <div>{selectedItem.img && (
                <Image
                  src={selectedItem.img}
                  alt="Imagen"
                  width={400}
                  height={900}
                  className="w-full object-cover h-80 my-auto"
                />
              )}</div>
            </div>
          )}
        </section>
      </main>
      <section className="mt-11 mb-20 hidden md:flex lg:flex xl:flex">
        <Banner bannerSrc="/images/banner.gif" />
      </section>
      <section className="mt-11 mb-20 flex sm:flex md:hidden lg:hidden xl:hidden">
        <div className="bg-lime-700 w-full text-white font-semibold text-3xl text-center h-52 pt-24">
          banner
        </div>
      </section>
      <section>
        <div className="text-center my-9">
          <p className="uppercase text-3xl font-normal text-neutral-400">
            Imperdibles del día
          </p>
        </div>
        <Carousel className="max-w-7xl mx-auto w-full" opts={{ loop: true }}>
          <CarouselContent className="-ml-1">
            {dataSlider.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-3/4 sm:basis-3/4 md:basis-1/3 lg:basis-1/4"
              >
                <div className="">
                  <Card className="relative">
                    <CardContent className="flex aspect-square items-center justify-center">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={1000}
                        height={1000}
                      />
                    </CardContent>
                    <CardTitle className="absolute pl-5 top-8 uppercase font-bold text-white w-44">
                      {item.title}
                    </CardTitle>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="mt-11 mb-20 hidden md:flex lg:flex xl:flex">
        <Banner bannerSrc="/images/banner2.jpg" />
      </section>
      <section className="mt-11 mb-20 flex sm:flex md:hidden lg:hidden xl:hidden">
        <div className="bg-sky-700 w-full text-white font-semibold text-3xl text-center h-52 pt-24">
          banner
        </div>
      </section>
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
                <div>
                  <Card className="h-100">
                    <CardContent className="flex items-center justify-center h-72 relative">
                      <Image
                        src={item.img}
                        alt={item.actividad}
                        fill={true}
                        style={{objectFit: "cover"}}
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
    </>
  );
}
