import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    }
]
const buildControls = (props) => (
    <div className = { classes.BuildControls }>
    <p>Current Price: {props.price}</p>
    {controls.map(control => (
    <BuildControl 
    key = {control.label}  
    label = {control.label}
    click = {() => props.ingredientAdded(control.type)}
    removed = {() => props.ingredientRemoved(control.type)}
    disabled = {props.disabled[control.type]}
    />
    ))}

    <button 
    disabled = {!props.purchasable} 
    className = {classes.OrderButton}
    onClick = {props.ordered}> ORDER NOW</button>
    </div>
)

export default buildControls;