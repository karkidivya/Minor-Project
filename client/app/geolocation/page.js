"use client"
// pages/index.js

import React from 'react';

import MapComponent from './comp/Map.js';

const mapping = () => {
  // Example coordinates (San Francisco)
  const lat = 37.7749;
  const lng = -122.4194;
  const zoom = 13;

  return (
    <div>
      <h1>OpenStreetMap with Leaflet in Next.js</h1>
      <MapComponent lat={lat} lng={lng} zoom={zoom} />
    </div>
  );
};
export default mapping;


