import React from 'react';

import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey,i) => {
        return <li key = {igKey + i}><span style = {{textTransform: 'capitalize'}}>{igKey}</span>{props.ingredients[igKey]}</li>
    });

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                { ingredientSummary }
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType = "Danger" clicked = {props.purchaseCancelled}>Cancel</Button>
            <Button btnType = "Success" clicked = {props.purchaseContinue}>Continue</Button>
        </Auxi>
    )
};

export default orderSummary;