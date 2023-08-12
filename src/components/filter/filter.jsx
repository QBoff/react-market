import React from "react";
import Button from '../button/Button';

import './filter.css';

const Filter = () => {
    return (
        <>
            <section className="filter">
                <p>Filter</p>
                <form action="" method="post">
                    <div className="fields">
                        <input className="field" type="text" placeholder="min" name="min" />
                        <span>—</span>
                        <input className="field" type="text" placeholder="max" name="max" />
                    </div>
                    <div>
                        <Button title="Apply" />
                    </div>
                </form>
            </section>
        </>
    );
}

export default Filter;