import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa tus estilos CSS Modules específicos
import styles from './heroCarusel.module.css';

// Definición de los datos para cada slide del carrusel
const slides = [
  {
    image: 'https://images.pexels.com/photos/13176358/pexels-photo-13176358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'RIS, PACs, EN LA NUBE',
    description: 'Gestione sus estudios médicos y operaciones con total libertad desde cualquier lugar, en cualquier momento',
    button: 'Saber más'
  },
  {
    image: 'https://images.pexels.com/photos/5452300/pexels-photo-5452300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'INTEGRACIÓN, SOPORTE 24HS , DEMOS',
    description: 'Integración sencilla con su sistema actual, asistencia técnica permanente y demos personalizadas para su equipo',
    button: 'Ver detalles'
  },
  {
    image: 'https://images.pexels.com/photos/13176358/pexels-photo-13176358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'SEA PARTE DE NUESTRA COMUNIDAD TRSCLOUD',
    description: 'Gestione sus estudios médicos y operaciones con total libertad desde cualquier lugar, en cualquier momento',
    button: 'Comprar ahora'
  },
  {
    image: 'https://images.pexels.com/photos/5452300/pexels-photo-5452300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'TENGA AUTONOMÍA Y CONTROL TOTAL',
    description: 'Acceda a su información médica de forma segura, rápida y sin límites desde nuestra plataforma cloud',
    button: 'Ver detalles'
  },
];

// Componente principal del carrusel
export default function HeroCarousel() {
  return (
    <Swiper
      // Módulos de Swiper que vamos a utilizar
      modules={[Navigation, Pagination, Autoplay]}
      
      // Configuración de autoplay (avanza cada 4 segundos)
      autoplay={{ delay: 4000, disableOnInteraction: false }} // disableOnInteraction: false permite que siga el autoplay después de interactuar
      
      // Configuración de la paginación (los puntos en la parte inferior)
      pagination={{ clickable: true }} // Hace que los puntos sean clickeables para navegar
      
      // Habilita las flechas de navegación
      navigation
      
      // Habilita el modo loop (el carrusel se repite infinitamente)
      loop
      
      // Aplica la clase CSS del módulo al contenedor principal del Swiper
      className={styles.carousel}
    >
      {/* Mapea sobre el array de 'slides' para crear cada diapositiva */}
      {slides.map((slide, index) => (
        <SwiperSlide key={index}> {/* 'key' es importante para React al mapear listas */}
          <div
            // Aplica la clase CSS del módulo para cada slide
            className={styles.slide}
            // Establece la imagen de fondo dinámicamente desde los datos del slide
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}>
              {/* Título de la diapositiva */}
              <h2>{slide.title}</h2>
              {/* Descripción de la diapositiva */}
              <p>{slide.description}</p>
              {/* Botón de la diapositiva (descomentado para que se muestre y anime) */}
              
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}