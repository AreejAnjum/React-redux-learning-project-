import React, { Component, Fragment} from 'react'
import {withRouter, Route} from 'react-router-dom'

import CheckoutSummary from '../../components/checkoutSummary/checkoutSummary'
import ContactData from "../../container/ContactData/ContactData"

class Checkout extends Component{

    state={
        ingredients:null,
        price: 0
    }

    //it will load before mount so we will nt get error that ingredients not loaded
    componentWillMount() {

        //decoding ingredients sent by burgerBuliderjs
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price;
        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0]==="price"){
                price= param[1]
            }
            else
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients, totalPrice: price });
    }


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
     ingredients={this.state.ingredients} />
      <Route 
    path={this.props.match.path + '/contact-form'} 
    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
         
</Fragment>
       )
   }
}
//{...props} are used to access routes props in ContactData

export default withRouter(Checkout);
