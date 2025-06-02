import React, { useState } from 'react';
import styles from './ContacSection.module.css';
import { FaHome, FaEnvelope, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Iconos para la información de contacto

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // Para mostrar mensajes al usuario (éxito/error)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    // LÓGICA DE ENVÍO DEL FORMULARIO
    // AQUI ES DONDE NECESITAS UN ENDPOINT DE TU SERVIDOR (BACKEND)
    // O UN SERVICIO DE TERCEROS COMO Formspree, Netlify Forms, EmailJS, etc.
    // React (frontend) NO PUEDE ENVIAR EMAILS DIRECTAMENTE.

    try {
      // Ejemplo con fetch a un endpoint imaginario de tu backend:
      const response = await fetch('/api/send-email', { // Reemplaza '/api/send-email' con tu URL real
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito! Nos comunicaremos contigo a la brevedad.');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Limpiar formulario
      } else {
        setStatus('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        // Puedes obtener más detalles del error si tu API lo proporciona
        // const errorData = await response.json();
        // console.error('Error del servidor:', errorData);
      }
    } catch (error) {
      console.error('Error de red o del servidor:', error);
      setStatus('Error de conexión. Por favor, verifica tu conexión a internet.');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* Columna de Información del Formulario */}
        <div className={styles.formInfoColumn}>
          <h2 className={styles.mainTitle}>Contacto</h2>
          <p className={styles.subtitle}>
            Si desea realizarnos una consulta acerca de nuestros <span className={styles.highlight}>programas de salud</span>,
            complete el siguiente formulario y a la brevedad nos comunicaremos con usted.
          </p>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className="visually-hidden">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                className={styles.inputField}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className="visually-hidden">Correo</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo"
                className={styles.inputField}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className="visually-hidden">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Teléfono"
                className={styles.inputField}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className="visually-hidden">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                rows="5" // Número de filas visible
                className={styles.textareaField}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar Mensaje
            </button>
            {status && <p className={styles.formStatus}>{status}</p>}
          </form>
        </div>

        {/* Columna de Información de Contacto */}
        <div className={styles.contactInfoColumn}>
          <div className={styles.infoBackgroundIcon}> {/* Icono grande de fondo */}
            <FaEnvelope />
          </div>

          <h3 className={styles.infoTitle}>Dónde encontrarnos:</h3>

          <div className={styles.contactDetail}>
            <FaHome className={styles.detailIcon} />
            <p>
              Rodríguez Peña 2439<br />
              X5001FIO - Córdoba, Argentina
            </p>
          </div>

          <div className={styles.contactDetail}>
            <FaEnvelope className={styles.detailIcon} />
            <a href="mailto:info@geclisa.com" className={styles.contactLink}>info@geclisa.com</a>
          </div>

          {/* Opcional: Si tienes teléfono y WhatsApp */}
          <div className={styles.contactDetail}>
            <FaPhoneAlt className={styles.detailIcon} />
            <a href="tel:+549351XXXXXXX" className={styles.contactLink}>+54 9 351 XXX XXXX</a> {/* Tu número real */}
          </div>

          <div className={styles.contactDetail}>
            <FaWhatsapp className={styles.detailIcon} />
            <a
              href="https://wa.me/549351XXXXXXX?text=Hola!%20Me%20interesa%20su%20software."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;