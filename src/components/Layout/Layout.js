
import React from 'react'
import ToolBar from '../Navigation/Toolbar/ToolBar';
import BuildControls from './Burger/BurgerControls/BuildControls';
import classes from './Layout.css'
import SideDrawer from '../SideDrawer/SideDrawer'


class Layout extends React.Component{
    
    state={
        showBackdrop: false
    }

    showBackdropHandler=()=>{
        this.setState({showBackdrop: false})
    }

    DrawerToggleHandler =()=>{
        this.setState((prevState )=>{
            return({showBackdrop: !prevState.showBackdrop})
        })
    }

    render()
    {
        return( <React.Fragment>

            <ToolBar DrawerToggleHandler={this.DrawerToggleHandler}/>
            <SideDrawer backDropClosed={this.showBackdropHandler} backDropClicked={this.state.showBackdrop}/>
            <main  className={classes.Content}>{this.props.children}</main>
           
        </React.Fragment>)
    }
}


export default Layout;