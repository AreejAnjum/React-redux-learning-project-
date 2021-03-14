import React, { Component } from 'react'

import Button from '../../UI/Button/Button'
import classes from '../../UI/Button/Button.css'

class OrderSummary extends Component {

    componentWillUpdate(){
console.log("[Component update] order Summary ")
    }
    render(){
        const ingredientSummary= Object.keys(this.props.ingredients)
        .map((igKey)=>{
            //style={{textTransform: 'capitalize'}}  js obj
            
            return(
                <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        })
        return (
            <div>
    <h3>Your order:</h3>
    <p>This is delicious burger with following ingredients: </p>
    <ul>{ingredientSummary}</ul>
    <p><strong>Total price: {this.props.price}</strong></p>
    <p>Continue to checkout</p>
    <Button clicked={this.props.purchaseCancel} btnType="Danger">Cancel</Button>
    <Button clicked={this.props.purchaseContinue} btnType="Success">Continue</Button>
            </div>
        )
    }
  

}

export default OrderSummary;