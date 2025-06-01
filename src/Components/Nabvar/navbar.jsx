import React, { useState } from 'react';
import "./navbar.css";
import { assets } from '../../assets/assets';

const Navbar = () => {

    const [menu, setMenu] = useState("Home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="logo"/>
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Menu")} className={menu==="Menu"? "active": ""}>Menu</li>
            <li onClick={()=>setMenu("Contact")} className={menu==="Contact"? "active": ""}>Contact</li>
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