import React from 'react';
import cimg from '../../assets/img2ptrs.png'
import styles from './Banner.module.css'; // Asegúrate de tener el archivo CSS en la misma carpeta

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img
        src={cimg}
        alt="Banner VisualMedica"
        className={styles.bannerImage}
      />
    
       
    </div>
  );
};

export default Banner;
