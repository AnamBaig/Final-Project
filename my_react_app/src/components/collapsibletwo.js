import React from 'react';
import Collapsible from 'react-collapsible';
import './collapsibleone.css';

const InstRC = () => {
    return(
        <div id="collaps">
        <Collapsible className="collapsible.one" trigger="Click here for instructions">
        <p className="content.collapsible">
            1. Combine flour and sugar.
            <br /> 2. Mix oil, yogurt, eggs, and vanilla extract with lemon zest. Combine with flour and sugar mixture.
            <br /> 3. Now fold in the raspberries.
            <br /> 4. Bake for 30-40 minutes at Gas Mark 4.
            <br /> 5. After the cake cools decorate with raspberries.
        </p>
        </Collapsible>
        </div>
    );
}

export default InstRC;