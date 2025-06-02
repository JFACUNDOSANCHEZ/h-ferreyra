// src/components/ButtonAgen/CallToActionSection.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom'; // ¡Ya NO necesitamos Link si vamos a WhatsApp!
import styles from './ButtonAgen.module.css';
import { FaArrowRight } from 'react-icons/fa';

const CallToActionSection = () => {
  const mainTitle = "¿Listo para Dar el Siguiente Paso?";
  const mainDescription = "Contacta a nuestro equipo para descubrir cómo TRS Cloud puede transformar la gestión de tu centro médico hoy mismo.";

  // --- CONFIGURACIÓN DE WHATSAPP ---
  const whatsappNumber = '5493512255760'; // Reemplaza con tu número de WhatsApp real (ej. 5493511234567 para Argentina)
                                         // ¡IMPORTANTE! Sin '+' al inicio, sin espacios, sin guiones.
  const whatsappMessage = encodeURIComponent('¡Hola! Estoy interesado en los servicios de TRS Cloud y me gustaría saber más.'); // Mensaje predefinido, codificado para URL

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.mainTitle} data-aos="fade-up">{mainTitle}</h2>
          <p className={styles.mainDescription} data-aos="fade-up" data-aos-delay="100">{mainDescription}</p>

          {/* Botón de Llamada a la Acción para WhatsApp */}
          <div className={styles.buttonWrapper} data-aos="fade-up" data-aos-delay="200">
            {/* Usamos una etiqueta <a> con href para el enlace de WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"          // Abrir en una nueva pestaña
              rel="noopener noreferrer" // Seguridad para _blank
              className={styles.actionButton} // Aplica tus estilos de botón directamente al <a>
            >
              <span>CONTACTAR </span> {/* Texto del botón más específico */}
              <FaArrowRight className={styles.buttonIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;