'use client'
import {useRef} from 'react'
import {Provider} from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { setAccessToken, setAuthorization, setRole, setUserDetail } from '@/lib/features/user/userSlice'
import localStorage from '@/lib/customStorage'


export default function StoreProvider({children,}:{children: React.ReactNode}){
    const storeRef = useRef<AppStore>()
    if(!storeRef.current){
        storeRef.current = makeStore()
        console.log(localStorage?.getItem("isAuthorized") || false)
        storeRef.current.dispatch(setAuthorization(localStorage?.getItem("isAuthorized") || false))
        storeRef.current.dispatch(setAccessToken(localStorage?.getItem('accessToken') || ""))
        storeRef.current.dispatch(setRole(localStorage?.getItem("role") || ""))
        storeRef.current.dispatch(setUserDetail(JSON.parse(localStorage?.getItem("userDetail") || "{}")))
    }

    return <Provider store={storeRef.current}>
            {children}

    </Provider>
}