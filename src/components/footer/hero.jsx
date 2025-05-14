import styles from './HeroSection.module.css';
 // Cambia esto por tu imagen real

export default function HeroSection() {
  return (
    <section className={styles.hero}>
        <div className={styles.overlay}>
 <div className={styles.overlayContent}>

      <div className={styles.content}>
        <h1>
          PACS RIS SOFTWARE<br />
          PARA RADIOLOGÍA Y DIAGNÓSTICO POR IMÁGENES
        </h1>
        <br /><br />
        <p>Soluciones 100% web, alojadas en la nube o en su institución.</p>
        <button className={styles.button}>LEER MÁS</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={'https://visualmedica.com/wp-content/uploads/2025/03/RIS-PACS-1_11zon.webp'} alt="Equipos médicos" />
 </div>
      </div>
        </div>
    </section>
  );
}
