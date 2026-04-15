import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Plantas de Aire",
            plants: [
                { name: "Helecho", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/fern-3816940_1280.jpg", cost: 15 },
                { name: "Lengua de Suegra", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939185_1280.jpg", cost: 12 },
                { name: "Tillandsia", image: "https://cdn.pixabay.com/photo/2014/11/11/19/04/air-plant-527376_1280.jpg", cost: 18 }
            ]
        },
        {
            category: "Plantas de Interior",
            plants: [
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/05/20/12/money-plant-3796822_1280.jpg", cost: 10 },
                { name: "Monstera", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", cost: 25 },
                { name: "Lirio de Paz", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/peace-lily-1846135_1280.jpg", cost: 20 }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div className="product-list-container">
            {plantsArray.map((category, index) => (
                <div key={index} className="category-section">
                    <h2 className="category-title">{category.category}</h2>
                    <div className="product-grid">
                        {category.plants.map((plant, i) => (
                            <div key={i} className="product-card">
                                <img src={plant.image} alt={plant.name} className="product-image" />
                                <h3 className="product-name">{plant.name}</h3>
                                <p className="product-cost">${plant.cost}</p>
                                <button 
                                    className="add-to-cart-button" 
                                    onClick={() => handleAddToCart(plant)}
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;