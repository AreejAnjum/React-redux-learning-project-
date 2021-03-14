
import React from 'react'
import classes from "./Order.css"

const Order = (props) => {

    let ingredients=[];
    for(let ingredientName in props.ingredients){
        ingredients.push({
            Name: ingredientName,   //salad
            amount: props.ingredients[ingredientName]   //1
        })
    }

    const ingredientsOutput=
    ingredients.map((ig)=>{
        return(<span style={
        {textTransform: 'capitalize',
        display: "inline-block",
        margin: '0 8px',
        padding: '5px',
        border: '1px solid grey'
        }}
        >{ig.Name}({ig.amount})</span>)
    })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price <strong>{props.price}</strong></p>
        </div>
    )
}

export default Order;
