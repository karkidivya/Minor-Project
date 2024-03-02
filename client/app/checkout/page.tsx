'use client'
import React from 'react';
import esewaCall from './esewa';

const TestButton = () => {
  const handleClick = () => {
    // Function to be executed when the button is clicked
    esewaCall()
    console.log("Button clicked!");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default TestButton;
