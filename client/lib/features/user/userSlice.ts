import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({

    name: "booking",
    initialState: {
        isAuthorized: false,
        accessToken: "",
        userDetail: {}
    },
    
    reducers: {
        setAuthorization: (state, action: PayloadAction<any>) =>{
            state.isAuthorized = action.payload
        },
        setAccessToken: (state, action: PayloadAction<any>) => {
            state.accessToken = action.payload.accessToken
        },
        setUserDetail: (state, action: PayloadAction<any>) => {
            state.userDetail = action.payload
        },
        /**
            setCategory,
            bookingStep,
            coordinate,
            address,
            informationAndWorkDescription,
            serviceProvider,
            bookingDateAndTime,
         */
    }

})

export const {
    setAuthorization,
    setAccessToken, 
    setUserDetail,

} = userSlice.actions

export default userSlice.reducer