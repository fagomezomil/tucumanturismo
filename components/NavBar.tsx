"use client";

import { useState } from "react";
import cn from "classnames";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "../components/ui/menubar";
import Link from "next/link";
import Logo from "../components/Logo";
import NavBarData from "./NavBarData";
import Clima from "./Clima";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(
    null
  );

  const handleMenuClick = (index: number) => {
    setSelectedMenuIndex(selectedMenuIndex === index ? null : index);
    setIsMenuOpen(true); // Abrir el menú desplegable al hacer clic en un elemento principal
  };

  return (
    <div className="fixed w-full z-50">
      <Clima />
      <nav className="top-0 w-full bg-black bg-opacity-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 justify-between">
            <div className="">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="hidden lg:block xl:block text-white">
              <Menubar className="cursor-pointer">
                {NavBarData.map((menuItem, index) => (
                  <MenubarMenu key={index}>
                    <MenubarTrigger className="hover:bg-lime-600 hover:text-white hover:rounded-sm">{menuItem.mainMenu}</MenubarTrigger>
                    {menuItem.subMenu && (
                      <MenubarContent className="mt-3 rounded-none">
                        {menuItem.subMenu.map((subMenuItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`/${menuItem.mainMenu
                              .toLocaleLowerCase()
                              .replace(/\s+/g, "")}/${subMenuItem
                              .toLowerCase()
                              .replace(/\s+/g, "")}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-600 hover:text-white hover:rounded-sm"
                          >
                            {subMenuItem}
                          </Link>
                        ))}
                      </MenubarContent>
                    )}
                  </MenubarMenu>
                ))}
              </Menubar>
            </div>
            <div id="mobile" className="sm:flex md:flex lg:hidden xl:hidden">
              <div className=" flex text-lg text-white font-bold">
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
                      d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zM3 10a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zM9 15a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Menú desplegable para dispositivos móviles */}
            <div
              id="mobileDesplegado"
              className={cn(
                "lg:hidden xl:hidden",
                "absolute top-24 inset-x-0 bg-black bg-opacity-50 text-center ",
                isMenuOpen ? "block" : "hidden"
              )}
            >
              <div className="px-2 py-1 space-y-1 text-gray-600 bg-white">
                {NavBarData.map((menuItem, index) => (
                  <div key={index}>
                    <div
                      className="text-base font-medium cursor-pointer border-b border-gray-400 p-3 w-2/3 m-auto"
                      onClick={() => handleMenuClick(index)}
                    >
                      {menuItem.mainMenu}
                    </div>
                    {selectedMenuIndex === index && menuItem.subMenu && (
                      <div className="">
                        {menuItem.subMenu.map((subMenuItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`/${menuItem.mainMenu
                              .toLocaleLowerCase()
                              .replace(/\s+/g, "")}/${subMenuItem
                              .toLowerCase()
                              .replace(/\s+/g, "")}`}
                            className="block text-sm text-gray-600 bg-gray-100 hover:bg-lime-600 hover:text-white px-2 py-4 w-2/3 m-auto rounded"
                          >
                            {subMenuItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-gray-600 bg-white text-xs py-4">
                <span className="">Idioma:</span>
                <label className="container pl-2 pr-0">
                  Español 
                  <input type="checkbox" className="ml-2"/>
                  <span className="checkmark"></span>
                </label>

                <label className="container pl-2 pr-0">
                  Inglés 
                  <input type="checkbox" className="ml-2"/>
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
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
