import {configureStore} from '@reduxjs/toolkit'
import dataSliceReducer from './todoSlice'

const store = configureStore({
    reducer : {
        data : dataSliceReducer
    }
})

export default store