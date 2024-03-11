'use client'
import {Autocomplete, TextField} from '@mui/material'
import { useEffect, useState } from 'react'
import api from './api'

export default function Search({onSubmit, sx, location}: {onSubmit: (x: any) => void, sx: any, location: {address: string, latitude: string | number, longitude: string | number}}){

    const [possibleOption, setPossibleOption] = useState([])

    const [inputValue, setInputValue ] = useState("")
    const handleChange = (v: string) =>{
        setInputValue(v)
        if ( v.length > 3 )
            api(v, setPossibleOption)
    }


    const handleSubmit = (v: any) =>{
        onSubmit(v)
    }
    return <>
        <Autocomplete 
            sx = {sx}
            autoHighlight
            renderInput = {(params) =>(<TextField {...params} label = "Location"/>)}   
            options = {possibleOption}        
            getOptionLabel = { (option: any) => option?.address}
            value = {location}
            onChange = {(e: any, newValue: any) => {handleSubmit(newValue)}}

            inputValue={inputValue}
            onInputChange = {(e: any, newValue: any) => { handleChange(newValue)}}
            isOptionEqualToValue={(opt, v) => true }
        />
    </>
}
