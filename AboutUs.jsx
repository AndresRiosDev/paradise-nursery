import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">Acerca de Nosotros</h2>
      <p className="about-us-description">
        En Paradise Nursery, nuestra misión es acercar la naturaleza a tu hogar. 
        Nos apasiona ofrecer una selección cuidadosamente curada de plantas 
        que no solo embellecen tus espacios, sino que también mejoran tu calidad de vida.
      </p>
      <div className="about-us-content">
        <p>
          Desde helechos vibrantes hasta suculentas resistentes, cada planta en 
          nuestro inventario es tratada con el máximo cuidado hasta que llega a tus manos. 
          Creemos que cada hogar merece un toque de verde.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
    
