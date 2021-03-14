
import axios from '../../axios-orders'
import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler'

class Orders extends Component {

    state={ 
        orders: [],
        loading: true
    }
    componentDidMount()
{
    axios.get('/orders.json')
    .then(res=>{
       
        const fetchedOrders=[];
        for(let key in res.data){
            console.log("this is res.data[key]",res.data[key])
            fetchedOrders.push({
                ...res.data[key],   //KYSHGD&^*@&#HDWJ
                id: key
            }
            )}
            this.setState({loading: false, orders: fetchedOrders})
        })
        .catch(err=>this.setState({loading: false}))
    
} 
   render() {
        return (
            <div>
               {this.state.orders.map(order=>{
                   return(<Order 
                   key= {order.key}
                   ingredients={order.ingredients}
                   price={+order.totalPrice}
                   />)
               })}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios)
