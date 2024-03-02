'use client'
import { Button } from "@mui/material"
import { useRouter } from "next/navigation"

const exampleObject = {
    name: 'David Beckham',
    image: "ellipse-22@2x.png",
    time: '2024 February 28'

}
export default function () {
    const router = useRouter()
    const handleSubmit = () =>{
        router.push('/dashboard')
        
    }

    return <>
        <div style={{position: 'absolute', height: '100vh', width: '100%', background: 'black', opacity: '0.6', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style = {{width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '50px', padding: '20px', gap: '20px'}}>
                <h1>Confirm Your Booking</h1>
                <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
                    <img src={exampleObject.image} alt="" style = {{maxWidth: '100px', width: '100%', borderRadius: '50%'}} />
                    <h4>{exampleObject.name}</h4>
                </div>
                    <h4 style = {{margin: '0px'}}>Request For </h4>
                    <div>
                        <b>
                            {exampleObject.time}
                        </b>
                    </div>

                {/* <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

                </div> */}
                <Button variant = 'contained' onClick = {handleSubmit}>Confirm Booking</Button>


            </div>
        </div>
    </>

}