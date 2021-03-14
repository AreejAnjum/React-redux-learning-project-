
import React from 'react'
import classes from './Logo.css'
import logoImage from '../../assests/images/burger-logo.png'

const Logo= (props)=>(
    <div className={classes.Logo}>
        <img src={logoImage} alt="Burger-Logo"/>
    </div>
)

export default Logo;