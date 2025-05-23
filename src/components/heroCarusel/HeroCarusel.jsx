// HeroCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './heroCarusel.module.css';

const slides = [
  {
     image: 'https://www.maimonides.edu/wp-content/uploads/2020/07/20200713-diagnostico-por-imagenes.jpg',
    title: 'SOLUCIONES DE VOZ EN LA NUBE',
    description: 'Softswitch VSC y Centrex IP Multiempresa.',
    button: 'Saber más'
  }
  ,
  {
    image: 'https://images.pexels.com/photos/13176358/pexels-photo-13176358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'AUTONOMÍA QUE SOLO EL LÍDER PUEDE ENTREGAR',
    description: 'Más de 450 ISPs utilizan nuestros servicios.',
    button: 'Comprar ahora'
  }
  ,
  // {
  // //   image: 'https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   title: 'PLATAFORMA INNOVADORA PARA COMUNICACIÓN',
  //   description: 'Conecte su negocio con el mundo.',
  //   button: 'Ver detalles'
  // }
];

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      navigation
      loop
      className={styles.carousel}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className={styles.slide}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
         <button>{slide.button}</button> 
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
