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
import { barData } from "../home/BarData";
import Image from "next/image";


import { Card, CardContent, CardTitle } from "../ui/card";

import Link from "next/link";

interface BarDataItem {
  icon: string;
  name: string;
  title: string;
  text: string;
  img: string;
}

export default function Planifica() {
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


  return (
    <>
      <main>
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
                <Link href={"planifica/" +selectedItem.title.toLowerCase().replace(
                                /\s+/g,
                                ""
                              )}>
                <button className="bg-lime-500 rounded-md text-xs font-semibold px-5 py-2 mt-3 text-white">
                  Conocé más aquí
                </button></Link>
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
      
    </>
  );
}
