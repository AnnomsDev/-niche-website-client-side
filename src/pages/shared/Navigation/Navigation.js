import './Navigation.css'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <nav className='NavbarItems'>
            <h1 className="navbar-logo">Drone</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li>

                    <NavLink className='nav-links' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-links' to='/Explore'>Explore</NavLink>
                </li>
                <li>
                    <NavLink className='nav-links' to='/signin'>Sign In</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;