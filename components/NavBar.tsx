"use client";

import { useState } from "react";
import cn from "classnames";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "../components/ui/menubar";
import Link from "next/link";
import Logo from "../components/Logo";
import NavBarData from "./NavBarData";
import Clima from "./Clima";
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(
    null
  );

 

  const handleMenuClick = (index: number) => {
    
    setSelectedMenuIndex(index === selectedMenuIndex ? null : index);
    setIsMenuOpen(true);

  };

;

const router = useRouter();
    const montarMenuClick = (path: string) => {
      // Redirige a la ruta del artículo seleccionado usando router
      router.push(`/articulo/${path}`);
    };

  const removeAccents = (str: string): string =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");


  return (
    <div className="fixed w-full z-50">
      <Clima />
      <nav className="top-0 w-full bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <Menubar className="hidden lg:flex xl:flex text-white">
              {NavBarData.map((menuGroup, groupIndex) => (
                <MenubarMenu key={groupIndex}>
                  <MenubarTrigger
                    className="text-13 hover:bg-lime-600 hover:text-white hover:rounded-sm"
                    onClick={() => handleMenuClick(groupIndex)}
                  >
                    {menuGroup.mainMenu.mainMenu}
                  </MenubarTrigger>
                  {selectedMenuIndex === groupIndex && (
                    <MenubarContent className="mt-3 rounded-none">
                      {menuGroup.subMenu?.map((menuItem, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={`#`} // No es necesario redireccionar, solo manejar el click
                          onClick={() => montarMenuClick(menuItem.nombre)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-600 hover:text-white hover:rounded-sm">
                          {menuItem.nombre}
                        </Link>
                      ))}
                    </MenubarContent>
                  )}
                </MenubarMenu>
              ))}
            </Menubar>
            <div
              id="mobile"
              className="sm:flex md:flex lg:hidden xl:hidden"
            >
              <div className="flex text-lg text-white font-bold">
                <button
                  className="inline-flex ml-2 text-white focus:outline-none focus:text-white"
                  aria-label="Toggle navigation"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  MENÚ
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={cn("h-6 w-6", isMenuOpen ? "rotate-180" : "")}
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM9 15a1 1 0 110-2h6a1 1 0 110 2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {isMenuOpen && (
              <div
                id="mobileDesplegado"
                className="lg:hidden xl:hidden absolute top-24 inset-x-0 bg-black bg-opacity-50 text-center"
              >
                {NavBarData.map((menuGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <div
                      className="text-base font-medium cursor-pointer border-b border-gray-400 p-3 w-2/3 m-auto"
                      onClick={() => handleMenuClick(groupIndex)}
                    >
                      {menuGroup.mainMenu.mainMenu}
                    </div>
                    {selectedMenuIndex === groupIndex && (
                      <div>
                        {menuGroup.subMenu?.map((menuItem, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={`/${removeAccents(
                              menuGroup.mainMenu.mainMenu.toLowerCase().replace(
                                /\s+/g,
                                ""
                              )
                            )}/${removeAccents(
                              menuItem.nombre.toLowerCase().replace(/\s+/g, "")
                            )}`}
                            className="block text-sm text-gray-600 bg-gray-100 hover:bg-lime-600 hover:text-white px-2 py-4 w-2/3 m-auto rounded"
                          >
                            {menuItem.nombre}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="text-gray-600 bg-white text-xs py-4">
                  <span className="">Idioma:</span>
                  <label className="container pl-2 pr-0">
                    Español
                    <input type="checkbox" className="ml-2" />
                    <span className="checkmark"></span>
                  </label>

                  <label className="container pl-2 pr-0">
                    Inglés
                    <input type="checkbox" className="ml-2" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            )}
            <div className="hidden lg:block xl:block">
              <select name="idioma" id="idioma">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
