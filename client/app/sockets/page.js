"use client"
// pages/index.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSocket } from '../context/SocketContext';
// const socket = io('http://localhost:5000', {
//   transports: ['websocket'],
// }); // Connect to the server using WebSocket transport

const IndexPage = () => {
    const socket = useSocket();
    console.log(socket)
    // const [socket, setSocket] = useState(null);
    // useEffect(() => {
    //     setSocket(io("http://localhost:5000", { transports:['websocket']}));
    //   }, []);
    

    // useEffect(() => {
        // Listen for incoming notifications
    //     socket.on('receiveNotification', data => {
    //         console.log('Received notification:', data.data, data.id);
    //         // Handle the received notification, e.g., show a notification popup
    //     });

    //     // return () => {
    //     //     // Clean up on unmount
    //     //     socket.disconnect();
    //     // };
    // },[socket]);

    const sendNotification = () => {
        console.log("hell")
        // Example: Send a notification to the server
        const notificationData = { message: 'Hello, world!' }; // Define notificationData
        socket.emit('sendNotification', {receiverEmail:'karkidivya5@gmail.com' , data : notificationData}); // Pass notificationData with emit
    };

    return (
        <div>
            <h1>Socket.io Notification App</h1>
            <button onClick={sendNotification}>Send Notification</button>
        </div>
    );
};

export default IndexPage;
