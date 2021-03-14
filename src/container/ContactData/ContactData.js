

import React, { Component } from 'react'
import Button from '../../components/Layout/UI/Button/Button'
import classes from'./ContactData.css'
import axios from '../../axios-orders'
import Spinner from '../../components/Layout/UI/Spinner/Spinner'
import Input from '../../components/Layout/UI/Input/Input'

class ContactData extends Component {

    state={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false

    }

    orderHandler=(event)=>{
        event.preventDefault()
               this.setState({loading:'true'})
            const order={
                ingredients: this.props.ingredients,
                totalPrice: this.props.price,
                customer:{
                    name: 'Areej Anjum',
                address: {
                    street: '1',
                    zip: '4500',
                    country: 'Pakistan'
                }},
                email: 'test@test.com'
            }
            //alert('you continue')
            axios.post('/orders.json', order)   //we send data(order) with post
            //format for firebase orders.json'
   
        .then((response)=>{
        console.log(response) 
        this.setState({loading: false})
        this.props.history.push('/')  //redirect
    
    })
        .catch((errors)=>{
            console.log(errors)
        this.setState({loading: false})
        })

        
    }

    render () {
        let form = (
            <form>
                <Input inputtype="text" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="text" type="email" name="email" placeholder="Your Mail" />
                <Input inputtype="text" type="text" name="street" placeholder="Street" />
                <Input inputtype="text" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
