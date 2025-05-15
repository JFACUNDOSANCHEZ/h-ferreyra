// Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <h3 className={styles.footerTitle}>TRS</h3>
          <p className={styles.footerSubtitle}>TECNOLOGÍA EN RADIOLOGÍA</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className={styles.footerRight}>
          {/* <ul className={styles.footerLinks}>
            <li>VM CLOUD</li>
            <li>VM RIS GESTION ERP</li>
            <li>VM PACS VNA</li>
            <li>VM SPEECH</li>
            <li>VM PORTAL DEL PACIENTE</li>
            <li>POLITICA DE PRIVACIDAD</li>
            <li>DESCARGAR VM REMOTE SUPPORT</li>
          </ul> */}
          <div className={styles.contactInfo}>
            <p>Email: info@visualmedica.com</p>
            <p>USA: +1 (754) 301 4022</p>
            <p>LATAM: +1 (754) 301 4022</p>
            <p>Argentina: +54 114 962 7501</p>
            <a href="https://wa.me/541149627501" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className={styles.whatsappIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>TRS 2025 All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
