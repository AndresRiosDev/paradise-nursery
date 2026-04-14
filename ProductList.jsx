import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; 

const plants = [
  { name: 'Helecho Espada', cost: 15, description: 'Planta elegante para interiores con sombra.', image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=200' },
  { name: 'Suculenta Echeveria', cost: 10, description: 'Pequeña, resistente y requiere poca agua.', image: 'https://images.unsplash.com/photo-1509423306611-372077e6822c?q=80&w=200' },
  { name: 'Planta de Serpiente', cost: 25, description: 'Purifica el aire y es casi indestructible.', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=200' },
  { name: 'Lirio de la Paz', cost: 20, description: 'Hermosas flores blancas y hojas brillantes.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=200' },
  { name: 'Monstera Deliciosa', cost: 30, description: 'Famosa por sus hojas grandes con agujeros.', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=200' },
  { name: 'Ficus Lyrata', cost: 35, description: 'Planta de tendencia para salas iluminadas.', image: 'https://images.unsplash.com/photo-1597055181300-e3633a207519?q=80&w=200' }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-container">
      <h2 className="product-title">Nuestras Plantas Disponibles</h2>
      <div className="product-grid">
        {plants.map((plant, index) => (
          <div key={index} className="product-card">
            <img src={plant.image} alt={plant.name} className="product-image" />
            <h3 className="product-name">{plant.name}</h3>
            <p className="product-description">{plant.description}</p>
            <p className="product-price">${plant.cost}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(plant)}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

```
