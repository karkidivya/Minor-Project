import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const bookingSlice = createSlice({

    name: "booking",
    initialState: {
        bookingStep: 0,
        location: "",
        phoneNumber: "",
        workDescription: "",
        serviceProvider: "",
        bookingDate: "",
    },
    reducers: {
        bookingStep:(state, action: PayloadAction<any>) =>{    
            state.bookingStep = action.payload
        },
        informationAndWorkDescription: (state, action: PayloadAction<any>) =>{            
            state.location = action.payload.location
            state.phoneNumber = action.payload.phoneNumber
            state.workDescription = action.payload.workDescription
        },
        serviceProvider: (state, action: PayloadAction<any>) =>{
            state.serviceProvider = action.payload.serviceProvider
        },
        bookingDate:(state, action: PayloadAction<any>) =>{
            state.bookingDate = action.payload.bookingDate
        }

        /**
            informationAndWorkDescription
            sesrviceProvider,
            bookingDate
         */
    }

})

export const {
            bookingStep,
            informationAndWorkDescription,
            serviceProvider,
            bookingDate
        } = bookingSlice.actions;

export default bookingSlice.reducer