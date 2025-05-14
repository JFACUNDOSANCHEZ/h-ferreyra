import React from 'react';
import styles from './ButtonAgen.module.css';
import { FaArrowRight } from 'react-icons/fa';

const ButtonAgendar = ({ texto = 'Agende su cita Aquí', onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.boton} onClick={onClick}>
        <FaArrowRight className={styles.icono} />
        <span>{texto}</span>
      </button>
    </div>
  );
};

export default ButtonAgendar;
