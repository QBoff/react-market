import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/button';
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
                                <Button toLink='/log_in' title='Log in' />
                                <Button toLink='/sign_up' title='Sign_up' />
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    );
};


export default Navbar;