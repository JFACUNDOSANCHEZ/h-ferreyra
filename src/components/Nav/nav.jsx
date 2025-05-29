import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import { FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Puedes ajustar el valor
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     {!scrolled && (
<div className={styles.preNav}>
  <p>Atención Tel: 0800-333-0000</p>
  <div className={styles.socialIcons}>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.twitter}
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.youtube}
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        <FaWhatsapp size={24} />
      </a>
  </div>
</div>
)}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          <h2>T R S</h2>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.menuItem}><a href="/">INICIO</a></li>
          <li className={styles.menuItem}><a href="/vmcloud">SOLUCIONES VM</a></li>
          <li className={styles.menuItem}>
          
          </li>
          <li className={styles.menuItem}><a href="#nosotros">NOSOTROS</a></li>
          <li className={styles.menuItem}><a href="#contacto">CONTACTO</a></li>
        </ul>
      </nav>
    </>
  );
}