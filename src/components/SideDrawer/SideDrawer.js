

import React from 'react'
import Logo from '../Logo/Logo'
import classes from './SideDrawer.css'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import Backdrop from '../../components/Layout/UI/Backdrop/Backdrop'

const SideDrawer= (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.backDropClicked) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

return(
        <div>
        <Backdrop purchasing={props.backDropClicked}  backDropClicked={props.backDropClosed}></Backdrop>

        <div className={attachedClasses.join(' ')} onClick={props.backDropClosed}>
            <div className={classes.Logo}><Logo/></div>           
            <nav><NavigationItems/></nav>        
            </div>
            </div>
            
    )
}

export default SideDrawer;