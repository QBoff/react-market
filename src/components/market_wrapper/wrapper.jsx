import React from "react";
import { useState } from "react";

import Filter from '../filter/filter';
import Searchbar from '../searchbar/searchbar';
import Card from '../card/Card';
import './wrapper.css';
import Images from '../../images';


const Wrapper = () => {

    const [images, setImages] = useState(Images);

    return (
        <>
            <section className="market">
                <div className="filter">
                    <Filter />
                </div>
                <div className="container">
                    <Searchbar setImages={setImages} images={Images}/>
                    <div className="cards">
                        {images.map(
                            image => {
                                return (
                                <div>
                                    <Card image={image.image} title={image.title} />
                                </div>);
                            }
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};


export default Wrapper;