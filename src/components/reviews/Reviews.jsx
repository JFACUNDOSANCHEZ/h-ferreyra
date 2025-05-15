// Reviews.js
import React from 'react';
import styles from './Reviews.module.css';

const reviews = [
  {
    id: 1,
    name: 'Juan Pérez',
    review: '"Desde que implementamos este sistema, nuestros tiempos de respuesta se redujeron casi a la mitad. La visualización de estudios es rápida, intuitiva y nos permite colaborar fácilmente con otros especialistas. Una herramienta imprescindible para nuestro trabajo diario."',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // URL de la imagen
  },
  {
    id: 2,
    name: 'María López',
    review: '"Lo que más valoro es la facilidad con la que puedo acceder a los estudios desde cualquier terminal. El sistema es ágil, estable y realmente pensado para el entorno hospitalario. La curva de aprendizaje fue muy corta."',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/2.jpg', // URL de la imagen
  },
  {
    id: 3,
    name: 'Carlos Gómez',
    review: 'Hemos logrado una mayor eficiencia en todo el circuito de trabajo. El software nos permitió digitalizar procesos que antes eran manuales, y ahora tenemos trazabilidad completa de cada estudio. Estamos más organizados y los pacientes reciben sus diagnósticos en menos tiempo.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/3.jpg', // URL de la imagen
  },
];

const Reviews = () => {
  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.title}>Lo que dicen nuestros usuarios</h2>
      <br /><br /><br />
      <div className={styles.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.userInfo}>
              <img
                src={review.image}
                alt={review.name}
                className={styles.userImage}
              />
              <h3 className={styles.reviewerName}>{review.name}</h3>
            </div>
            <div className={styles.rating}>
              {'★'.repeat(review.rating)}{' '}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <br />
            <p className={styles.reviewText}>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
