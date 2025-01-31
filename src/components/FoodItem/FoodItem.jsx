import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img
                    className='food-item-image'
                    src={'http://127.0.0.1:8000' + image}
                    alt={name}
                />

                {!cartItems[id] ? (
                    <img
                        className='add'
                        onClick={() => addToCart(id)} // Pass the correct id
                        src={assets.add_icon_white}
                        alt='Add item'
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(id)} // Pass the correct id
                            src={assets.remove_icon_red}
                            alt='Remove item'
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)} // Pass the correct id
                            src={assets.add_icon_green}
                            alt='Add item'
                        />
                    </div>
                )}
            </div>

            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='Rating stars' />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;