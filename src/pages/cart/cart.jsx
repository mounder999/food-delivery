import React, { useContext } from 'react';
import './cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalcartamount } = useContext(StoreContext);
    const navigate = useNavigate();

    console.log("Food List:", food_list); // Debugging
    console.log("Cart Items:", cartItems); // Debugging

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item.food_id] > 0) {
                        return (
                            <div key={item.food_id} className='cart-items-title cart-items-item'>
                                <img src={'http://127.0.0.1:8000' + item.image} alt='' />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item.food_id]}</p>
                                <p>${cartItems[item.food_id] * item.price}</p>
                                <p className='cross' onClick={() => removeFromCart(item.food_id)}>x</p>
                            </div>
                        );
                    }
                })}
            </div>
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart totals</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>${getTotalcartamount()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Delivery Fee</p>
                            <p>${getTotalcartamount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Total</p>
                            <p>${getTotalcartamount() === 0 ? 0 : getTotalcartamount() + 2}</p>
                        </div>
                    </div>
                    <button onClick={() => navigate('/placeorder')}>Proceed to Checkout</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, enter it here</p>
                        <div className="cart-promocode-input">
                            <input type='text' placeholder='Promo Code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;