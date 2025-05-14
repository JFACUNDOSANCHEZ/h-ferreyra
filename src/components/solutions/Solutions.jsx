// src/components/SolutionsSection.jsx
import styles from './SolutionsSection.module.css';

const solutions = [
  {
    title: 'VM RIS GESTION ERP',
    text: 'Administrar cada uno de los procesos y optimizar el flujo de trabajo con el mejor sistema de gestión integral. Desde el turno a la facturación.',
    image: 'https://visualmedica.com/wp-content/uploads/2025/03/Dr.-Jorge-Sierra-2_11zon_11zon.webp', // reemplazá con la ruta correcta
  },
  {
    title: 'VM PACS VNA',
    text: 'Almacene, visualice, reporte y distribuya todos los estudios de su institución en forma local o remota.',
    image: 'https://visualmedica.com/wp-content/uploads/2025/03/RIS-PACS-1-1_11zon-1_11zon.webp',
  },
  {
    title: 'VM PORTAL PACIENTE',
    text: 'Los pacientes podrán acceder a todos los estudios realizados en su institución en forma rápida, segura y compartirlos con su médico referente.',
    image: 'https://visualmedica.com/wp-content/uploads/2025/03/7_11zon.webp',
  },
  {
    title: 'VM SPEECH',
    text: 'La Inteligencia Artificial unida al vocabulario médico permiten precisión en el reconocimiento.',
    image: 'https://visualmedica.com/wp-content/uploads/2025/03/8_11zon.webp',
  },
];

export default function SolutionsSection() {
  return (
    <section className={styles.solutionsSection}>
      <h2 className={styles.title}>SOLUCIONES VM</h2>
      <p className={styles.subtitle}>
        Todas las soluciones necesarias para su centro o servicio de diagnóstico por imágenes, instalados en la nube o en la institución.
      </p>
      <div className={styles.cardsContainer}>
        {solutions.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
