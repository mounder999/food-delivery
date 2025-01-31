// Loginpopup.js
import React, { useState, useContext } from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Loginpopup = ({ setshowLogin }) => {
    const { setToken } = useContext(StoreContext); // Use setToken from context
    const [currState, setcurrState] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || (currState === "Sign up" && !name)) {
            setError("Please fill in all fields");
            return;
        }

        const url = currState === "Login" 
            ? "http://127.0.0.1:8000/api/login" 
            : "http://127.0.0.1:8000/api/register";

        const body = currState === "Login" 
            ? { email, password } 
            : { name, email, password };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setError("");
            alert(currState === "Login" ? "Login successful!" : "Registration successful!");

            localStorage.setItem("auth_token", data.access_token);
            setToken(data.access_token); // Update token in context
            setshowLogin(false);
        } catch (error) {
            console.error("Error:", error.message);
            setError(error.message);
        }
    };

    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt='' />
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Sign up" && (
                        <input
                            type='text'
                            placeholder='Your name'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    )}
                    <input
                        type='email'
                        placeholder='Your email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">{currState === 'Sign up' ? 'Create account' : 'Login'}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === 'Login' ? (
                    <p>Create a new account? <span onClick={() => setcurrState('Sign up')}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setcurrState('Login')}>Login here</span></p>
                )}
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Loginpopup;