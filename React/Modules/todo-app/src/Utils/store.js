import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

const store = configureStore({
    reducer : {
        todoApp : todoSlice
    }
})

export default store