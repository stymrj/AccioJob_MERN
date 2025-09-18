import {createSlice} from '@reduxjs/toolkit'

const myDataSlice = createSlice({
    name : 'dataSlice',
    initialState : [],
    reducers :{
        addText : (state,action)=>{
            state.push(action.payload)
        },

        clearItems : (state,action)=>{
            return []
        },

        delelteItem : (state,action)=>{
            const id = action.payload
            const newArray = state.filter((item)=>{
                return item.id != id
            })
            return newArray
        }
    }
})

export default myDataSlice.reducer
export const{addText, clearItems, delelteItem} = myDataSlice.actions