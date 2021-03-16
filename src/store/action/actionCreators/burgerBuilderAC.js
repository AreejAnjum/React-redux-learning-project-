
import * as actionTypes from '../actionTypes/actionTypes';
import axios from '../../../axios-orders'

export const addIngredients= (name)=>{

return{ 
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name
}
}


export const removeIngredients= (name)=>{

    return{ 
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: name
    }
    }


export const setIngredients=(ingre)=>{
    return{
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingre
    }
}

export const fetchDataFailed=()=>{
    return{
        type: actionTypes.FETCH_DATA_FAILED,

    }
}

//in dispatch we call the func instead of passing them so using () with them too
export const getIngredients=()=>{
    return dispatch=>{
        axios.get('https://real-burger-builder-project-default-rtdb.firebaseio.com/Ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data))
        })
        .catch((error)=>{
        dispatch(fetchDataFailed())
    })
    }
}