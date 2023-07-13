import React, { createContext, useReducer } from 'react';



const initailState = {
    selectedItems : [],
    itemCounter : 0,
    total : 0,
    checkOut: false
}



const sumItems = item => {
    const itemCounter = item.reduce((total , item) => total + item.quantity , 0)
    const total = item.reduce((total , item) => total + item.price * item.quantity , 0).toFixed(2)

    return{itemCounter , total}
}


const CartReducer = (state , action) => {
    switch (action.type){
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
               ...state,
               selectedItems: [...state.selectedItems],
               ...sumItems(state.selectedItems)
            }

        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumItems(newSelectedItem)
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity ++;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity --;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return{
                selectedItems : [],
                itemCounter : 0,
                total : 0,
                checkOut: true
            }
        case "CLEAR":
            return{
                selectedItems : [],
                itemCounter : 0,
                total : 0,
                checkOut: false
            }
            default:
                return state
    }

}


export const CartContext = createContext()

const CartContectProvider = ({children}) => {



    const [state , dispatch] = useReducer(CartReducer , initailState)


    return (
        <CartContext.Provider value={{state , dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContectProvider;