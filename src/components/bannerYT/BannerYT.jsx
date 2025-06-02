import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './BannerYT.module.css';
import { FaPlayCircle } from 'react-icons/fa'; // Icono para el botón

const BannerYT = () => {
  // Asegúrate de tener un ID de video REAL de YouTube aquí
  const youtubeVideoId = 'YOUR_YOUTUBE_VIDEO_ID'; // <--- ¡REEMPLAZA ESTO!
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&controls=1&showinfo=0&rel=0`;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.banner}>
      <h2 className={styles.mainTitle} data-aos="fade-up">
        Descubre la Integración de Nuestro Software
      </h2>
      <p className={styles.mainSubtitle} data-aos="fade-up" data-aos-delay="100">
        Observa en acción cómo la IA optimiza la interpretación de imágenes y acelera diagnósticos.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.videoWrapper} data-aos="fade-right" data-aos-delay="200">
          <iframe
            width="100%" // Haz que el iframe ocupe todo el ancho del contenedor
            height="100%"
            src={youtubeEmbedUrl}
            title="Integración de Software TRS Cloud"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.textColumn} data-aos="fade-left" data-aos-delay="200">
          <p className={styles.descriptionText}>
            La tecnología de inteligencia artificial integrada en TRS Cloud asiste al personal médico en la interpretación avanzada de imágenes. Esto no solo **acelera los diagnósticos** sino que también **mejora la precisión clínica**, permitiendo una atención al paciente más eficiente y segura.
          </p>
          <button className={styles.actionButton}>
            <FaPlayCircle className={styles.buttonIcon} />
            <span>SOLICITAR DEMO</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerYT;