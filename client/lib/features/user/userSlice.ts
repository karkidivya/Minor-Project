import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({

    name: "booking",
    initialState: {
        isAuthorized: false,
        emailAddress: "",
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
        }

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
} = userSlice.actions

export default userSlice.reducer