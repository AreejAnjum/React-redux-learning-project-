
import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControl from '../../components/Layout/Burger/BurgerControls/BurgerControl/BurgerControl'
import BuildControls from '../../components/Layout/Burger/BurgerControls/BuildControls'
import Modal from '../../components/Layout/UI/Modal/Modal'
import OrderSummary from '../../components/Layout/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/Layout/UI/Spinner/Spinner'
import * as actionTypes from '../../../src/store/action/actionTypes/actionTypes'
import * as burgerBuilderAC from '../../../src/store/action/actionCreators/burgerBuilderAC'

import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';



class BurgerBuilder extends Component {

    state = {

         purhasing : false,
         loading: false
    }

    componentDidMount(){ // best place to fetch data
   this.props.ongetIngredients()
}
        
    
    
    updatePurchaseHandler(ingredients){
        const sum= Object.keys(ingredients)
        .map((igKey)=>{return(ingredients[igKey])})
        .reduce((preVal, currentVal)=>{
            return (preVal+currentVal)
        }, 0)
    return  sum >0} // true/f


        purhasingHandler=()=>{
            this.setState({purhasing: true});
        }

        
        purchaseCancelHandler=()=>{
            this.setState({purhasing: false})
        }


        purchaseContinueHandler=()=>{ 
        this.props.history.push("/checkout")
        }


    render() {
        let disableBtn = { ...this.props.ing };
        for (let key in disableBtn) {
            disableBtn[key] = disableBtn[key] <= 0
        } // salad: true, cheeze: false....

        let orderSummary= null;
        
        //spinner was not appering bcz we wrpped it in modal and was just checking if
        //purchasing true then update while we were changing its value 
       
        let burger= this.props.error ? <p>Ingredients cant be loaded!!!!</p>: <Spinner/>
        if(this.props.ing){
            burger=(
            <React.Fragment>
            <Burger p_ingredients={this.props.ing} />
            <BuildControls 
                addedIngre={this.props.onaddIngredients}
                removeIngre={this.props.onremoveIngredients}
                purchasable={this.updatePurchaseHandler(this.props.ing)}
                disabled={disableBtn}
                price={this.props.price}
                purchasing={this.purhasingHandler} />
                </React.Fragment>);
               
                orderSummary= <OrderSummary
                ingredients={this.props.ing}
                price={this.state.totalPrice}
                purchaseCancel={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                />
                 if(this.state.loading){
                    orderSummary=<Spinner/>
                }
        }

        return (
            <React.Fragment>
            <Modal purhasing={this.state.purhasing} purchaseCancel={this.purchaseCancelHandler}>
               {orderSummary}
            </Modal>
               {burger}
                </React.Fragment>
        );
    }
}


//subscription
const mapStateToProps=(state)=>{
    return{ 
        ing: state.ingredients,
        price: state.totalPrice,
        error: state.error
    }
    }
   

//dispatching actions
const mapDispatchToProps=(dispatch)=>{
    return{ 
        onaddIngredients: (ingName)=>{dispatch(burgerBuilderAC.addIngredients(ingName))},
        onremoveIngredients: (ingName)=>{dispatch(burgerBuilderAC.removeIngredients(ingName))},
        ongetIngredients: ()=>{dispatch(burgerBuilderAC.getIngredients())}    
    }
    } 
   

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(withRouter(BurgerBuilder), axios));
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder));