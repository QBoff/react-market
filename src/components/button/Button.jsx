import React from "react";

import './button.css';

const Button = ({ toLink='', title='', type = '' }) => {
    return (
        <>
            {type !== 'submit' ?
                <div className="button">
                    <a href={toLink}>{title}</a>
                </div>
                 :
                <div>
                    <button type="submit">{title}</button>
                </div>
            }
        </>
    );
};


export default Button;