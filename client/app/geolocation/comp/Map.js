// components/MapComponent.js
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ lat, lng, zoom }) => {
  useEffect(() => {
    // Check if window is defined (i.e., we're in the browser environment)
    if (typeof window !== 'undefined') {
      // Dynamically import Leaflet to ensure it's only loaded on the client side
      import('leaflet').then((L) => {
        // Initialize Leaflet map
        const map = L.map('map').setView([lat, lng], zoom);

        // Add tile layer from OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
      }).catch((error) => {
        console.error('Error loading Leaflet library:', error);
      });
    }
  }, [lat, lng, zoom]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
