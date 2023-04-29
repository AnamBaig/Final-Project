import React from 'react';
import Collapsible from 'react-collapsible';
import './collapsibleone.css';

const InstBrownie = () => {
    return(
        <div id="collaps">
        <Collapsible className="collapsible.one" trigger="Click here for instructions">
        <p className="content.collapsible">
            1. First add the unsalted butter into a medium bowl with the dark and milk chocolate. Melt this mixture over heat.
            <br /> 2. Tip the plain flour in with the cocoa powder. 
            <br /> 3. Combine and whisk the eggs with the sugar. 
            <br /> 4. Pour the chocolate mixture over the egg mixture and fold in thoroughly. 
            <br /> 5. Add the flour and cocoa powder that were combined earlier into this mix.
            <br /> 6. Fold thoroughly again until the mixture appears fudgy, then add the chocolate chunks.
            <br /> 7. Pour this mixture into a baking tray and put in the oven for 25 minutes at Gas Mark 4.
        </p>
        </Collapsible>
        </div>
    );
}

export default InstBrownie;