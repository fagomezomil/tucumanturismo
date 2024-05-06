import { useState, useEffect } from "react";
import Image from 'next/image';

const imagenes = [
  {url: '/images/gastronomia/empanadas.jpg', texto: 'Conocé la Empanada más rica del país' , nombre: 'Empanadas', },
  {url: '/images/gastronomia/milanesa.jpg', texto: 'Conocé la Milanesa más rica del mundo' , nombre: 'Milanesa', },
  {url: '/images/gastronomia/locro.jpg' , texto: 'Conocé el Locro más rico del mundo' , nombre: 'Locro', },
];

export default function BannerGastronomia() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[400px] mt-12">
      <div
        className="bg-cover bg-fixed bg-left bg-no-repeat  h-[400px] w-full content-center transition-opacity duration-1000 ease-out"
        style={{ backgroundImage: `url(${imagenes[currentImage].url})`, opacity: 1 }}
      >
        <div className="max-w-7xl w-full pl-6 mb-6 mx-auto grid grid-cols-2">
          <p className="text-6xl italic font-normal text-white text-right max-w-[500px]">{imagenes[currentImage].texto}</p>
        </div>
      </div>
    </div>
  );
}
