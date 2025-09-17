import { configureStore } from '@reduxjs/toolkit'
import shoppingSlice from './ItemsSlice'

const store = configureStore({
    reducer : {
        shoppingList : shoppingSlice
    }
})

export default store