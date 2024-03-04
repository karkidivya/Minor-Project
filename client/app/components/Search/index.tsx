'use client'
import {Autocomplete, TextField} from '@mui/material'
import { useState } from 'react'
import api from './api'

export default function Search({onSubmit, sx}: {onSubmit: (x: any) => void, sx: any}){
    const [possibleOption, setPossibleOption] = useState([])
    const [value, setValue ] = useState(null);
    const handleChange = (v: string) =>{
        if ( v.length > 3 )
            api(v, setPossibleOption)
        // setValue(v as any)
    }

    const handleSubmit = (v: any) =>{
        // setValue(v)
        console.log(v)
        onSubmit(v)
    }
    return <>
        <Autocomplete 
            sx = {sx}
            autoHighlight
            renderInput = {(params) =>(<TextField {...params} label = "Location"/>)}   
            options = {possibleOption}        
            getOptionLabel = { (option: any) => option?.address}
            value = {value}
            onChange = {(e: any, newValue: any) => {handleSubmit(newValue)}}
            onInputChange = {(e: any, newValue: any) => { handleChange(newValue)}}
        />
    </>
}
