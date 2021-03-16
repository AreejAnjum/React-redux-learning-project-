import React, { Component, Fragment} from 'react'
import {withRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'


import CheckoutSummary from '../../components/checkoutSummary/checkoutSummary'
import ContactData from "../../container/ContactData/ContactData"

class Checkout extends Component{



    checkoutCancelHandler=()=>{
        this.props.history.goBack();
    }

    checkoutContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-form')
    }

   render() {
       return(
<Fragment>
    <CheckoutSummary
     checkoutCanceled={this.checkoutCancelHandler}
     checkoutContinued={this.checkoutContinueHandler}
     ingredients={this.props.ing} />
      <Route 
    path={this.props.match.path + '/contact-form'} 
    ><ContactData/></Route>         
 
 </Fragment>
       )
   }
}
//{...props} are used to access routes props in ContactData


const mapStateToProps=(state)=>{
    return{
        ing: state.ingredients
    }
}

export default connect(mapStateToProps)(withRouter(Checkout));
