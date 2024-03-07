import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const signupSllice = createSlice({

    name: "signup",
    initialState: {
        fullName: "",
        emailAddress: "",
        password: "",
        phoneNumber: "",
        profilePicture: undefined,
        introduction: "",
        location: {
            address: "",
            latitude: 27.7172,
            longitude: 85.3240
        },
        skill: "",
        proficiency: "",
        availability: "",
        preference: "",
        company: "",
        position: "",
        timeOfWork: "",
        reference: "",
        certificate: undefined,
        education: "",
        payment: "",
    },
    reducers: {
        personalInformation: (state, action: PayloadAction<any>) =>{
            state.fullName = action.payload.fullName
            state.emailAddress = action.payload.emailAddress
            state.password = action.payload.password
        },
        coordinate: (state, action: PayloadAction<any>) =>{
            state.location.latitude = action.payload.latitude
            state.location.longitude = action.payload.longitude
        },
        address: (state, action: PayloadAction<any>)=>{
            state.location.address = action.payload.address
        },
        phoneNumber: (state, action: PayloadAction<any>) =>{
            state.phoneNumber = action.payload.phoneNumber
        },
        skillAndExpertise: (state, action: PayloadAction<any>) =>{
            state.skill = action.payload.skill
            state.proficiency = action.payload.proficiency
        },
        workPreference: (state, action: PayloadAction<any>) =>{
            state.availability = action.payload.availability
            state.preference = action.payload.preference
        },
        workHistory: (state, action: PayloadAction<any>) =>{
            state.company = action.payload.company
            state.position = action.payload.position
        },
        certificationAndQualification: (state, action: PayloadAction<any>) =>{
            state.certificate = action.payload.certificate
            state.education = action.payload.education
        },
        paymentInformation: (state, action: PayloadAction<any>) =>{
            state.payment = action.payload.payment
        },
        /**
            personalInformation
            profileInformation
            skillAndExpertise
            workPreference
            workHistory
            certificationAndQualification
            paymentInformation
            address
            coordinate
         */
    }

})

export const {
            personalInformation,
            phoneNumber,
            skillAndExpertise,
            address,
            coordinate,
            workPreference,
            workHistory,
            certificationAndQualification,
            paymentInformation    
        } = signupSllice.actions;

export default signupSllice.reducer