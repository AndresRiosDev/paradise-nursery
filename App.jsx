import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {/* Si showProductList es falso, muestra la bienvenida */}
      {!showProductList ? (
        <div className="landing-page">
          <div className="content">
            <h1>Bienvenido a Paradise Nursery</h1>
            <p>Donde lo verde se encuentra con la serenidad</p>
            
            {/* BOTÓN CLAVE */}
            <button 
              className="get-started-button" 
              onClick={() => setShowProductList(true)}
              style={{ 
                backgroundColor: '#4CAF50', 
                color: 'white', 
                padding: '15px 32px', 
                fontSize: '16px', 
                cursor: 'pointer',
                borderRadius: '8px',
                border: 'none',
                marginTop: '20px'
              }}
            >
              Comenzar a comprar
            </button>

            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        /* Si showProductList es verdadero, muestra las plantas */
        <div className="product-list-container">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;