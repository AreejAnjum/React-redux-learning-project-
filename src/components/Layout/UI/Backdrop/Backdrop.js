
import React from 'react'
import classes from './Backdrop.css'

const Backdrop=(props)=>{
    return( 
        props.purchasing ? <div className={classes.Backdrop} onClick={props.backDropClicked}></div> : null
    )
}

export default Backdrop;