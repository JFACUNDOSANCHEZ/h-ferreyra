// src/components/WhatsappButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Whatsapp.module.css';

const WhatsappButton = () => {
  const phoneNumber = '5491123456789'; // Reemplaza con tu número en formato internacional (sin +)
  const message = 'Hola, quiero más información';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsappButton;
