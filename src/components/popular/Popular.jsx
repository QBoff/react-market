import React from "react";

import Card from "../card/card";
import nft1 from '../../img/wojakians.png';
import nft2 from '../../img/lords.png';
import nft3 from '../../img/nakamigos.png';

import './popular.css';


const Popular = () => {
    return (
        <>
            <section className="popular-card">
                <h3>Popular NFTs</h3>
                <div className="popular-nft-cards">
                    <div className="card">
                        <Card image={nft1} title="Cool NFT" description="The NFTc collection is something inside. It's very interesting to buy a pig in a poke and think about something pleasant!!!" />
                    </div>
                    <div className="card">
                        <Card image={nft2} title="Cool NFT" description="The NFTc collection is something inside. It's very interesting to buy a pig in a poke and think about something pleasant!!!" />
                    </div>
                    <div className="card">
                        <Card image={nft3} title="Cool NFT" description="The NFTc collection is something inside. It's very interesting to buy a pig in a poke and think about something pleasant!!!" />
                    </div>
                </div>
            </section>
        </>
    );
};


export default Popular;