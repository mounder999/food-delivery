import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {
  const {getTotalcartamount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        < p className='title'>Delivery information</p>
        <div className='multi-fields'>
          <input type='text'placeholder='First name'/>
          <input type='text'placeholder='Last name'/>
        </div>
        <input type='email'placeholder='Email addres'/>
        <input type='text'placeholder='Street'/>
        <div className='multi-fields'>
        <input type='text'placeholder='City'/>
        <input type='text'placeholder='State'/>

        </div>
        <div className='multi-fields'>
        <input type='text'placeholder='Zip code'/>
        <input type='text'placeholder='country'/>

        </div>
        
        <input type='text'placeholder='phone'/>
        

        
      </div>
      <div className='place-order-right'>
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
          <button >proceed to payment</button>
        </div>
        

      </div>
    </form>
  )
}

export default Placeorder
