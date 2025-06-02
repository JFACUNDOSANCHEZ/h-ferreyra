// src/components/Certificaciones.jsx
import React from 'react';
import Slider from 'react-slick';
import styles from './Certificaciones.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const certifications = [
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/logos-visual-3.png.webp', alt: 'Certificación ISO e IQNet' },
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/2.png.webp', alt: 'Certificación FDA Cleared' },
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/certificaciones-pagina-web-1.png.webp', alt: 'Estándar DICOM' },
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/logos-visual-3.png.webp', alt: 'Certificación HL7 International' },
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/7.png.webp', alt: 'Certificación HIPAA Compliant' },
];

const Certificaciones = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.certSection}>
      {/* CAMBIO AQUÍ: Título más corto */}
      <h2 className={styles.mainTitle}>Certificaciones</h2>
      {/* CAMBIO AQUÍ: Subtítulo más corto */}
      <p className={styles.mainSubtitle}>Nuestro compromiso con la calidad y la seguridad.</p>

      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.slide}>
              <img src={cert.src} alt={cert.alt} className={styles.certLogo} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certificaciones;