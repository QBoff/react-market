import React from "react";
import { useState } from "react";

import './searchbar.css';


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
            </div>
        </>
    );
};

export default Searchbar;