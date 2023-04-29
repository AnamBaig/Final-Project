import React from 'react';
import { useState } from 'react';
import './countertwo.css';

function Countertwo () {
    let [value, setValue] = useState(0);

    let triggeredEvent = () => {
        console.log(value)
        setValue(value+1)
    }

    return (
        <button className="counter-button-two" onClick={triggeredEvent}>
            {"You and " + value + " others disliked this recipe" }
        </button>
    );
}

export default Countertwo;