"use client"
import dynamic from 'next/dynamic';
import React, { useMemo, useState } from 'react';
// import MapComponent from './comp/Map';


const Mapping = () => {
  const MapComponent = useMemo(() => dynamic(
  () => import('./comp/Map'),
  { 
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
), [])
  const [userLocation, setUserLocation] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 13
        });
      }, (error) => {
        console.error('Error getting user location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div>
      <h1>OpenStreetMap with Leaflet in Next.js</h1>
      {userLocation ? (
        <MapComponent {...userLocation} onSelectAddress={handleAddressSelection} />
      ) : (
        <button onClick={getLocation}>Get User Location</button>
      )}
      {selectedAddress && (
        <div>
          <h2>Selected Address:</h2>
          <p>Latitude: {selectedAddress.lat}</p>
          <p>Longitude: {selectedAddress.lng}</p>
          {/* You can display additional address information here */}
        </div>
      )}
    </div>
  );
};

export default Mapping;

// import Map1 from "./comp/Map1";

// export default function Home() {
//   return (
//     <main>
//       <Map1 />
//     </main>
//   );
// }
