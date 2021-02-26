

import {v1 as uuidv1} from 'uuid'
const initialState={
    totalCost:0,
    cart:[
        {
            id: uuidv1(),
            productName: "Apples",
            price:2
        }
    ]
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){

        case 'ADD_PRODUCT':
            return{
                ...state,
                totalCost:state.totalCost + parseFloat(action.data.price),
                crat: [...state.cart, action.data]
            }
            case 'DELETE_PRODUCT':

            let filtredCart = state.cart.filter(p=>{
                return p.id !== action.data.id
            })
                return{
                    ...state,
                    totalCost: state.totalCost -parseFloat(action.data.price) ,
                    cart:filtredCart
                }
                default:
                    return{
                        state
                    }
    }

}


export default cartReducer