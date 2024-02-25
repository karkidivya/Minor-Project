import {combineReducers } from '@reduxjs/toolkit';
import signupReducer from './features/signup/signupSlice';
import bookingReducer from './features/booking/bookingSlice';

const rootReducer = combineReducers({
    signup: signupReducer,
    booking: bookingReducer
});

export default rootReducer;