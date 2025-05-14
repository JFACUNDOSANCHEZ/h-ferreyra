// src/components/Certificaciones.jsx
import React from 'react';
import styles from './Certificaciones.module.css';

const certifications = [
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/logos-visual-3.png.webp', alt: 'ISO + IQNet' },
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/2.png.webp', alt: 'FDA Cleared' },
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/certificaciones-pagina-web-1.png.webp', alt: 'DICOM' },
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/7.png.webp', alt: 'HIPAA Compliant' },
  { src: 'https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/logos-visual-3.png.webp', alt: 'HL7 International' },
];

const Certificaciones = () => {
  return (
    <section className={styles.certSection}>
      <h2 className={styles.title}>CERTIFICACIONES</h2>
      <div className={styles.logoGrid}>
        {certifications.map((cert, index) => (
          <img
            key={index}
            src={cert.src}
            alt={cert.alt}
            className={styles.certLogo}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificaciones;
