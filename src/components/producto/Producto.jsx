import React from 'react'
import cvdo from '../../assets/pdt.mp4';
import Style from './Style.module.css'
import ProductoCard from '../ProductoCard/ProductoCard.jsx'
import Certificaciones from '../certificaciones/Certificaciones.jsx'
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
          <h1>PROMESA DE MARCA</h1>
          <p>
            “Desarrollamos Sistemas integrales, CONFIABLES, RÁPIDOS y SEGUROS con un
            SOPORTE EXTRAORDINARIO que ayudan a las instituciones a hacer diagnósticos,
            más completos y precisos”
          </p>
        </div>
      </div>

            <ProductoCard/>
            <Certificaciones></Certificaciones>
    </div>
  )
}
