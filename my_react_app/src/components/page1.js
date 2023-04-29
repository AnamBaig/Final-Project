import React from 'react'
import Button from"./button";
import Counterone from "./counterone";
import Countertwo from "./countertwo";
import InstBrownie from './collapsibleone';
import './page1.css';

export default function Page1() {

    return (
        <div>
            <header>
                <h1>Brownies</h1>
                <h2 id="header2">How to create these delicious Brownies! Follow the recipe below</h2>
            </header>
            <body>
            <div>
             <img id="image" src="https://drive.google.com/uc?export=view&id=1s4ojqQD9yme2UC9BZ-LdcCiqTr2viGRJ" alt="drive"/>
                
             </div>
             <div className="recipe">
                    <h3>You will need:</h3>
                   <ol>
                    <li> 185g Dark chocolate </li>
                    <li> 85g Plain flour </li>
                    <li> 40g Cocoa powder </li>
                    <li> 50g Milk chocolate </li>
                    <li> 3 Large eggs </li>
                    <li> 275g sugar </li>
                    <li> 185g Unsalted butter</li>
                    <li> Pinch of salt</li>
                    </ol>
                </div>
                <div className="button-nutrition">
                    <Button nutrition="9g fat"/>
                    <Button nutrition="150 kcal"/>
                    <Button nutrition="12g sugars"/>
                    <Button nutrition="2g protein"/>
                    </div>
                    <div>
                        <Counterone />
                        <Countertwo />

                        <InstBrownie /> 
                    </div> 
            </body>
        </div>
    
    )
};
