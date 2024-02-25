import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
const store = configureStore({
    reducer: rootReducer,
})

export const makeStore = () =>{
    return configureStore({
        // name: 'signup',
        reducer: rootReducer,
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch