'use client'
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Importing from next/navigation
import axios from 'axios';


export default function EsewaSuccess() {
    const router = useRouter();
    const searchParams = new URLSearchParams(location.search);
    const data = Object.fromEntries(searchParams.entries());
    console.log(data.data, "dads ggggg dkdkdkkdkkd")

    
    const gotoUserDashboard = () => {
        router.push('/customerDashboard');
    }

    useEffect(() => {
        const verifyEsewaPayment = async () => {
            
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/verify-payment`, { data });
                console.log(response , "response")
                gotoUserDashboard();
            } catch (error) {
                console.log(error);
            }
        };

        if (data) {
            verifyEsewaPayment();
        }
    }, [data, router]);

    // useEffect(() => {
    //     // Redirect logic can be placed here if needed
    //     // For example, redirecting after a delay
    //     const redirectTimer = setTimeout(() => {
    //         gotoOrderDetails();
    //     }, 1000); // Redirect after 1 seconds

    //     return () => clearTimeout(redirectTimer); // Cleanup timer on component unmount
    // }, []);

    return (
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <div>Esewa Success</div>
            </div>
        </div>
    );
}
