import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const signupSllice = createSlice({

    name: "signup",
    initialState: {
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        profilePicture: undefined,
        introduction: "",
        location: "",
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
            state.email = action.payload.email
            state.password = action.payload.password
        },
        profileInformation: (state, action: PayloadAction<any>) =>{
            state.profilePicture = action.payload.profilePicture
            state.introduction = action.payload.introduction
            state.location = action.payload.location
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


         */
    }

})

export const {
            personalInformation,
            profileInformation,
            skillAndExpertise,
            workPreference,
            workHistory,
            certificationAndQualification,
            paymentInformation    
        } = signupSllice.actions;

export default signupSllice.reducer