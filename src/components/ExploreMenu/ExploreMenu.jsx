import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategroy }) => { 

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>explore our menu</h1>
        <p  className='explore-menu-text'>fdfbxfbfxczxvxcncvbzxczxvbbxc</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategroy(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image } alt=''/>
                        <p>{item.menu_name}</p>
                        
                    </div>
                    
                )
            })}
        </div>
        
    </div>
  )
}

export default ExploreMenu
