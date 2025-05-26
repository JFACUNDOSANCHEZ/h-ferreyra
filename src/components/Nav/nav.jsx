import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
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
    <p>Atención personalizada | Tel: 0800-333-0000</p>
    <div className={styles.socialIcons}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    </div>
  </div>
)}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          <h2>T R S</h2>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.menuItem}><a href="#inicio">INICIO</a></li>
          <li className={styles.menuItem}><a href="#vmcloud">PRODUCTO</a></li>
          <li className={styles.menuItem}>
            <a href="#soluciones">SOLUCIONES VM</a>
            <ul className={styles.submenu}>
              <li><a href="#sol1">S 1</a></li>
              <li><a href="#sol2">S 2</a></li>
              <li><a href="#sol3">S 3</a></li>
            </ul>
          </li>
          <li className={styles.menuItem}><a href="#nosotros">NOSOTROS</a></li>
          <li className={styles.menuItem}><a href="#contacto">CONTACTO</a></li>
        </ul>
      </nav>
    </>
  );
}
