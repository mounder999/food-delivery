import React from 'react'
import './AppDOwnload.css'
import { assets } from '../../assets/assets'

const AppDOwnload = () => {
  return (
    <div className='app-download'id='app-download'>
        <p>for better experince download <br/> tometo app</p>
        <div className="app-downlaod-platformes">
            <img src={assets.play_store} alt=''/>
            <img src={assets.app_store} alt=''/>
        </div>
      
    </div>
  )
}

export default AppDOwnload
