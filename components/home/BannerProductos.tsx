import { useState, useEffect } from "react";
import Entumesa from "./gastronomia/Entumesa";

const imagenes = [
  { url: '/images/productos/vino.jpg', texto: 'Disfrutá de la Empanada más rica del país', nombre: 'Empanadas', },
  { url: '/images/productos/artesano.jpg', texto: 'No te pierdás la famosa Milanesa Tucumana', nombre: 'Milanesa', },
  { url: '/images/productos/fe.jpg', texto: 'Deleitate con gastronomía única', nombre: 'Locro', },
];

export default function BannerProductos() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-12">
      <div
        className="lg:bg-cover bg-fixed bg-left bg-no-repeat h-[600px] md:h-[400px] w-full content-center transition-opacity duration-1000 ease-in "
        style={{ backgroundImage: `url(${imagenes[currentImage].url})`, opacity: 1 }}
      >
        <div className="max-w-7xl w-full pl-6 mb-6 mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="text-center lg:text-right px-5">
            <p className="drop-shadow-md text-4xl lg:text-5xl italic font-medium text-white text-center lg:text-right max-w-[500px]">{imagenes[currentImage].texto}</p>
            <button className="bg-lime-500 rounded-md text-12 font-semibold px-5 py-2 mt-4  md:mr-24 text-white">
              Conocé más aquí
            </button>
          </div>
          <Entumesa />
        </div>
      </div>
    </div>
  );
}
