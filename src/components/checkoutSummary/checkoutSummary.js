
import React, {Fragment} from 'react'
import Burger from '../../components/Layout/Burger/Burger'
import Button from '../../components/Layout/UI/Button/Button'
import './CheckoutSummary.css';


const CheckoutSummary=(props)=>{

    return(
                          
        <Fragment className='CheckoutSummary'>
           
            <div style={{width: '100%', margin: 'auto' , textAlign: 'center'}}>
            <h3 >I hope it tastes well</h3>
                
                <Burger p_ingredients={props.ingredients} />
                <Button clicked={props.checkoutCanceled} btnType='Danger'>Cancel</Button>
                <Button clicked={props.checkoutContinued} btnType='Success'>Continue</Button>
            </div>
        </Fragment>
    )
}

export default CheckoutSummary