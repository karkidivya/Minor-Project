import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({

    name: "booking",
    initialState: {
        isAuthorized: false,
        accessToken: "",
        emailAddress: "",
        fullName: "",
        phoneNumber: "",
        password: "",
        role: "",
        id: "",
        location: {
            address: "",
            latitude: "",
            longitude: "",
        },
    },
    
    reducers: {
        setAuthorization: (state, action: PayloadAction<any>) =>{
            state.isAuthorized = action.payload
        },
        setAccessToken: (state, action: PayloadAction<any>) => {
            state.accessToken = action.payload.accessToken
        },
        setUserDetail: (state, action: PayloadAction<any>) => {
            state.fullName = action.payload.fullName
            state.emailAddress = action.payload.emailAddress
            state.phoneNumber = action.payload.phoneNumber
            state.password = action.payload.password
            state.location.address = action.payload.location.address
            state.location.latitude = action.payload.location.latitude
            state.location.longitude = action.payload.loaction.longitude
            state.id = action.payload.id
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