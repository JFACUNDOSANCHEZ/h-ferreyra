import styles from './HeroSection.module.css';
import cimg from '../../assets/imgPtrs.jpeg' 
// Cambia esto por tu imagen real

export default function HeroSection() {
  return (
    <section className={styles.hero}>
        <div className={styles.overlay}>
 <div className={styles.overlayContent}>

      <div className={styles.content}>
        <h1>
          PACS RIS <br /> SOFTWARE<br />
          PARA RADIOLOGÍA Y DIAGNÓSTICO POR IMÁGENES
        </h1>
        <br /><br />
        <p>Soluciones 100% web, alojadas en la nube o en su institución.</p>
        <button className={styles.button}>LEER MÁS</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={cimg} alt="Equipos médicos" />
 </div>
      </div>
        </div>
    </section>
  );
}
