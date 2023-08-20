import React from "react";

import Button from "../button/button";
import heroImage from '../../img/homepage-hero-image.png';

import './hero.css';

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="description">
                    <h1>New Way of TRADING NFT</h1>
                    <h3>NFT Market Offence is the best way to sell or buy NFT</h3>
                    <div className="btn">
                        <Button toLink='/sign_up' title='Create Account' />
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Hero img" height="300px" />
                </div>
            </section>
        </>
    );
};

export default Hero;