import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice.jsx'; 

function ProductList() {
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Plantas de Aire",
            plants: [
                { name: "Helecho", image: "https://cdn.pixabay.com/photo/2018/06/10/16/40/fern-3466804_1280.jpg", cost: "$15" },
                { name: "Lengua de Suegra", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cactus-1846147_1280.jpg", cost: "$12" }
            ]
        }
    ];

    return (
        <div className="product-grid">
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h1>{category.category}</h1>
                    <div className="product-list">
                        {category.plants.map((plant, i) => (
                            <div key={i} className="product-card">
                                <img src={plant.image} alt={plant.name} style={{width: '200px'}} />
                                <h3>{plant.name}</h3>
                                <p>{plant.cost}</p>
                                <button onClick={() => dispatch(addItem(plant))}>
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
              
    
