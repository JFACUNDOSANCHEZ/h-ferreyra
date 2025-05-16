import styles from './HeroSection.module.css';
import cimg from '../../assets/imgPtrs.jpeg';
import cvdo from '../../assets/vdoptrs.mp4';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
        src={cvdo}
        type="video/mp4"
      ></video>

      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <div className={styles.content}>
            <h1>
            <strong>
                PACS RIS SOFTWARE<br />
              </strong>
              PARA RADIOLOGÍA Y DIAGNÓSTICO POR IMÁGENES
            </h1>
            <br /><br />
            <p>Soluciones 100% web, alojadas en la nube o en su institución.</p>
            <button className={styles.button}>Ver mas</button>
          </div>
          <div className={styles.imageContainer}>
            {/* <img src={cimg} alt="Equipos médicos" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
