'use client'
import Link from "next/link";
import { useState } from "react";

interface ICredential{
    email: string,
    password: string
}

export default function LoginForm(){
    const [ credential, setCredential ] = useState({email: "", password: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> )=>{
        const name = e.currentTarget.name 
        const value = e.currentTarget.value
        
        setCredential((prev) =>{
            return { ...prev, [name]: value}
        })
    }
    const handleSubmit = (e: React.SyntheticEvent)=>{
        e.preventDefault()
        // make the submit request to the backend
    }

    return <>
    <form onSubmit = {handleSubmit} className = 'flex flex-col border rounded-3xl w-96 p-6 gap-3 bg-white'>
        <h1 className = 'text-3xl text-center font-semibold'>KaamSewa</h1>
        
        <div className="email flex flex-col">
            <label>Email Address</label>
            <input 
                    type = 'text'
                    name = 'email'
                    value = {credential.email}
                    onChange = {handleChange}
                    className = 'border-2 rounded-md'
                    />

        </div>
        
        <div className="password flex flex-col">
            <label>Password</label>
            <input
                    type = 'password'
                    name = 'password'
                    value = {credential.password}
                    onChange = {handleChange}
                    className = 'border-2 rounded-md'
                />  
            
        </div>
        <Link href = "#" className = 'text-blue-400'>Forgot Password ?</Link>


        <button type = 'submit' className = "bg-blue-500 rounded-xl text-white font-bold py-1">Login</button>
        <div>
            Login With -{">"} Bunch of social icons
        </div>
        <div className = 'flex items-center flex-col'>

            <p className = 'text-center'>
               If you don't have an account
            </p>
            
            <Link href = '#'>Sign Up</Link>
            
        </div>
    </form>
    </>
}