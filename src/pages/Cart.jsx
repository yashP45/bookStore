import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../app/cartSlice';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.items);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const handleCheckout = () => {
       
        alert('Checkout completed! Thank you for shopping with us.');
    };

    // Calculate total price
    const totalPrice = products.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
    }, 0);

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <div className="product-info">
                            <h5>Name: {product.title}</h5>
                            <p>Description: {product.desc}</p>
                            <h5>Price: ${product.price}</h5>
                            <p>Quantity: {product.quantity}</p>
                        </div>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="total">
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
            </button>
        </div>
    );
};

export default Cart;
