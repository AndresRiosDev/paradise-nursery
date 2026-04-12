import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice'; // Sube un nivel para encontrar el Slice

function ProductList() {
    const dispatch = useDispatch();
    const [addedProducts, setAddedProducts] = useState({});

    const plantsArray = [
        {
            category: "Plantas de Aire",
            plants: [
                { name: "Helecho", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816941_1280.jpg", description: "Limpia el aire.", cost: 15 },
                { name: "Lengua de Suegra", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Muy resistente.", cost: 20 }
            ]
        },
        {
            category: "Plantas de Interior",
            plants: [
                { name: "Poto", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816941_1280.jpg", description: "Fácil de cuidar.", cost: 12 },
                { name: "Ficus", image: "https://cdn.pixabay.com/photo/2017/01/01/19/04/ficus-1945279_1280.jpg", description: "Elegante y grande.", cost: 25 }
            ]
        },
        {
            category: "Plantas Aromáticas",
            plants: [
                { name: "Lavanda", image: "https://cdn.pixabay.com/photo/2017/07/24/19/57/lavender-2535914_1280.jpg", description: "Huele delicioso.", cost: 10 },
                { name: "Menta", image: "https://cdn.pixabay.com/photo/2016/01/07/11/51/mint-1125740_1280.jpg", description: "Para tus tés.", cost: 8 }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedProducts((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    return (
        <div className="product-grid">
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h2 style={{textAlign: 'center', margin: '20px 0'}}>{category.category}</h2>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {category.plants.map((plant, idx) => (
                            <div key={idx} style={{border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '10px', width: '250px'}}>
                                <img src={plant.image} alt={plant.name} style={{width: '100%', borderRadius: '5px'}} />
                                <h3>{plant.name}</h3>
                                <p>{plant.description}</p>
                                <p><strong>${plant.cost}</strong></p>
                                <button 
                                    style={{backgroundColor: addedProducts[plant.name] ? 'gray' : '#4CAF50', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', width: '100%'}}
                                    disabled={addedProducts[plant.name]} 
                                    onClick={() => handleAddToCart(plant)}>
                                    {addedProducts[plant.name] ? "Agregado" : "Añadir al carrito"}
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
