import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  FaAccusoft,
  FaAdn,
  FaAlipay
} from 'react-icons/fa';
import styles from './StatsSection.module.css';

const stats = [
  { icon: <FaAccusoft />, value: 300, suffix: 'K', text: 'Estudios/mes en nube' },
  { icon: <FaAdn />, value: 2000, text: 'Instalaciones en Instituciones' },
  { icon: <FaAlipay />, value: 7, suffix: 'M', text: 'De turnos procesados' },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className={styles.statsSection} ref={ref}>
      <br /><br />
      <div className={styles.statsContainer}>
        {stats.map((item, index) => {
          const positionClass =
            index === 0
              ? styles.top
              : index === 1
              ? styles.bottomLeft
              : styles.bottomRight;

          return (
            <div key={index} className={`${styles.statCard} ${positionClass}`}>
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
              <div className={styles.icon}>{item.icon}</div>
              <p className={styles.text}>{item.text}</p>
            </div>
          );
        })}
      </div>
      <br /><br />
    </section>
  );
};

export default StatsSection;
