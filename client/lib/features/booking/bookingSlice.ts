import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const bookingSlice = createSlice({

    name: "booking",
    initialState: {
        bookingStep: 0,
        category:"",
        location: "",
        phoneNumber: "",
        workDescription: "",
        serviceProvider: "",
        bookingDate: "",
        bookingTime: "",
    },
    reducers: {
        setCategory:(state, action: PayloadAction<any>) =>{
            state.category = action.payload

        },
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
        bookingDateAndTime:(state, action: PayloadAction<any>) =>{
            state.bookingDate = action.payload.bookingDate
            state.bookingTime = action.payload.bookingTime
        }

        /**
            informationAndWorkDescription
            sesrviceProvider,
            bookingDate
         */
    }

})

export const {
            setCategory,
            bookingStep,
            informationAndWorkDescription,
            serviceProvider,
            bookingDateAndTime,
        } = bookingSlice.actions;

export default bookingSlice.reducer