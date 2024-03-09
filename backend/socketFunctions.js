
const handleConnection = (io) => (socket) => {
    let onlineUsers = [];

const addNewUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};
    console.log('A user connected', socket.id);

    // Example: handle notification event
    socket.on('sendNotification', data => {
        console.log('Notification received:', data);
        // Broadcast the notification to all connected clients
        // let mydata = {data: data, id : socket.id}
        let mydata = data
        io.emit('receiveNotification', mydata);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
};

export default handleConnection;
