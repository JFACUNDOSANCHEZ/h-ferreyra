import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className={styles.footerLinks}>
        <ul>
          <li><a href="/vm-cloud">VM CLOUD</a></li>
          <li><a href="/vm-ris-gestion-erp">VM RIS GESTION ERP</a></li>
          <li><a href="/vm-pacs-vna">VM PACS VNA</a></li>
          <li><a href="/vm-speech">VM SPEECH</a></li>
          <li><a href="/vm-portal-del-paciente">VM PORTAL DEL PACIENTE</a></li>
          <li><a href="/politica-de-privacidad">POLITICA DE PRIVACIDAD</a></li>
          <li><a href="/descargar-vm-remote-support">DESCARGAR VM REMOTE SUPPORT</a></li>
        </ul>
      </div>

      <div className={styles.contactInfo}>
        <p>Email: info@visualmedica.com</p>
        <p>USA: +1 (754) 301 4022</p>
        <p>LATAM: +1 (754) 301 4022</p>
        <p>Argentina: +54 114 962 7501</p>
      </div>

      <div className={styles.footerBottom}>
        <p>VISUAL MEDICA 2023 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
