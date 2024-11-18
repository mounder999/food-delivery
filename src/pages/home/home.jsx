import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay.jsx'
import AppDOwnload from '../../components/AppDownload/AppDOwnload.jsx'
//import Fooddisplay from '../../components/Fooddisplay/Fooddisplay.jsx'
const Home = () => {
  const [category,setCategroy]=useState("all")
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategroy={setCategroy} />
        <Fooddisplay category={category} />
        <AppDOwnload/>
       

      
    </div>
  )
}

export default Home
