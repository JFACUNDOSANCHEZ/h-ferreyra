// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
// import vdocnt from '../../assets/vdocnt.mp4';
import cvdo from '../../assets/pdt.mp4';


const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMail = () => {
    const { subject, message } = formData;
    const recipient = 'info@visualmedica.com';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.contactPage}>

      {/* Sección Hero con Video de Fondo */}
      <section className={styles.heroSection}>
        <video
          className={styles.videoBackground}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={cvdo} type="video/mp4" />         Tu navegador no soporta la etiqueta de video.
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contáctanos</h1>
          <p className={styles.heroSubtitle}>
            Estamos aquí para responder a tus preguntas y ayudarte a encontrar la solución perfecta.
          </p>
        </div>
      </section>

      {/* Sección de Información de Contacto y Formulario */}
      <section className={styles.infoFormSection}>
        <div className={styles.infoFormContainer}>
          <Fade triggerOnce direction="left" duration={1000}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitleSmall}>Datos de Contacto</h2>
              <p className={styles.infoText}>
                Si tienes alguna pregunta o deseas saber más sobre nuestras soluciones, contáctanos directamente a través de estos medios o utiliza el formulario rápido.
              </p>
              <div className={styles.contactDetail}>
                <FaEnvelope className={styles.icon} />
                <div>
                  <h3 className={styles.detailTitle}>Correo Electrónico</h3>
                  <a href="mailto:info@visualmedica.com" className={styles.contactLink}>info@visualmedica.com</a>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <FaMapMarkerAlt className={styles.icon} />
                <div>
                  <h3 className={styles.detailTitle}>Nuestra Ubicación</h3>
                  <p className={styles.contactText}>Av. Rafael Núñez 4617, Cerro de las Rosas, Córdoba, Argentina</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade triggerOnce direction="right" duration={1000}>
            <div className={styles.mailFormContainer}>
              <h2 className={styles.sectionTitleSmall}>Envía un Mensaje Rápido</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleSendMail(); }} className={styles.mailForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Escribe el asunto de tu mensaje"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Tu Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formTextarea}
                    placeholder="Describe tu consulta aquí..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className={`${styles.btn} ${styles.colorPrimary}`}>
                  Abrir Correo <FaPaperPlane className={styles.btnIcon} />
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </section>

      {/* Mapa de Ubicación */}
      <section className={styles.fullWidthMapSection}>
        <Fade triggerOnce duration={1000} delay={200}>
          <h2 className={styles.sectionTitle}>Encuéntranos en el Mapa</h2>
          <div className={styles.mapContainerFullWidth}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.021074328565!2d-64.21832042377313!3d-31.415053594042867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432988167f57c5b%3A0xc3f9a7a92233f2a!2sAv.%20Rafael%20N%C3%BA%C3%B1ez%204617%2C%20Cerro%20de%20las%20Rosas%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1717326694318!5m2!1ses-419!2sar"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de VisualMedica en Google Maps"
            ></iframe>
          </div>
        </Fade>
      </section>

    </div>
  );
};

export default Contact;
