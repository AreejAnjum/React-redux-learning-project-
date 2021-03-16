
import React, {Fragment} from 'react'
import * as actionTypes from '../../store/action/actionTypes/actionTypes'

const initialState={
    ingredients: null,      

    error: false,
    totalPrice: 20
}

const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 40,
    meat: 50
}


const burgerBuilderReducer = (state= initialState, action) => {

    switch(action.type){
        case actionTypes.ADD_INGREDIENTS:
        return{ 
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName]+1
            },
            totalPrice: state.totalPrice+ INGREDIENT_PRICE[action.ingredientName]
    }

    case actionTypes.REMOVE_INGREDIENTS:
        return{ 
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName]-1
            },
            totalPrice: state.totalPrice- INGREDIENT_PRICE[action.ingredientName]
        }

    case actionTypes.SET_INGREDIENTS:
        return{
            ...state,
            ingredients: action.ingredients,
            error: false
        }

    case actionTypes.FETCH_DATA_FAILED:{
        return{
            ...state,
            error: true
        }
    }

        default:
        return state;

    }


}

export default burgerBuilderReducer;
