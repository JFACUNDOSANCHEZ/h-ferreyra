// src/components/SolutionsSection.jsx
import styles from './SolutionsSection.module.css';

const solutions = [
  {
    title: ' Tomografía Computada',
    text: ' Alta resolución para diagnóstico preciso. Tecnología multislice',
    image: 'https://media.istockphoto.com/id/1828699365/es/vector/icono-de-esc%C3%A1ner-de-resonancia-magn%C3%A9tica-y-tomograf%C3%ADa-computarizada-ilustraci%C3%B3n-de-l%C3%ADnea.jpg?s=612x612&w=0&k=20&c=PrWu9SwYGMTrqGSM4hEy5wU3esgomGys0qDK48yXv08=', // reemplazá con la ruta correcta
  },
  {
    title: 'Resonancia Magnética',
    text: ' Estudios detallados sin radiación ionizante.',
    image: 'https://static.vecteezy.com/system/resources/previews/005/242/944/non_2x/phone-icon-telephone-icon-symbol-in-hand-for-app-and-messenger-free-vector.jpg',
  },
  {
    title: 'Visualización Digital de Imágenes',
    text: 'Acceso inmediato a estudios desde cualquier lugar',
    image: 'https://us.123rf.com/450wm/toxa2x2/toxa2x22211/toxa2x2221100068/193927182-icono-de-silueta-de-medicina-digital-en-l%C3%ADnea-m%C3%A9dico-en-computadora-atenci%C3%B3n-m%C3%A9dica-en-l%C3%ADnea-glifo.jpg?ver=6',
  },
  {
    title: 'Diagnóstico Remoto',
    text: 'La Inteligencia Artificial unida al vocabulario médico permiten precisión en el reconocimiento.',
    image: 'https://img.freepik.com/vector-premium/vector-contorno-icono-sonografo-dispositivo-clinico_98396-71987.jpg',
  },
];

export default function SolutionsSection() {
  return (
    <div className={styles.solutionsWrapper}>

    <section className={styles.solutionsSection}>
    {/* <video autoPlay loop muted playsInline className={styles.videoBackground}>
      <source src={videoBg} type="video/mp4" />
      Tu navegador no soporta video HTML5.
    </video> */}
      <h2 className={styles.title}>SOLUCIONES DIGITALES</h2>
      <br />
     
    <p className={styles.subtitle}>
       Software con tecnología médica avanzada para diagnósticos más rápidos, seguros y desde cualquier lugar.
      </p> 
      <br />
      <br />
     
      <div className={styles.cardsContainer}>
        {solutions.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <br /> <br />
            <img src={item.image} alt={item.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
      <br />
    </section>
  </div>
  );
}
