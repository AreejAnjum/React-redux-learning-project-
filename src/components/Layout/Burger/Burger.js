import React from 'react'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.css'

//we can save array and obj in const
const Burger = (props) => {
    let transformedObj = Object.keys(props.p_ingredients).map((igKey) => {
        return [...Array(props.p_ingredients[igKey])].map((_, index) => {
            
            return (<BurgerIngredient key={igKey + index} type={igKey} />)
            
        })
        
    })
         
        .reduce((preVal, currentVal) => {
            
            return (preVal.concat(currentVal))
        }
            , [])

    console.log(transformedObj)
    if (transformedObj.length === 0) {
        transformedObj = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedObj}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}




export default Burger;