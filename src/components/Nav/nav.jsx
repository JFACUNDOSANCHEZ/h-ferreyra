// src/components/Navbar/Navbar.jsx
import styles from './NavBar.module.css';
import { useEffect, useState } from 'react';
import { FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
// Asumo que trsi.png es el logo principal para el navbar, no para el preNav
import trsi from '../../assets/trsi.png'; // Asegúrate de que la ruta sea correcta

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Puedes ajustar el valor de 100px para cuándo se "esconde" el preNav
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* El preNav se esconde cuando se hace scroll (si scrolled es true, se añade prenavHidden) */}
      <div className={`${styles.preNav} ${scrolled ? styles.prenavHidden : ''}`}>
        <p>Atención Tel: 0800-333-0000</p>
        <div className={styles.socialIcons}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.twitter}
          >
            <FaTwitter size={20} /> {/* Tamaño ajustado para ser menos dominante */}
          </a>
          <a
            href="https://www.youtube.com/@TRSCLOUD" // Usando una URL de YouTube más plausible
            target="_blank"
            rel="noopener noreferrer"
            className={styles.youtube}
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://wa.me/549351XXXXXXXX" // ¡IMPORTANTE! Reemplaza con tu número de WhatsApp real, incluyendo el código de país. Ejemplo para Argentina: 5493511234567
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Navbar principal. Su 'top' se ajusta si el preNav está visible o no */}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          {/* Si trsi.png es un logo de imagen, usa <img> */}
          <img src={trsi} alt="TRS Logo" className={styles.imge} />
          {/* Si es solo texto como "T R S", usa <h2> */}
          {/* <h2>T R S</h2> */}
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.menuItem}><a href="/">INICIO</a></li>
          <li className={styles.menuItem}><a href="/vmcloud">SOLUCIONES VM</a></li>
          {/* Este <li> está vacío, asumo que era para un submenú o se eliminó */}
          <li className={styles.menuItem}></li> 
          <li className={styles.menuItem}><a href="/nosotros">NOSOTROS</a></li> {/* Corregido a /nosotros si es una ruta */}
          <li className={styles.menuItem}><a href="/contacto">CONTACTO</a></li> {/* Corregido a /contacto si es una ruta */}
        </ul>
      </nav>
    </>
  );
}