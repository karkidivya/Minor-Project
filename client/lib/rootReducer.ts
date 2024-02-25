import {combineReducers } from '@reduxjs/toolkit'
import signupReducer from './features/signup/signupSlice'

const rootReducer = combineReducers({
    counter: signupReducer
})

export default rootReducer