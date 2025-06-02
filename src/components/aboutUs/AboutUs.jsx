// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import styles from './AboutUs.module.css';
import { FaArrowRight } from 'react-icons/fa';

// Importa los componentes de animación
import { Fade, Slide } from 'react-awesome-reveal'; // Importa Fade y Slide

import nstvdo from '../../assets/nstvdo.mp4';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsPage}>

      {/* Hero Section con Video (sin cambios relevantes para esta animación) */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Innovando el Diagnóstico Médico</h1>
          <p className={styles.heroSubtitle}>
            En VisualMedica, estamos comprometidos con transformar la atención médica a través de soluciones tecnológicas avanzadas y accesibles.
          </p>
          {/* <a href="#contact" className={`${styles.btn} ${styles.colorPrimary}`}>
            Contáctanos Hoy <FaArrowRight className={styles.btnIcon} />
          </a> */}
        </div>
        <div className={styles.heroVideoBackground}>
          <video autoPlay muted loop playsInline className={styles.heroVideo}>
            <source src={nstvdo} type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
      </section>

      {/* Sección de Nuestra Historia / Misión con Animación */}
      {/* Usamos Slide para que venga de un lado, o Fade para una aparición suave */}
      <Slide triggerOnce direction="left" duration={1000}> {/* 'left' para de izquierda a derecha */}
      {/* O si prefieres un simple fade-in: <Fade triggerOnce duration={1000}> */}
        <section className={styles.missionSection}>
          <div className={styles.missionContainer}>
            <div className={styles.missionContent}>
              <h2 className={styles.sectionTitle}>Nuestra Historia y Propósito</h2>
              <p className={styles.sectionText}>
                VisualMedica nació de la visión de un grupo de profesionales médicos y tecnólogos, unidos por un objetivo común: hacer que el diagnóstico por imágenes sea más eficiente, preciso y seguro para todos. Desde nuestros inicios, nos hemos dedicado a la investigación y el desarrollo de herramientas innovadoras que impulsan la telemedicina y la inteligencia artificial en el sector de la salud.
              </p>
              <p className={styles.sectionText}>
                Nuestra misión es empoderar a los profesionales de la salud con tecnología de vanguardia, facilitando diagnósticos rápidos y confiables, y así contribuir directamente a mejorar la calidad de vida de los pacientes. Creemos firmemente en un futuro donde la tecnología y la medicina trabajen de la mano para superar los desafíos actuales.
              </p>
            </div>
            {/* Si quieres una imagen ESTÁTICA aquí, puedes volver a añadirla */}
            {/* <div className={styles.missionImageContainer}>
              <img src={aboutUsMission} alt="Visión de futuro" className={styles.missionImage} />
            </div> */}
          </div>
        </section>
      </Slide> {/* Cierra el componente de animación */}


      {/* Sección de Nuestros Valores (puedes añadir animaciones aquí también) */}
      <Fade triggerOnce duration={1000} delay={200}> {/* Un fade-in para esta sección */}
        <section className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas formas de mejorar y transformar el diagnóstico médico.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Integridad</h3>
              <p>Operamos con la más alta ética y transparencia en cada interacción.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Compromiso</h3>
              <p>Dedicados a la excelencia y a superar las expectativas de nuestros usuarios.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Colaboración</h3>
              <p>Fomentamos el trabajo en equipo y la creación de redes con la comunidad médica.</p>
            </div>
          </div>
        </section>
      </Fade>

      {/* CTA final Section (puedes añadir animaciones aquí también) */}
      <Fade triggerOnce duration={1000} delay={400}> {/* Otro fade-in para el CTA final */}
        <section className={styles.finalCtaSection}>
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>¿Listo para transformar tu práctica?</h2>
            <p className={styles.finalCtaSubtitle}>Únete a la revolución del diagnóstico médico con VisualMedica.</p>
            <a href="#contact" className={`${styles.btn} ${styles.colorPrimary}`}>
              Descubre Más <FaArrowRight className={styles.btnIcon} />
            </a>
          </div>
        </section>
      </Fade>

    </div>
  );
};

export default AboutUs;