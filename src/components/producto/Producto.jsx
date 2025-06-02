import React from 'react'
import ContactSection from '../contactSection/ContacSection.jsx';
import cvdo from '../../assets/pdt.mp4';
import vdopto from '../../assets/vdopto.mp4';
import Style from './Style.module.css'
// import ProductoCard from '../ProductoCard/ProductoCard.jsx'
import Certificaciones from '../certificaciones/Certificaciones.jsx'
import Banner from '../banner/Banner.jsx';
import Caracteristicas from '../caracteristicas/Caracteristicas.jsx';
import Hero from '../hero/hero.jsx'
import SubscriptionCTA from '../suscripcion/Suscripcion.jsx';
import ProductShowcase from '../ProductShowcase.jsx/ProductShowcase.jsx';


export default function Producto() {
  return (
    <div className={Style.vmContainer}>
      {/* VIDEO DE FONDO */}
      <div className={Style.heroSection}>
        <video autoPlay muted loop className={Style.backgroundVideo}>
          <source src={cvdo} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        <div className={Style.overlay}></div>
        <div className={Style.textContent}>
          <h1>Todo en uno, desde la nube</h1>
          <p>
            Accedé a nuestro sistema de diagnóstico y gestión desde una única plataforma segura, rápida y confiable, alojada en un datacenter TIER III certificado.
          </p>
        </div>
      </div>
      {/* <DiagnosticSolutions /> */}
<Caracteristicas />
<SubscriptionCTA />
<ContactSection/>




            {/* <ProductoCard/> */}
{/* <Hero></Hero> */}
            {/* <Banner></Banner> */}
            <Certificaciones></Certificaciones>
    </div>
  )
}
