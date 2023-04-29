import React from 'react';
import { useState } from 'react';
import './counterone.css';

function Counterone () {
    let [value, setValue] = useState(0);

    let triggeredEvent = () => {
        console.log(value)
        setValue(value+1)
    }

    return (
        <button className="counter-button" onClick={triggeredEvent}>
            {"You and " + value + " others liked this recipe" }
        </button>
    );
}

export default Counterone;