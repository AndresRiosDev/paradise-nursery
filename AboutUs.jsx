import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import { addItem } from './CartSlice.jsx'; 

const ProductList = () => {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);

    const plantsArray = [
        {
            category: "Plantas de Interior",
            plants: [
                {
                    name: "Helecho",
                    image: "https://cdn.pixabay.com/photo/2018/06/10/16/40/fern-3466804_1280.jpg",
                    description: "Hojas verdes vibrantes que purifican el aire.",
                    cost: "$15"
                },
                {
                    name: "Suculenta",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cactus-1846147_1280.jpg",
                    description: "Requiere poca agua y mucha luz.",
                    cost: "$10"
                }
            ]
        },
        {
            category: "Plantas de Exterior",
            plants: [
                {
                    name: "Lavanda",
                    image: "https://cdn.pixabay.com/photo/2017/07/11/15/51/lavender-2494002_1280.jpg",
                    description: "Aroma relajante y flores hermosas.",
                    cost: "$20"
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <div className="product-grid">
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h1 className="plant_heading">{category.category}</h1>
                        <div className="product-list">
                            {category.plants.map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                    <img className="product-image" src={plant.image} alt={plant.name} />
                                    <div className="product-title">{plant.name}</div>
                                    <div className="product-description">{plant.description}</div>
                                    <div className="product-cost">{plant.cost}</div>
                                    <button className="product-button" onClick={() => handleAddToCart(plant)}>Añadir al carrito</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
    
