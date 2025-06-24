import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaCloud,
  FaHospitalAlt,
  FaCalendarCheck,
  // Podrías añadir más iconos específicos si los necesitas para otras estadísticas
} from 'react-icons/fa';

import styles from './statsSection.module.css';

const stats = [
  { icon: <FaCloud />, value: 300, suffix: 'K', text: 'Estudios en Nube' }, // Texto más conciso
  { icon: <FaHospitalAlt />, value: 2000, text: 'Centros Asociados' }, // Texto más conciso
  { icon: <FaCalendarCheck />, value: 7, suffix: 'M', text: 'Turnos Gestionados' }, // Texto más conciso
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.statsSection}>
      <div className={styles.contentHeader}>
        <h2 className={styles.mainTitle} data-aos="fade-up">Nuestros Logros en Cifras</h2> {/* Título más neutro */}
        <p className={styles.mainSubtitle} data-aos="fade-up" data-aos-delay="100">
          Orgullosos de nuestro impacto en la optimización de procesos médicos.
        </p>
      </div>

      <div className={styles.statsContainer} ref={ref}>
        {stats.map((item, index) => (
          <div
            key={index}
            className={styles.statCard} // Volvemos a 'statCard' para reflejar el diseño de tarjeta
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          >
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.count}>
              {inView && (
                <CountUp
                  end={item.value}
                  duration={2.5}
                  separator="."
                  suffix={item.suffix || ''}
                />
              )}
            </div>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;