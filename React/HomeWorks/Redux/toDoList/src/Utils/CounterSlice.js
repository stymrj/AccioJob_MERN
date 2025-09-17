import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'CounterSlice',
    initialState : 0,
    reducers : {
        increment : (state,action)=>{
            //console.log(state)
            return state + 1
        },

        reset : (state,action)=>{
            //console.log(state)
            return 0
        },

        decrement : (state,action)=>{
            //console.log(state)
            return state - 1
        }

    }
})


console.log(counterSlice)

export default counterSlice.reducer
export const{increment,reset,decrement} = counterSlice.actions