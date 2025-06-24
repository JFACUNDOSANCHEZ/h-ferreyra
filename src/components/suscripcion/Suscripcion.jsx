// src/components/SubscriptionCTA/SubscriptionCTA.jsx
import React from 'react';
import styles from './Suscripcion.module.css'; // Importa los estilos como un objeto
import vdopto from '../../assets/vdopto.mp4';

// Importa los iconos de react-icons/fa
import {
  FaFlask,        // Para Precisión (laboratorio/ciencia)
  FaTachometerAlt, // Para Eficiencia (velocímetro)
  FaCloudUploadAlt, // Para Acceso en la Nube
  FaLock,         // Para Seguridad y Privacidad
  FaArrowRight    // Para el botón de "Ver Planes"
} from 'react-icons/fa';

const SubscriptionCTA = () => {
  return (
    <section id="subscription-cta" className={styles.subscriptionSection}>
      <div className={styles.subscriptionContainer}>
        <div className={styles.subscriptionContent}>
          {/* Título principal de la sección */}
          <h2 className={styles.mainTitle}>Transforma tu Diagnóstico con IA. Suscríbete Hoy.</h2>
          {/* Subtítulo principal */}
          <p className={styles.mainSubtitle}>Accede a una suite completa de herramientas de IA para análisis de imágenes médicas. Precisión, eficiencia y futuro en tus manos.</p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <div className={styles.iconContainer}><FaFlask /></div> {/* Usamos el icono importado */}
              <h3>Precisión sin Precedentes</h3>
              <p>Análisis de imágenes con algoritmos de IA de vanguardia.</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconContainer}><FaTachometerAlt /></div> {/* Usamos el icono importado */}
              <h3>Eficiencia Operativa</h3>
              <p>Optimiza tu flujo de trabajo y ahorra tiempo valioso.</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconContainer}><FaCloudUploadAlt /></div> {/* Usamos el icono importado */}
              <h3>Acceso Instantáneo</h3>
              <p>Plataforma basada en la nube, disponible 24/7 desde cualquier dispositivo.</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconContainer}><FaLock /></div> {/* Usamos el icono importado */}
              <h3>Seguridad y Privacidad</h3>
              <p>Protegemos tus datos y los de tus pacientes bajo los más altos estándares.</p>
            </div>
          </div>

          <div className={styles.callToAction}>
            {/* Botón Primario: Consistente con tu paleta de azules */}
            <a href="#pricing" className={`${styles.btn} ${styles.colorPrimary}`}>
              Ver Planes y Precios <FaArrowRight className={styles.btnIcon} />
            </a>
            {/* Botón Secundario: Consistente con tu paleta */}
            <a href="#demo" className={`${styles.btn} ${styles.btnSecondary}`}>
              Solicitar Demo Gratuita
            </a>
          </div>

          <p className={styles.guaranteeText}>¿Dudas? Nuestro equipo de soporte está listo para ayudarte. <a href="#contact" className={styles.contactLink}>Contáctanos</a></p>
        </div>

        <div className={styles.subscriptionImage}>
          <video autoPlay muted loop playsInline className={styles.ctaVideo}>
            <source src={vdopto} type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;