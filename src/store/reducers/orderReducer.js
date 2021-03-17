
import * as actionTypes from '../actionTypes/actionTypes';

import React from 'react'

const initialState={
    loading: false, 
    order: null
}

const orderAC = (state= initialState, action) => {
    
    switch(actionTypes.POST_ORDERS){
        case action.POST_ORDERS:
            return{
                ...state,
                loading: false, 
                order: action.orders
            }

            default: return state
    }
   
}

export default orderAC
