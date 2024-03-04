import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import "../../../public/leaflet/dist/leaflet.css";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { coordinate, address } from '@/lib/features/booking/bookingSlice';
import placeFromPoint from '@/app/components/Search/placeFromPoint';


const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const {latitude, longitude, reloadMap} = useAppSelector((state) => state.booking.location)
  const dispatch = useAppDispatch()

  const generateAddress = async () =>{
    const result = await placeFromPoint(latitude, longitude)
    dispatch(address(result))
  }
  const onMapClick = (e) => {
    dispatch(coordinate({latitude: e.latlng.lat, longitude: e.latlng.lng}))
    // generateAddress()
  };
  
  const loadLeaflet = async () => {
    try {
      const L = await import('leaflet');
      const mapInstance = L.map('map').setView([latitude, longitude], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapInstance);
      const icon = L.icon({
        iconUrl: '/leaflet/dist/images/marker-icon.png',
        shadowUrl: '/leaflet/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
      });
      // Create a marker with the initial location
      const initialMarker = L.marker([latitude, longitude],{icon: icon}).addTo(mapInstance);
      setMap(mapInstance);
      setMarker(initialMarker);
    } catch (error) {
      console.error('Error loading Leaflet library:', error);
    }
  };

  useEffect(()=>{    
    loadLeaflet();
  }, [])

  useEffect(() => {
    console.log('Map useEffect 0');
    if (!map) return;
  
  
    if (map) {
      map.on('click', onMapClick);
    }

    return () => {
      if (map) {
        map.off('click', onMapClick);
      }
    };
  }, [map]);

  useEffect(() => {
    console.log('Map useEffect 1');
    if (!map || !latitude || !longitude) return;

    if (marker) {
      marker.remove();
    }

    const icon = L.icon({
      iconUrl: '/leaflet/dist/images/marker-icon.png',
      shadowUrl: '/leaflet/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    });
    const currentBounds = map.getBounds();
    if(!currentBounds.contains([latitude, longitude])){
      map.setView([latitude, longitude], 11)
    }
    const newMarker = L.marker([latitude, longitude], {
      icon: icon,
    }).addTo(map);

    setMarker(newMarker);
  }, [latitude, longitude]);
  

  return (
    <>
      <div id="map" style={{ height: '300px', width: '100%' }}></div>
      <Script
        src="/leaflet/dist/leaflet.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default MapComponent;