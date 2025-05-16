import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* <img className={styles.imge} src="https://static.vecteezy.com/system/resources/previews/009/609/204/non_2x/trs-circle-letter-logo-design-with-circle-and-ellipse-shape-trs-ellipse-letters-with-typographic-style-the-three-initials-form-a-circle-logo-trs-circle-emblem-abstract-monogram-letter-mark-vector.jpg" alt="" /> */}
        <h2>T R S</h2>
        </div>
      <ul className={styles.navLinks}>
        <li className={styles.menuItem}><a href="#inicio">INICIO</a></li>
        <li className={styles.menuItem}><a href="#vmcloud">VM CLOUD</a></li>
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
  );
}
