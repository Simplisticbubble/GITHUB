import React, {useState} from 'react';
import img from './CIEL_logo.png';
import './Navbar.css';
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
  return (
      <nav className='navbar'>
        <div className='logo'>
          <img src = {img} alt = "logo"/>
        </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href = "#home">Home</a></li>
          <li className='p__opensans'><a href = "#about">About</a></li>
          <li className='p__opensans'><a href = "#menu">Menu</a></li>
          <li className='p__opensans'><a href = "#awards">Awards</a></li>
          <li className='p__opensans'><a href = "#contact">Contact</a></li>
        </ul>
        <div className='app__navbar-login'>
          <a href='#login' className='p__opensans'>
              Log in / Register 
          </a>
        <div/>
            <a href = "/" className='p__opensans'>Book Class</a>
        </div>

        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#f88e5d' fontSize={27} onClick={() => setToggleMenu(true)}/>
          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu fontSize = {27} className = "overlay__close" onClick = {() => setToggleMenu(false)}/>
                <ul className='app__navbar-smallscreen-links'>
                  <li className='p__opensans'><a href = "#home">Home</a></li>
                  <li className='p__opensans'><a href = "#about">About</a></li>
                  <li className='p__opensans'><a href = "#menu">Menu</a></li>
                  <li className='p__opensans'><a href = "#awards">Awards</a></li>
                  <li className='p__opensans'><a href = "#contact">Contact</a></li>
                </ul>
            </div>
          )} 
        </div>

        
      </nav>
    )};


export default Navbar;
