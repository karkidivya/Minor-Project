import signupReducer from './features/signup/signupSlice';
import bookingReducer from './features/booking/bookingSlice';
import userReducer from './features/user/userSlice'
import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    user: userReducer,
    booking: bookingReducer,
    signup: signupReducer
});


// const rootPersistReducer = persistReducer(persistConfig, rootReducer)
export default rootReducer
