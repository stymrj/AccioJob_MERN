import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : 'todoApp',
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

console.log(todoSlice)
console.log(todoSlice.reducer)
console.log(todoSlice.actions)

export default todoSlice.reducer
export const{addItems, clearItems } = todoSlice.actions