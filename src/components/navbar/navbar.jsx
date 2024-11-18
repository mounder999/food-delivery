import React, { useState } from 'react'
import'./navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setshowLogin}) => {
    const[menu,setMenu]=useState('menu')
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo' />
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu('home')} className={menu==="home"?'active':""}> home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==='mobile'?'active':''}>mobile-app</a>
            <a href='#Footer'  onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon}  alt='' className=''/>
            <div className='navbar-search-icon'>
            <img src={assets.basket_icon}  alt='' className=''/>
            <div className='dot'></div>

            </div>
            <button onClick={()=>setshowLogin(true)}>sign</button>
        </div>
      
    </div>
  )
}

export default Navbar