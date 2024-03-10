import {combineReducers } from '@reduxjs/toolkit';
import signupReducer from './features/signup/signupSlice';
import bookingReducer from './features/booking/bookingSlice';
import userReducer from './features/user/userSlice'

const rootReducer = combineReducers({
    signup: signupReducer,
    booking: bookingReducer,
    user: userReducer
});

export default rootReducer;