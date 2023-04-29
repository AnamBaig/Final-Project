import React from 'react';
import './button.css'

function Button(props) {
    return (
        <button className ="button" type="button">
            <h2 className="button-text">{props.nutrition}</h2></button>
    );
}

export default Button;