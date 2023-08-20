import React from "react";
import { useState } from "react";

import Button from "../button/button";

import './filter.css';

const Filter = ({ setImages, images }) => {

    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    return (
        <>
            <section className="filter">
                <p className="new-block">Set cost</p>
                <div className="form">
                    <div className="fields">
                        <input className="field"
                            type="text"
                            placeholder="min"
                            name="min"
                            value={minValue}
                            onChange={
                                (e) => setMinValue(e.target.value)
                            } />
                        <span>—</span>
                        <input className="field"
                            type="text"
                            placeholder="max"
                            name="max"
                            value={maxValue}
                            onChange={(e) => setMaxValue(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button onClick={() => {
                            filterImages(images, minValue, maxValue, setImages)
                        } } title="Apply" />
                    </div>

                </div>
            </section>
        </>
    );
}

function filterImages(images, minCost, maxCost, setImages) {
    if (minCost === '' || minCost === null || minCost === undefined || parseFloat(minCost) <= 0) {
        minCost = 0;
    }
    if (maxCost === '' || maxCost === null || maxCost === undefined || parseFloat(maxCost) <= 0) {
        maxCost = 100;
    }
    [minCost, maxCost] = [parseFloat(minCost), parseFloat(maxCost)];

    setImages(
        images.filter(
            (image) => image.cost >= minCost && image.cost <= maxCost
        )
    );
}

export default Filter;