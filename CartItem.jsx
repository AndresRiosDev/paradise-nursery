import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container" style={{padding: '20px', color: 'black'}}>
      <h2 style={{textAlign: 'center'}}>Total del Carrito: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name} style={{display: 'flex', borderBottom: '1px solid #ccc', padding: '10px 0'}}>
            <img src={item.image} alt={item.name} style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div style={{marginLeft: '20px'}}>
              <div style={{fontWeight: 'bold'}}>{item.name}</div>
              <div>Precio: ${item.cost}</div>
              <div style={{margin: '10px 0'}}>
                <button onClick={() => handleDecrement(item)}>-</button>
                <span style={{margin: '0 10px'}}>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div>Subtotal: ${item.cost * item.quantity}</div>
              <button style={{marginTop: '10px', color: 'red'}} onClick={() => handleRemove(item)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop: '20px', textAlign: 'center'}}>
        <button style={{padding: '10px 20px', marginRight: '10px'}} onClick={onContinueShopping}>Continuar Comprando</button>
        <button style={{padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white'}} onClick={() => alert('Próximamente')}>Pagar</button>
      </div>
    </div>
  );
};

export default CartItem;
