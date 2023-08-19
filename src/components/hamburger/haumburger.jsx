import React from "react";
import './hamburger.css';
import HamburgerIcon from '../../img/menu.png';

const Hamburger = ({open, use, ...props}) => {
    return (
        <div className={use ? "burger-menu" : "hide"} {...props}>
            {use ? 
            <>
                <img src={HamburgerIcon} alt="Hum" />
            </> : <></>}
        </div>
    );
};


export default Hamburger;