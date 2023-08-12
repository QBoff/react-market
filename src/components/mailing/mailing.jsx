import React from "react";

import './mailing.css';
import Button from "../button/Button";


const Mailing = () => {
    return (
        <>
            <section className="mailing">
                <div className="info">
                    <p>Send you information about the coolest collections</p>
                </div>
                <div className="sending-block">
                    <form action="" method="post">
                        <input id="emailSending" type="email" placeholder="Enter your email"/>
                        <Button type="submit" title='Submit'/>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Mailing;
