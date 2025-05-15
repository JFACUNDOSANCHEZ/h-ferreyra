import React from 'react';
import styles from './BannerYT.module.css';

const BannerYT = () => {
  return (
    <section className={styles.banner}>
          <h2 className={styles.bh2}>
            INTEGRACIÓN DE NUESTRO SOFTRWARE <span className={styles.bold}></span>
          </h2>
      <div className={styles.content}>
        <div className={styles.videoWrapper}>
        <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/A1DN7oQWUVA"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>



        </div>
        <div className={styles.textWrapper}>
          <p
          className={styles.bp}
          >
            La tecnología de inteligencia artificial ayuda al personal médico en la interpretación
            de imágenes, acelerando los diagnósticos y mejorando la precisión clínica.
          </p>
          <button className={styles.button}>SOLICITAR DEMO</button>
        </div>
      </div>
      <br /><br />
    </section>
  );
};

export default BannerYT;
