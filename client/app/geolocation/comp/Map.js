import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import "../../../public/leaflet/dist/leaflet.css";

const MapComponent = ({ lat, lng, zoom, onSelectAddress }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
        console.log('Map useEffect 0');
      
        const onMapClick = (e) => {
          setSelectedAddress({ lat: e.latlng.lat, lng: e.latlng.lng });
          onSelectAddress({ lat: e.latlng.lat, lng: e.latlng.lng });
        };
      
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

    const loadLeaflet = async () => {
      try {
        const L = await import('leaflet');
        const mapInstance = L.map('map').setView([lat, lng], zoom);
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
        const initialMarker = L.marker([lat, lng],{icon: icon}).addTo(mapInstance);

        setMap(mapInstance);
        setMarker(initialMarker);
        // setSelectedAddress({ lat, lng });
      } catch (error) {
        console.error('Error loading Leaflet library:', error);
      }
    };

    loadLeaflet();
  }, [lat, lng, zoom]);

  useEffect(() => {
    console.log('Map useEffect 2');

    if (!map || !selectedAddress) return;

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

    const newMarker = L.marker([selectedAddress.lat, selectedAddress.lng], {
      icon: icon,
    }).addTo(map);

    setMarker(newMarker);
  }, [map, selectedAddress]);

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '800px' }}></div>
      <Script
        src="/leaflet/dist/leaflet.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default MapComponent;





// import React, { useState, useEffect } from 'react';
// import Script from 'next/script';
// import L from 'leaflet';

// const MapComponent = ({ lat, lng, zoom, onSelectAddress }) => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   useEffect(() => {
//     const loadLeaflet = async () => {
//       try {
//         const leaflet = await import('leaflet');
//         await import('leaflet/dist/leaflet.css');
//         await import('leaflet-defaulticon-compatibility');
//         await import('leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css');

//         const mapInstance = leaflet.map('map').setView([lat, lng], zoom);
//         leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(mapInstance);

//         mapInstance.on('click', (e) => {
//           setSelectedAddress({ lat: e.latlng.lat, lng: e.latlng.lng });
//           onSelectAddress({ lat: e.latlng.lat, lng: e.latlng.lng });
//         });

//         setMap(mapInstance);
//       } catch (error) {
//         console.error('Error loading Leaflet library:', error);
//       }
//     };

//     loadLeaflet();
//   }, [lat, lng, zoom, onSelectAddress]);

//   useEffect(() => {
//     if (map && selectedAddress) {
//       if (marker) {
//         marker.remove();
//       }

//       const defaultIcon = L.icon({
//         iconUrl: '/marker-icon.png',
//         iconRetinaUrl: '/marker-icon-2x.png',
//         iconSize: [25, 41],
//         iconAnchor: [12, 41],
//         popupAnchor: [1, -34],
//         tooltipAnchor: [16, -28],
//         shadowUrl: '/marker-shadow.png',
//         shadowSize: [41, 41],
//         shadowAnchor: [12, 41]
//       });

//       const newMarker = L.marker([selectedAddress.lat, selectedAddress.lng], { icon: defaultIcon }).addTo(map);
//       setMarker(newMarker);
//     }
//   }, [map, selectedAddress]);

//   return (
//     <div id="map" style={{ height: '400px', width: '100%' }} />
//   );
// };

// export default MapComponent;
