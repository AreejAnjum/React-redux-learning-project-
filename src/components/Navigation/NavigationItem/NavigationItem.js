import React from 'react'
import classes from '../NavigationItem/NavigationItem.css'
import {NavLink} from 'react-router-dom'


const NavigationItem=(props)=>(
    <div >
        <li className={classes.NavigationItem}>
        <NavLink to={props.link} activeClassName={classes.MyActiveClass } exact>
        {props.children}</NavLink>
        </li>
    </div>
)

export default NavigationItem;

