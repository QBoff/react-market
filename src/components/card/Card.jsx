import React from "react";

import './card.css';
import Button from "../button/Button";


const Card = ({ image, title, description }) => {
    return (
        <>
            <div className="container">
                <div className="img">
                    <img src={image} alt="NFT Img" width='200px' />
                </div>
                <h5>{title}</h5>
                <p>{description}</p>
                <div className="buy">
                    <Button toLink='#' title='Buy' />
                </div>

            </div>
        </>
    );
};


export default Card;