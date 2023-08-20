import React from "react";
import { Link } from "react-router-dom";

import './button.css';

const Button = ({ toLink = '', title = '', type = '', cost = '', onClick = null }) => {
    return (
        <>
            {type !== 'submit' ?
                <div className="button" onClick={onClick}>
                    <div>
                        <Link to={toLink}>{title}</Link>
                    </div>
                    {cost !== '' &&
                        <div>
                            <p>{cost} ETH</p>
                        </div>
                    }
                </div>
                :
                <div className="submit">
                    <button type="submit">{title}</button>
                </div>
            }
        </>
    );
};


export default Button;