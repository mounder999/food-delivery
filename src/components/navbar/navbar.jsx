import React, { useContext, useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setshowLogin }) => {
    const [menu, setMenu] = useState('home');
    const { getTotalcartamount, token, handleLogout } = useContext(StoreContext);

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt='' className='logo' /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu('home')} className={menu === "home" ? 'active' : ""}>Home</Link>
                <Link to='/menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</Link>
                <Link to='/mobile-app' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</Link>
                <Link to='/contact-us' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</Link>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='' />
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt='' /></Link>
                    <div className={getTotalcartamount() === 0 ? "" : 'dot'}></div>
                </div>
                {!token ? (
                    <button onClick={() => setshowLogin(true)}>Sign In</button>
                ) : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt='' />
                        <ul className='nav-profile-dropdown'>
                            <li>
                                <img src={assets.bag_icon} alt='' />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={handleLogout}>
                                <img src={assets.logout_icon} alt='' />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;