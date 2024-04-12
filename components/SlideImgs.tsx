import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS del carrusel
const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
    // Agrega más rutas de imágenes según sea necesario
  ];
export default function SlideImgs() {
    return (
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} interval={5000}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </Carousel>
      );
}