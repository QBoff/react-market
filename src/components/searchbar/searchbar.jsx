import React from "react";
import { useState } from "react";

import './searchbar.css';
import Button from "../button/Button";


const Searchbar = ({ images, setImages }) => {

    const [search, setSearch] = useState('');

    return (
        <>
            <div className="search-bar">
                <input type="text"
                    placeholder="Search for NFT"
                    value={search}
                    onChange={(e) => {
                        setImages(images.filter(image => image.title.indexOf(e.target.value) !== -1 || e.target.value === ''))
                        return setSearch(e.target.value)
                    }} />
                <Button title="Search" />
            </div>
        </>
    );
};

export default Searchbar;