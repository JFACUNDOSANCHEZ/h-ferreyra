// import styles from './style.module.css';
// import img1 from '../assets/img1.png'; // Cambiá por tus imágenes reales
// import img2 from '../assets/img2.png';
// import img3 from '../assets/img3.png';
// import img4 from '../assets/img4.png';

// const solutions = [
//   {
//     title: 'VM RIS GESTION ERP',
//     description: 'Administrar cada uno de los procesos y optimizar el flujo de trabajo.',
//     img: img1,
//   },
//   {
//     title: 'VM PACS VNA',
//     description: 'Almacene, visualice, reporte y distribuya todos los estudios de imagen.',
//     img: img2,
//   },
//   {
//     title: 'VM PORTAL DEL PACIENTE',
//     description: 'Los pacientes podrán acceder a su información médica desde cualquier lugar.',
//     img: img3,
//   },
//   {
//     title: 'VM SPEECH',
//     description: 'La Inteligencia Artificial unida al vocabulario médico permiten reportes más ágiles.',
//     img: img4,
//   },
// ];

// export default function DiagnosticSolutions() {
//   return (
//     <section className={styles.diagnosticSection}>
//       <h2 className={styles.title}>Soluciones para centro de diagnóstico por imágenes</h2>
//       <p className={styles.description}>
//         En <strong>Visualmedica</strong>, ofrecemos una gama completa de soluciones tecnológicas para optimizar la gestión de <strong>centros de diagnóstico por imágenes</strong>, mejorando la eficiencia, seguridad y accesibilidad en cada proceso.
//       </p>
//       <p className={styles.description}>
//         En conjunto, nuestras soluciones están diseñadas para mejorar la productividad de su centro de diagnóstico por imágenes, reducir costos y ofrecer un servicio de calidad tanto para profesionales médicos como para pacientes.
//       </p>

//       <div className={styles.grid}>
//         {solutions.map((item, idx) => (
//           <div className={styles.card} key={idx}>
//             <img src={item.img} alt={item.title} className={styles.image} />
//             <h3 className={styles.cardTitle}>{item.title}</h3>
//             <p className={styles.cardDesc}>{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
