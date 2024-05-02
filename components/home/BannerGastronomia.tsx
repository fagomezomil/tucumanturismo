import { useState, useEffect } from "react";
import Image from 'next/image';

const imagenes = [
  '/images/artesanos/ceramica.jpg',
  '/images/artesanos/textil.jpg',
  '/images/artesanos/cuero.jpg',
  '/images/artesanos/simoca.jpg',
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
    <div className="h-[400px] relative">
      <div
        className="bg-cover bg-center h-[400px] w-full content-center transition-opacity duration-1000 ease-out"
        style={{ backgroundImage: `url(${imagenes[currentImage]})`, opacity: 1 }}
      >
        <div className="grid grid-cols-2">
          <p className="text-4xl font-bold text-white text-center">Título</p>
        </div>
      </div>
    </div>
  );
}
