"use client"
// pages/index.js
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket'],
}); // Connect to the server using WebSocket transport

const IndexPage = () => {
    useEffect(() => {
        // Listen for incoming notifications
        socket.on('receiveNotification', data => {
            console.log('Received notification:', data);
            // Handle the received notification, e.g., show a notification popup
        });

        // return () => {
        //     // Clean up on unmount
        //     socket.disconnect();
        // };
    });

    const sendNotification = () => {
        console.log("hell")
        // Example: Send a notification to the server
        const notificationData = { message: 'Hello, world!' }; // Define notificationData
        socket.emit('sendNotification', notificationData); // Pass notificationData with emit
    };

    return (
        <div>
            <h1>Socket.io Notification App</h1>
            <button onClick={sendNotification}>Send Notification</button>
        </div>
    );
};

export default IndexPage;
