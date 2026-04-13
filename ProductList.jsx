import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css';
import { addItemToCart } from './CartSlice'; // CORREGIDO: Usando './' en lugar de '../'

function ProductList() {
    const dispatch = useDispatch();
    const plantsArray = [
        {
            category: "Plantas de Interior",
            plants: [
                { name: "Serpiente", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produce oxígeno por la noche.", cost: "$15" },
                { name: "Spathiphyllum", image: "https://cdn.pixabay.com/photo/2014/12/10/21/01/peace-lily-563539_1280.jpg", description: "Limpia el aire de toxinas.", cost: "$20" }
            ]
        },
        {
            category: "Plantas Aromáticas",
            plants: [
                { name: "Lavanda", image: "https://images.unsplash.com/photo-1525900132429-9346b795264c", description: "Aroma relajante.", cost: "$12" },
                { name: "Romero", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Ideal para cocinar.", cost: "$10" }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    };

    return (
        <div className="product-grid">
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h2 className="category-title">{category.category}</h2>
                    <div className="plants-list">
                        {category.plants.map((plant, i) => (
                            <div className="product-card" key={i}>
                                <img src={plant.image} alt={plant.name} />
                                <h3>{plant.name}</h3>
                                <p>{plant.description}</p>
                                <p><strong>{plant.cost}</strong></p>
                                <button onClick={() => handleAddToCart(plant)}>Añadir al carrito</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
