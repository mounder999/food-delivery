import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem.jsx'

const Fooddisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display'id='food-display'>
        <h2>top dishes near you</h2>
        <div className='food-display-list'>
          {food_list.map((item,index)=>{
            if(category==='all'|| category===item.category){
              return <FoodItem key={index} id={item.food_id} name={item.name} price={item.price} description={item.description} image={item.image}/>

            }
            
          })}
        </div>
      
    </div>
  )
}

export default Fooddisplay
