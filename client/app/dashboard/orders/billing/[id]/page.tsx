'use client'
import { useParams } from "next/navigation"
import BillingForm from "../../../components/BillingForm"


export default function Billing(){  
    const params = useParams<{id: string}>()
    
    return (
        <BillingForm bookingId={params.id}/>
    )

}