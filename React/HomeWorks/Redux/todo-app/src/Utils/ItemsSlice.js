import { createSlice } from '@reduxjs/toolkit'

const shoppingSlice = createSlice({
    name: "shoppingList",
    initialState : [],
    reducers : {

       addItems : (state,action)=>{
             state.push(action.payload)
       },

       clearItems : (state,action)=>{
            return []
       }


    }
})

// console.log(shoppingSlice.actions)

export default shoppingSlice.reducer
export const{addItems, clearItems } = shoppingSlice.actions
