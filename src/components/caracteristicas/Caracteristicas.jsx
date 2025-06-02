import React from 'react';
// Importa el hook useInView
import { useInView } from 'react-intersection-observer';

// Importa los iconos que necesites (asegúrate de que todos estén aquí)
import {
  FaUserPlus,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaCloud,
  FaShieldAlt,
  FaUsers
} from 'react-icons/fa';
import styles from './Caracteristicas.module.css';

const features = [
  {
    icon: <FaUserPlus />,
    title: 'Alta de Pacientes',
    description: 'Simplifica el registro y gestión de nuevos pacientes con nuestra plataforma intuitiva.',
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Agendamiento de Citas',
    description: 'Gestiona la disponibilidad de tus consultorios y programa citas de forma eficiente.',
  },
  {
    icon: <FaCloud />,
    title: 'Acceso Universal a Estudios (Cloud)',
    description: 'Visualiza, comparte y almacena estudios médicos de forma segura en la nube, accesibles en todo momento y lugar.',
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: 'Facturación y Cobros',
    description: 'Optimiza el proceso de facturación y el seguimiento de cobros con nuestro sistema integrado.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Seguridad de Datos',
    description: 'Garantizamos la privacidad y seguridad de toda la información de tus pacientes.',
  },
  {
    icon: <FaUsers />,
    title: 'Red de Profesionales',
    description: 'Conecta con otros profesionales y amplía tu red de referencias médicas.',
  },
];

const Caracteristicas = () => {
  // Configura el observador para el grid de características
  // 'ref' se asignará al elemento que queremos observar
  // 'inView' será true cuando el elemento esté en el viewport
  // 'triggerOnce: true' asegura que la animación solo se active una vez
  const { ref: featuresGridRef, inView: featuresGridInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // El elemento debe estar 20% visible para activar
  });

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.mainTitle}>Nuestras Soluciones Clave</h2>
      <p className={styles.mainSubtitle}>Descubre las funcionalidades que transformarán tu práctica médica.</p>

      {/* Asignamos la ref al div que contiene las cards */}
      <div
        ref={featuresGridRef}
        className={`${styles.featuresGrid} ${featuresGridInView ? styles.featuresGridVisible : ''}`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.featureCard} ${featuresGridInView ? styles.featureCardAnimated : ''}`}
            // Opcional: Para un retraso escalonado, puedes añadir un style inline
            style={{ transitionDelay: featuresGridInView ? `${index * 0.1}s` : '0s' }}
          >
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Caracteristicas;