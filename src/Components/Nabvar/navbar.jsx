import React from 'react';
import "./navbar.css";
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="logo"/>
        <ul className='navbar-menu'>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt='search-img'/>
        <div>
            <img src={assets.basket_icon} alt='basket-img'/>
        </div>
        <div>
            <button>Sign-In</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar