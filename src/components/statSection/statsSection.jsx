import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaCloudUploadAlt, FaHospitalAlt, FaCalendarCheck, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './StatsSection.module.css';

const stats = [
  { icon: <FaCloudUploadAlt />, value: 300, suffix: 'K', text: 'Estudios/mes en nube' },
  { icon: <FaHospitalAlt />, value: 2000, text: 'Instalaciones en Instituciones' },
  { icon: <FaCalendarCheck />, value: 7, suffix: 'M', text: 'De turnos procesados' },
  { icon: <FaMapMarkerAlt />, value: 16, text: 'Países con instalaciones' },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.3,     // 30% del componente visible
  });

  return (
    <section className={styles.statsSection} ref={ref}>
      <br /><br />
      <div className={styles.statsContainer}>
        {stats.map((item, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.count}>
              {inView && (
                <CountUp
                  end={item.value}
                  duration={2}
                  separator=","
                  suffix={item.suffix || ''}
                />
              )}
            </div>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
      <br /><br />
    </section>
  );
};

export default StatsSection;
