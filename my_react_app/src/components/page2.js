import React from 'react';
import './page2.css';
import Button from './button';
import Counterone from "./counterone";
import Countertwo from "./countertwo";
import InstRC from "./collapsibletwo";

export default function Page2() {
    return (
        <header>
            <h1>Raspberry Cake</h1>
            <h2 id="header2">How to create this delicious Raspberry Cake! Follow the recipe below</h2>
        <body>
            <div>
        <img id="image-two-rc" src="https://drive.google.com/uc?export=view&id=1J7LIGWhWJBFvZlI_MLZ3eH32BElP7J87" alt="drive"/>
            </div>
        <div className="RC-recipe">
        <h3>You will need:</h3>
                   <ol>
                    <li> 125ml Sunflower oil </li>
                    <li> 175g Plain flour </li>
                    <li> 125ml Greek yogurt </li>
                    <li> Zest of one lemon </li>
                    <li> 3 Large eggs </li>
                    <li> 175g sugar </li>
                    <li> 185g Unsalted butter</li>
                    <li> Vanilla Extract </li>
                    <li> 300g Raspberries </li>
                    </ol>
         </div>
                <div className = "buttons-two">
                    <Button nutrition="19g fat"/>
                    <Button nutrition="364 kcal"/>
                    <Button nutrition="24g sugars"/>
                    <Button nutrition="6g protein"/>
                    </div>

                    <div className="RC-counter">
                    <Counterone />
                    <Countertwo />
                    <InstRC />
                    </div>
                    
            </body>    
        </header>
    )
};