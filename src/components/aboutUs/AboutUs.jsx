// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import styles from './AboutUs.module.css';
import { FaArrowRight, FaLightbulb, FaHandsHelping, FaShieldAlt, FaBrain } from 'react-icons/fa';
import { MdVerifiedUser, MdOutlineScience } from 'react-icons/md';

// Importa los componentes de animación
import { Fade, Slide, Zoom, Flip } from 'react-awesome-reveal';

import nstvdo from '../../assets/nstvdo.mp4';

// URLs de imágenes de Unsplash como placeholders para los miembros del equipo
// REEMPLAZA ESTAS CON FOTOS REALES DE TU EQUIPO CUANDO ESTÉN DISPONIBLES
const teamMember1Url = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"; // Ejemplo de médico
const teamMember2Url = "https://img.freepik.com/foto-gratis/viajar-transporte-publico-camino-al-trabajo-foto-hombre-guapo-amable-positivo-bigote-barba-gafas-auriculares-escuchando-musica-obteniendo-satisfaccion-grandes-ofertas_176420-22419.jpg?semt=ais_hybrid&w=740"; // Ejemplo de profesional de la salud
const teamMember3Url = "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/09/Poses-Perfil-Profesional-Mujeres-ago.-10-2023-1-819x1024.jpg?lossy=1&strip=1&webp=1"; // Ejemplo de especialista en tecnología

const AboutUs = () => {
    return (
        <div className={styles.aboutUsPage}>

            {/* Hero Section con Video */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Fade triggerOnce direction="up" duration={1200}>
                        <h1 className={styles.heroTitle}>Innovando el Diagnóstico Médico</h1>
                    </Fade>
                    <Fade triggerOnce direction="up" duration={1200} delay={300}>
                        <p className={styles.heroSubtitle}>
                            En TRS, estamos comprometidos con transformar la atención médica a través de soluciones tecnológicas avanzadas y accesibles. Nuestro enfoque en la telemedicina y la inteligencia artificial redefine el futuro del diagnóstico.
                        </p>
                    </Fade>
                    <Fade triggerOnce direction="up" duration={1200} delay={600}>
                        <a href="#contact" className={`${styles.btn} ${styles.colorPrimary}`}>
                            Contáctanos Hoy <FaArrowRight className={styles.btnIcon} />
                        </a>
                    </Fade>
                </div>
                <div className={styles.heroVideoBackground}>
                    <video autoPlay muted loop playsInline className={styles.heroVideo}>
                        <source src={nstvdo} type="video/mp4" />
                        Tu navegador no soporta el formato de video.
                    </video>
                    <div className={styles.videoOverlay}></div>
                </div>
            </section>

            {/* Sección de Nuestra Historia y Propósito */}
            <Slide triggerOnce direction="left" duration={1000}>
                <section className={styles.missionSection}>
                    <div className={styles.missionContainer}>
                        <div className={styles.missionContent}>
                            <h2 className={styles.sectionTitle}>Nuestra Historia y Propósito</h2>
                            <p className={styles.sectionText}>
                                TRS nació de la visión de un grupo de profesionales médicos y tecnólogos, unidos por un objetivo común: hacer que el diagnóstico por imágenes sea más eficiente, preciso y seguro para todos. Desde nuestros inicios, nos hemos dedicado a la investigación y el desarrollo de herramientas innovadoras que impulsan la telemedicina y la inteligencia artificial en el sector de la salud.
                            </p>
                            <p className={styles.sectionText}>
                                Nuestra misión es empoderar a los profesionales de la salud con tecnología de vanguardia, facilitando diagnósticos rápidos y confiables, y así contribuir directamente a mejorar la calidad de vida de los pacientes. Creemos firmemente en un futuro donde la tecnología y la medicina trabajen de la mano para superar los desafíos actuales.
                            </p>
                        </div>
                    </div>
                </section>
            </Slide>

            {/* Nueva Sección: ¿Por Qué Elegirnos? (Diferenciadores) */}
            <section className={styles.whyChooseUsSection}>
                <Fade triggerOnce duration={1000}>
                    <h2 className={styles.sectionTitle}>¿Por Qué Elegir TRS?</h2>
                    <p className={styles.sectionSubtitle}>Ofrecemos soluciones que marcan la diferencia en tu práctica médica.</p>
                </Fade>
                <div className={styles.featuresGrid}>
                    <Fade triggerOnce direction="up" duration={800} delay={200}>
                        <div className={styles.featureCard}>
                            <MdOutlineScience className={styles.featureIcon} />
                            <h3>Vanguardia</h3>
                            <p>Utilizamos Inteligencia Artificial y Machine Learning para una precisión diagnóstica sin precedentes.</p>
                        </div>
                    </Fade>
                    <Fade triggerOnce direction="up" duration={800} delay={400}>
                        <div className={styles.featureCard}>
                            <MdVerifiedUser className={styles.featureIcon} />
                            <h3>Seguridad y Privacidad</h3>
                            <p>Protegemos la información sensible de tus pacientes con los más altos estándares de seguridad.</p>
                        </div>
                    </Fade>
                    <Fade triggerOnce direction="up" duration={800} delay={600}>
                        <div className={styles.featureCard}>
                            <FaHandsHelping className={styles.featureIcon} />
                            <h3>Soporte Dedicado</h3>
                            <p>Nuestro equipo de expertos está siempre listo para brindarte asistencia y capacitación.</p>
                        </div>
                    </Fade>
                    <Fade triggerOnce direction="up" duration={800} delay={800}>
                        <div className={styles.featureCard}>
                            <FaLightbulb className={styles.featureIcon} />
                            <h3>Innovación Continua</h3>
                            <p>Estamos en constante evolución, integrando nuevas funcionalidades y mejoras basadas en tus necesidades.</p>
                        </div>
                    </Fade>
                </div>
            </section>

            {/* Sección de Nuestros Valores */}
            <Fade triggerOnce duration={1000} delay={200}>
                <section className={styles.valuesSection}>
                    <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
                    <div className={styles.valuesGrid}>
                        <Flip triggerOnce direction="horizontal" duration={800} delay={100}>
                            <div className={styles.valueCard}>
                                <h3>Innovación</h3>
                                <p>Buscamos constantemente nuevas formas de mejorar y transformar el diagnóstico médico.</p>
                            </div>
                        </Flip>
                        <Flip triggerOnce direction="horizontal" duration={800} delay={200}>
                            <div className={styles.valueCard}>
                                <h3>Integridad</h3>
                                <p>Operamos con la más alta ética y transparencia en cada interacción.</p>
                            </div>
                        </Flip>
                        <Flip triggerOnce direction="horizontal" duration={800} delay={300}>
                            <div className={styles.valueCard}>
                                <h3>Compromiso</h3>
                                <p>Dedicados a la excelencia y a superar las expectativas de nuestros usuarios.</p>
                            </div>
                        </Flip>
                        <Flip triggerOnce direction="horizontal" duration={800} delay={400}>
                            <div className={styles.valueCard}>
                                <h3>Colaboración</h3>
                                <p>Fomentamos el trabajo en equipo y la creación de redes con la comunidad médica.</p>
                            </div>
                        </Flip>
                    </div>
                </section>
            </Fade>

            {/* Nueva Sección: Conoce a Nuestro Equipo */}
            <section className={styles.teamSection}>
                <Fade triggerOnce duration={1000}>
                    <h2 className={styles.sectionTitle}>Conoce a Nuestro Equipo</h2>
                    <p className={styles.sectionSubtitle}>
                        Detrás de cada avance en TRS, hay un equipo apasionado de expertos.
                    </p>
                </Fade>
                <div className={styles.teamGrid}>
                    <Zoom triggerOnce duration={800} delay={200}>
                        <div className={styles.teamMemberCard}>
                            <img src={teamMember1Url} alt="Dr. Juan Pérez" className={styles.teamMemberImage} />
                            <h3>Dr. Juan Pérez</h3>
                            <p className={styles.teamMemberRole}>CEO & Fundador</p>
                            <p className={styles.teamMemberDescription}>Con más de 20 años de experiencia, lidera la visión y estrategia de TRS.</p>
                        </div>
                    </Zoom>
                    <Zoom triggerOnce duration={800} delay={400}>
                        <div className={styles.teamMemberCard}>
                            <img src={teamMember2Url} alt="Lic. Ana Gómez" className={styles.teamMemberImage} />
                            <h3>Lic. Ana Gómez</h3>
                            <p className={styles.teamMemberRole}>Directora de Tecnología</p>
                            <p className={styles.teamMemberDescription}>Responsable del desarrollo de nuestras soluciones de inteligencia artificial.</p>
                        </div>
                    </Zoom>
                    <Zoom triggerOnce duration={800} delay={600}>
                        <div className={styles.teamMemberCard}>
                            <img src={teamMember3Url} alt="Ing. Carlos Ruiz" className={styles.teamMemberImage} />
                            <h3>Ing. Carlos Ruiz</h3>
                            <p className={styles.teamMemberRole}>Especialista en UX/UI</p>
                            <p className={styles.teamMemberDescription}>Asegura que nuestras herramientas sean intuitivas y fáciles para los profesionales.</p>
                        </div>
                    </Zoom>
                </div>
            </section>


            {/* CTA final Section */}
            <Fade triggerOnce duration={1000} delay={400}>
                <section className={styles.finalCtaSection}>
                    <div className={styles.finalCtaContent}>
                        <h2 className={styles.finalCtaTitle}>¿Listo para transformar tu práctica?</h2>
                        <p className={styles.finalCtaSubtitle}>Únete a la revolución del diagnóstico médico con TRS y descubre un futuro más eficiente y preciso.</p>
                        <a href="#contact" className={`${styles.btn} ${styles.colorPrimary}`}>
                            Descubre Más <FaArrowRight className={styles.btnIcon} />
                        </a>
                    </div>
                </section>
            </Fade>

        </div>
    );
};

export default AboutUs;