
import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem'

const NavigationItems=(props)=>{
    return (
        // no need to set active={true}, for boolean simple active means true
        <div>
        <ul className={classes.NavigationItems}>
        <NavigationItem link="/" >BurgerBuilder</NavigationItem>  
        <NavigationItem link="/orders" >Orders</NavigationItem></ul>
        </div>
    )
}

export default NavigationItems;