import React from "react";
import { useState } from "react";

import Filter from '../filter/filter';
import Searchbar from '../searchbar/searchbar';
import Card from '../card/card';
import Images from '../../images';

import './wrapper.css';

const Wrapper = () => {

    const [images, setImages] = useState(Images);

    return (
        <>
            <section className="box">
                <div className="market">
                    <div className="filter">
                        <Filter images={Images} setImages={setImages} />
                    </div>
                    <div className="container">

                        <Searchbar setImages={setImages} images={Images} />

                        <div className="cards">
                            {images.map(
                                image => {
                                    return (
                                        <div>
                                            <Card image={image.image} title={image.title} cost={image.cost} />
                                        </div>);
                                }
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Wrapper;