"use client"
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import Search from '../components/Search';
import { useAppDispatch } from '@/lib/hooks';
const GeoLocation = ({address, coordinate, location}) => {
  const MapComponent = useMemo(() => dynamic(
  () => import('./comp/Map'),
  { 
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
), [])

  const dispatch = useAppDispatch()

  const onSubmit = (location) =>{
    console.log(location)
    dispatch(address(location.address))
    dispatch(coordinate({longitude: location.longitude, latitude: location.latitude}))
  }

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {

//       }, (error) => {
//         console.error('Error getting user location:', error);
//       });
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };

  return <>
    <MapComponent address = {address} coordinate = {coordinate} latitude={location.latitude} longitude = {location.longitude}/>
    <Search sx = {{width: '100%'}} onSubmit={onSubmit} location = {location}/>
  </>
};

export default GeoLocation;


