import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2E7D32' }}>Sobre Paradise Nursery</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#444' }}>
        Bienvenido a **Paradise Nursery**, donde nuestra pasión por la naturaleza se une a tu hogar. 
        Somos una tienda dedicada a ofrecer las plantas más saludables y hermosas, cultivadas con 
        cuidado y amor para transformar cualquier espacio en un santuario verde.
      </p>
      <div style={{ marginTop: '30px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '15px' }}>
        <h3>Nuestra Misión</h3>
        <p>
          Fomentar un estilo de vida sostenible y mejorar el bienestar de nuestros clientes 
          brindando acceso a una gran variedad de plantas de interior y exterior, junto con 
          la guía experta necesaria para que prosperen.
        </p>
      </div>
      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
        ¡Únete a nuestra comunidad y deja que la naturaleza inspire tu día a día!
      </p>
    </div>
  );
};
