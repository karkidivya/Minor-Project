import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const bookingSlice = createSlice({

    name: "booking",
    initialState: {
        bookingStep: 0,
        category:{
            categoryName: '',
            categoryId: ""
        },
        phoneNumber: "",
        workDescription: "",
        location: {
            address: "",
            latitude: 27.7172,
            longitude: 85.3240
        },
        serviceProviderId: "",
        date: "",
        time: "",
    },
    reducers: {
        setCategory:(state, action: PayloadAction<any>) =>{
            state.category = action.payload
        },
        bookingStep:(state, action: PayloadAction<any>) =>{    
            state.bookingStep = action.payload
        },
        informationAndWorkDescription: (state, action: PayloadAction<any>) =>{            
            state.phoneNumber = action.payload.phoneNumber
            state.workDescription = action.payload.workDescription
        },
        coordinate: (state, action: PayloadAction<any>) =>{
            state.location.latitude = action.payload.latitude
            state.location.longitude = action.payload.longitude
        },
        address: (state, action: PayloadAction<any>)=>{
            state.location.address = action.payload
        },
        serviceProvider: (state, action: PayloadAction<any>) =>{
            state.serviceProviderId = action.payload
        },
        bookingDateAndTime:(state, action: PayloadAction<any>) =>{
            state.date = action.payload.date
            state.time = action.payload.time
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
            setCategory,
            bookingStep,
            coordinate,
            address,
            informationAndWorkDescription,
            serviceProvider,
            bookingDateAndTime,
        } = bookingSlice.actions;

export default bookingSlice.reducer