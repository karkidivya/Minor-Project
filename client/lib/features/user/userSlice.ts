import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({

    name: "booking",
    initialState: {
        isAuthorized: false,
        accessToken: "",
        userDetail: {},
        role: "",
    },
    
    reducers: {
        setAuthorization: (state, action: PayloadAction<boolean>) =>{
            state.isAuthorized = action.payload
            localStorage?.setItem("isAuthorized", String(action.payload))
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
            localStorage?.setItem("accessToken", action.payload)
        },
        setUserDetail: (state, action: PayloadAction<any>) => {
            state.userDetail = action.payload
            localStorage?.setItem("userDetail", JSON.stringify(action.payload))
        },
        setRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload
            localStorage?.setItem("role", action.payload)
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
    setAccessToken, 
    setUserDetail,
    setRole,
} = userSlice.actions

export default userSlice.reducer



































// const userSlice = createSlice({

//     name: "booking",
//     initialState: {
//         isAuthorized: localStorage.getItem("isAuthorized") || false,
//         accessToken: localStorage.getItem("accessToken") || "",
//         userDetail: JSON.parse(localStorage.getItem("userDetail") || "{}"),
//         role: localStorage.getItem("role") || "",
//     },
    
//     reducers: {
//         setAuthorization: (state, action: PayloadAction<any>) =>{

//             state.isAuthorized = action.payload
//             localStorage.setItem("isAuthorized",String(action.payload))
//         },
//         setAccessToken: (state, action: PayloadAction<any>) => {
//             state.accessToken = action.payload
//             localStorage.setItem("accessToken", action.payload)
//         },
//         setUserDetail: (state, action: PayloadAction<any>) => {
//             state.userDetail = action.payload
//             localStorage.setItem("userDetail", JSON.stringify(action.payload))
//         },
//         setRole: (state, action: PayloadAction<any>) => {
//             state.role = action.payload
//             localStorage.setItem("role", action.payload)
//         }

//         /**
//             setCategory,
//             bookingStep,
//             coordinate,
//             address,
//             informationAndWorkDescription,
//             serviceProvider,
//             bookingDateAndTime,
//          */
//     }

// })

// export const {
//     setAuthorization,
//     setAccessToken, 
//     setUserDetail,
//     setRole,
// } = userSlice.actions

// export default userSlice.reducer