// socketFunctions.js
const handleConnection = (io) => (socket) => {
    console.log('A user connected');

    // Example: handle notification event
    socket.on('sendNotification', data => {
        console.log('Notification received:', data);
        // Broadcast the notification to all connected clients
        io.emit('receiveNotification', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
};

export default handleConnection;
