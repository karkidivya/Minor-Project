'use client'
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Importing from next/navigation
import axios from 'axios';


export default function EsewaSuccess() {
    const router = useRouter();
    const searchParams = new URLSearchParams(location.search);
    const data = Object.fromEntries(searchParams.entries());
    console.log(data.data, "dads ggggg dkdkdkkdkkd")

    const gotoOrderDetails = (data : any) => {
        router.push(`/`);
    }

    useEffect(() => {
        const verifyEsewaPayment = async () => {
            
            try {
                const response = await axios.post(`http://localhost:9000/payment/verify-payment`, { data });
                gotoOrderDetails(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (data) {
            verifyEsewaPayment();
        }
    }, [data, router]);

    return (
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <div>Esewa Success</div>
            </div>
        </div>
    );
}
