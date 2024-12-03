import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalcartamount}=useContext(StoreContext)
  const navigate=useNavigate();
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
        {food_list.map((item,index)=>
        {
          if(cartItems[item._id]>0){
            return (
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt=''/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>

                <p>${cartItems[item._id]*item.price}</p>
                <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
            )

          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>subtotal</p>
              <p>${getTotalcartamount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>delivery fee</p>
              <p>${getTotalcartamount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>total</p>
              <p>${getTotalcartamount()===0?0:getTotalcartamount()+2}</p>
            </div>

          </div>
          <button onClick={()=>navigate('/placeorder')}>proceed to checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p> if u have a promo code enter it here</p>
            <div className="cart-promocode-input">
              <input  type='text' placeholder='promo code '/>
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
