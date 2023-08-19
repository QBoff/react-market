import React from "react";

import Button from "../button/Button";

import './card.css';

const Card = ({ image, title, description, cost }) => {
    return (
        <>
            <div className="container">
                <div className="img">
                    <img src={image} alt="NFT Img" width='200px' />
                </div>
                <h5>{title}</h5>
                <p>{description}</p>
                <div className="buy">
                    <Button toLink='#' title='Buy' cost={cost} />
                </div>

            </div>
        </>
    );
};


export default Card;