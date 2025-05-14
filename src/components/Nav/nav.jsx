import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><img className={styles.imge} src="https://visualmedica.com/wp-content/webp-express/webp-images/uploads/2023/03/VM_logo1.png.webp" alt="" /></div>
      <ul className={styles.navLinks}>
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#vmcloud">VM CLOUD</a></li>
        <li><a href="#soluciones">SOLUCIONES VM</a></li>
        <li><a href="#nosotros">NOSOTROS</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contacto">CONTACTO</a></li>
      </ul>
    </nav>
  );
}
