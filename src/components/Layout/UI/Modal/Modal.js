
import React, {Component} from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component {
   
    shouldComponentUpdate(nextProps){
        console.log("should component update is called from modal")
        return this.props.purhasing!==nextProps.purhasing || nextProps.children !==this.props.children
        //checking children bcz we changing odersummary val
        
    }
    componentWillUpdate(){
        console.log("[component updated], modal")
    }
    render(){


        return(
            <div>
            <Backdrop purchasing={this.props.purhasing} backDropClicked={this.props.purchaseCancel}></Backdrop>
           <div className={classes.Modal}
            style={{
                        transform: this.props.purhasing ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.purhasing ? '1' : '0'
                    }}
                    
                    >{this.props.children}
            </div>
            </div>
        
        )
    }

}

export default Modal;