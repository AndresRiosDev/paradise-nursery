import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Si showProductList es falso, mostramos la Landing Page */}
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Bienvenido a Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Donde lo verde cobra vida</p>
              <button className="get-started-btn" onClick={handleGetStartedClick}>
                Empezar
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        /* Si showProductList es verdadero, mostramos la lista de productos */
        <div className="product-list-container visible">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;