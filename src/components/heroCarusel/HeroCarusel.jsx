import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './heroCarusel.module.css';
const slides = [
  {
     image: 'https://www.maimonides.edu/wp-content/uploads/2020/07/20200713-diagnostico-por-imagenes.jpg',
    title: 'RIS, PACs, EN LA NUVE',
    description: 'Gestione sus estudios médicos y operaciones con total libertad desde cualquier lugar, en cualquier momento',
    button: 'Saber más'
  }
  ,
  {
 image: 'https://www.ndximaging.com/wp-content/uploads/MRI-Scan-Reads-And-Interpretations-From-20-Per-Study-October-27-2022-National-Diagnostic-Imaging-Teleradiology-Company-Cleveland-Ohio.jpg',
 title: 'INTEGRACIÓN, SOPORTE 24HS , DEMOS',
 description: 'Integración sencilla con su sistema actual, asistencia técnica permanente y demos personalizadas para su equipo',
 button: 'Ver detalles'
},
  {
    image: 'https://images.pexels.com/photos/13176358/pexels-photo-13176358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'SEA PARTE DE NUESTRA COMUNIDAD TRSCLOUD',
    description: 'Gestione sus estudios médicos y operaciones con total libertad desde cualquier lugar, en cualquier momento',
    button: 'Comprar ahora'
  }
  ,
  
   {
     image: 'https://images.pexels.com/photos/5452300/pexels-photo-5452300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     title: 'TENGA AUTONOMIA Y CONTROL TOTAL',
     description: 'Acceda a su información médica de forma segura, rápida y sin límites desde nuestra plataforma cloud',
     button: 'Ver detalles'
   }
    ,
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
         {/* <button>{slide.button}</button>  */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}