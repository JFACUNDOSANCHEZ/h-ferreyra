// src/components/ProductShowcase/ProductShowcase.jsx
import React from 'react';
import styles from './ProductShowcase.module.css'; // Importa los estilos como un objeto

// Iconos/Ilustraciones (ejemplos con emojis, idealmente serían SVG o de una librería)
const IconAIAnalysis = () => <div className={styles.featureIcon}>🧠</div>; // Cerebro, IA
const Icon3DVisualization = () => <div className={styles.featureIcon}>🌐</div>; // Globo, 3D
const IconCollaboration = () => <div className={styles.featureIcon}>🤝</div>; // Manos, conexión
const IconReporting = () => <div className={styles.featureIcon}>📄</div>; // Documento, informe

const ProductShowcase = () => {
  return (
    <section id="product-showcase" className={styles.showcaseSection}>
      <div className={styles.showcaseContainer}>
        <div className={styles.showcaseHeader}>
          <h2>La Nueva Era del Diagnóstico por Imagen</h2>
          <p className={styles.headerSubtitle}>
            Potencia tu precisión y eficiencia con nuestra plataforma inteligente.
            Diseñada por expertos para optimizar cada paso de tu flujo de trabajo.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <IconAIAnalysis />
            <h3>Análisis Inteligente con IA</h3>
            <p>Identifica patrones complejos y anomalías sutiles que el ojo humano podría pasar por alto, ofreciendo diagnósticos más rápidos y precisos.</p>
          </div>

          <div className={styles.featureItem}>
            <Icon3DVisualization />
            <h3>Visualización Avanzada en 3D</h3>
            <p>Explora estructuras anatómicas con modelos 3D interactivos y segmentaciones personalizadas para una comprensión profunda.</p>
          </div>

          <div className={styles.featureItem}>
            <IconCollaboration />
            <h3>Colaboración Instantánea</h3>
            <p>Comparte casos, discute hallazgos y colabora con colegas en tiempo real, desde cualquier lugar y dispositivo seguro.</p>
          </div>

          <div className={styles.featureItem}>
            <IconReporting />
            <h3>Informes Personalizados y Automatizados</h3>
            <p>Genera reportes detallados y personalizables en segundos, integrando datos del análisis de IA para agilizar tu documentación.</p>
          </div>

          {/* Puedes añadir más características aquí */}
        </div>

        <div className={styles.showcaseCta}>
          <a href="#demo" className={`${styles.btn} ${styles.btnPrimary}`}>Ver el Software en Acción</a>
          <a href="#features" className={`${styles.btn} ${styles.btnSecondary}`}>Explorar Todas las Funciones</a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;