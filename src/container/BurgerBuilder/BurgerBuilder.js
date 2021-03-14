
import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControl from '../../components/Layout/Burger/BurgerControls/BurgerControl/BurgerControl'
import BuildControls from '../../components/Layout/Burger/BurgerControls/BuildControls'
import Modal from '../../components/Layout/UI/Modal/Modal'
import OrderSummary from '../../components/Layout/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/Layout/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler'
import {withRouter} from 'react-router-dom'

const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 40,
    meat: 50
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,         // ingredient is the obj while salad is key and 1 is value.           
        totalPrice: 20,
         purchasable: false, 
         purhasing : false,
         loading: false,
         errors: false
    }

    componentDidMount(){ // best place to fetch data
        axios.get('https://real-burger-builder-project-default-rtdb.firebaseio.com/Ingredients.json')
        .then(
            (response)=>{this.setState({ingredients: response.data})
            console.log('[ingredients]', this.state.ingredients)}
        )
    .catch((error)=>{
        this.setState({error: true})
    })}
        
    
    
    updatePurchaseHandler(ingredients){
        const sum= Object.keys(ingredients)
        .map((igKey)=>{return(ingredients[igKey])})
        .reduce((preVal, currentVal)=>{
            return (preVal+currentVal)
        }, 0)
    this.setState({purchasable: sum >0})}


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        const oldPrice = INGREDIENT_PRICE[type]  // object value can be access through it
        const newPrice = this.state.totalPrice + oldPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    this.updatePurchaseHandler(updatedIngredients);
    }


    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount - 1;

        if (this.state.ingredients[type] <= 0) { return }

        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        const oldPrice = INGREDIENT_PRICE[type]  // object value can be access through it
        const newPrice = this.state.totalPrice-oldPrice ;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseHandler(updatedIngredients);}


        purhasingHandler=()=>{
            this.setState({purhasing: true});
        }

        
        purchaseCancelHandler=()=>{
            this.setState({purhasing: false})
        }


        purchaseContinueHandler=()=>{
        //     this.setState({loading:'true'})
        //     const order={
        //         ingredients: this.state.ingredients,
        //         totalPrice: this.state.totalPrice,
        //         customer:{
        //             name: 'Areej Anjum',
        //         address: {
        //             street: '1',
        //             zip: '4500',
        //             country: 'Pakistan'
        //         }},
        //         email: 'test@test.com'
        //     }
        //     //alert('you continue')
        //     axios.post('/orders.json', order)   //we send data(order) with post
        //     //format for firebase orders.json'
   
        // .then((response)=>{
        // console.log(response) 
        // this.setState({loading: false, purhasing: false})})
        // .catch((errors)=>{
        //     console.log(errors)
        // this.setState({loading: false, purhasing: false})
        // })


        //passing data through url to checkout component
        const queryParam = [];
        for(let i in this.state.ingredients){
            queryParam.push(encodeURIComponent(i)+ "="+ encodeURIComponent(this.state.ingredients[i]))
        }
        queryParam.push("price=" +this.state.totalPrice)
        const queryString= queryParam.join('&')
        this.props.history.push({
            pathname: "/checkout",
            search : "?"+queryString
        })
   
        }


    render() {
        let disableBtn = { ...this.state.ingredients };
        for (let key in disableBtn) {
            disableBtn[key] = disableBtn[key] <= 0
        } // salad: true, cheeze: false....

        let orderSummary= null;
        
        //spinner was not appering bcz we wrpped it in modal and was just checking if
        //purchasing true then update while we were changing its value 
       
        let burger= this.state.error ? <p>Ingredients cant be loaded!!!!</p>: <Spinner/>
        if(this.state.ingredients){
            burger=(
            <React.Fragment>
            <Burger p_ingredients={this.state.ingredients} />
            <BuildControls addedIngre={this.addIngredientHandler}
                removeIngre={this.removeIngredientHandler}
                purchasable={this.state.purchasable}
                disabled={disableBtn}
                price={this.state.totalPrice}
                purchasing={this.purhasingHandler} />
                </React.Fragment>);
               
                orderSummary= <OrderSummary
                ingredients={this.state.ingredients}
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

export default withErrorHandler(withRouter(BurgerBuilder), axios);