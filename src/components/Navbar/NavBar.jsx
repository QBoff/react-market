import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../../img/logo-short.png';
import './navbar.css';


const Navbar = () => {
    return (
        <>
            <header>
                <div className="nav-container">
                    <div>
                        <nav className='navigation'>
                            <ul>
                                <li><Link to="/home"><img height='40px' src={logo} alt="logo" /></Link></li>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/market">Market</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav className='registration'>
                            <ul>
                                <li><Link to="/log_in">Log in</Link></li>
                                <li><Link to="/sign_up">Sign up</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    );
};


export default Navbar;