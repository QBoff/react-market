import React from 'react';


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
                                <li><a href="/home"><img height='40px' src={logo} alt="logo" /></a></li>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/market">Market</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav className='registration'>
                            <ul>
                                <li><a href="/log_in">Log in</a></li>
                                <li><a href="/sign_up">Sign up</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    );
};


export default Navbar;