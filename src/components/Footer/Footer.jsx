import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="Footer-content">
            <div className="Footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="Footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                </div>
            </div>
           
            <div className="Footer-content-center">
                <h2>Copmany</h2>
                <ul>
                    <li>home</li>
                    <li>delivery</li>
                    <li>about us</li>
                    <li>privacy policy</li>

                </ul>

            </div>
            <div className="Footer-content-right">
                <h2>get in touch</h2>
                <ul>
                    <li>+213 668127322</li>
                    <li>contact tometo@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="Footer-copyright">Copyright are reserved all tometo </p>
      
    </div>
  )
}

export default Footer
