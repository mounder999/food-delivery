import React, { useState } from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/assets';

const Loginpopup = ({ setshowLogin }) => {
    const [currState, setcurrState] = useState("Login");
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt='' />
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Login" ? null : <input type='text' placeholder='your name' required />}
                    <input type='email' placeholder='your email' required />
                    <input type='password' placeholder='password' required />
                </div>
                <button>{currState === 'Sign up' ? 'create account' : 'Login'}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>by continuing I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === 'Login' ? (
                    <p>create a new account? <span onClick={() => setcurrState('Sign up')}>click here </span></p>
                ) : (
                    <p>already have an account? <span onClick={() => setcurrState('Login')}>login here</span></p>
                )}
            </form>
        </div>
    );
}

export default Loginpopup;
