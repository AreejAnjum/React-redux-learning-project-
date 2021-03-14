import React from 'react';

import classes from './BurgerControls.css';
import BuildControl from './BurgerControl/BurgerControl';


//array hving objs
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Total Price: <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => {
                    props.addedIngre(ctrl.type)
                }}
                remove={() => {
                    props.removeIngre(ctrl.type)
                }}
                        // { salad: false, cheese: true}
                        // disabled['salad']
                disabled={props.disabled[ctrl.type]}

            />
        ))}

                <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchasing}>Order Now</button>
    </div>
);

export default BuildControls;