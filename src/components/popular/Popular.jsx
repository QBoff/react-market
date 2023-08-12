import React from "react";

import './popular.css';
import Card from "../card/Card";
import nft1 from '../../img/wojakians.png';
import nft2 from '../../img/lords.png';
import nft3 from '../../img/nakamigos.png';


const Popular = () => {
    return (
        <>
            <section className="popular-card">
                <h3>Popular NFTs</h3>
                <div className="popular-nft-cards">
                    <Card image={nft1} title="Cool NFT" description="The NFTc collection is something inside. It's very interesting to buy a pig in a poke and think about something pleasant!!!" />
                    <Card image={nft2} title="Cool NFT" description="The NFTc collection is something inside. It's very interesting to buy a pig in a poke and think about something pleasant!!!" />
                    <Card image={nft3} title="Cool NFT" description="The NFTc collection is something inside. It's very interesting to buy a pig in a poke and think about something pleasant!!!" />
                </div>
            </section>
        </>
    );
};


export default Popular;