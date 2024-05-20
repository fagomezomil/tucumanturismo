import { useState, useEffect } from "react";
import RdelArtesano from "./productos/RdelArtesano";
import RdelVino from "./productos/RdelVino";
import RdeLaFe from "./productos/RdeLaFe";

const imagenes = [
  {
    url: "/images/productos/vino.jpg",
    texto: "El sabor de Tucumán en cada copa",
    nombre: "Ruta del Vino",
    component: RdelVino,
  },
  {
    url: "/images/productos/artesano.jpg",
    texto: "Viví una experiencia artesanal",
    nombre: "Ruta del Artesano",
    component: RdelArtesano,
  },
  {
    url: "/images/productos/fe.jpg",
    texto: "Un viaje de Fe, un camino de encuentro",
    nombre: "Ruta de la Fe",
    component: RdeLaFe,
  },
];

export default function BannerProductos() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const { url, texto, nombre, component: Component } = imagenes[currentImage];

  return (
    <div className="max-w-7xl mx-auto mt-12 grid lg:grid-cols-12">
      <div className="col-span-4 content-center px-8 lg:px-0">
        <Component />
        <div className="ml-4 text-center lg:text-right">
          <p className="mt-5 drop-shadow-md text-3xl italic font-medium text-[#434041] text-center lg:text-left max-w-[500px]">
            {texto}
          </p>
        </div>
        <button className="ml-4 bg-lime-500 rounded-md text-12 font-semibold px-5 py-2 mt-4 text-white">
          Conocé más aquí
        </button>
      </div>
      <div
        className="bg-cover bg-left bg-no-repeat h-[300px] w-full content-center col-span-8 transition-opacity duration-1000 ease-in "
        style={{ backgroundImage: `url(${url})`, opacity: 1 }}
      >
        
      </div>
    </div>
  );
}
