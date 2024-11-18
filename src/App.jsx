import React, { useState } from 'react'
import Navbar from './components/navbar/navbar.jsx';
import { Route, Routes } from 'react-router-dom';


import Home from './pages/home/home.jsx';
import Cart from './pages/cart/cart.jsx';
import Placeorder from './pages/placeorder/placeorder.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loginpopup from './components/Loginpopup/Loginpopup.jsx';
 
function App() {
  const[showLogin,setshowLogin]=useState(false)
  return (
  <>
  {showLogin ?<Loginpopup setshowLogin ={setshowLogin} />:<></>}
   <div className='app'>
      
      <Navbar setshowLogin ={setshowLogin}/>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/placeorder' element={<Placeorder />}/>
      </Routes>
       
     
    
    
      
    
    </div>
    <Footer/>

  </>
   
  )
}

export default App
