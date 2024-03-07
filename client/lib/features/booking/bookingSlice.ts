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
            state.phoneNumber = action.payload.phoneNumber
            state.workDescription = action.payload.workDescription
        },
        coordinate: (state, action: PayloadAction<any>) =>{
            state.location.latitude = action.payload.latitude
            state.location.longitude = action.payload.longitude
        },
        address: (state, action: PayloadAction<any>)=>{
            state.location.address = action.payload.address
        },
        serviceProvider: (state, action: PayloadAction<any>) =>{
            state.serviceProviderId = action.payload.serviceProviderId
        },
        bookingDateAndTime:(state, action: PayloadAction<any>) =>{
            state.bookingDate = action.payload.bookingDate
            state.bookingTime = action.payload.bookingTime
        },

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
            coordinate,
            address,
            informationAndWorkDescription,
            serviceProvider,
            bookingDateAndTime,
        } = bookingSlice.actions;

export default bookingSlice.reducer