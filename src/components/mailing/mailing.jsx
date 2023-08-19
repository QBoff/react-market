import React from "react";

import Button from "../button/Button";

import './mailing.css';


const Mailing = () => {
    return (
        <>
            <section className="mailing">
                <div className="info">
                    <p>Send you information about the coolest collections</p>
                </div>
                <div className="sending-block">
                    <form action="" method="post">
                        <input id="emailSending" type="email" placeholder="Enter your email" />
                        <div>
                            <Button type="submit" title='Submit' />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Mailing;
