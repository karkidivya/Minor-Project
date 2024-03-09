
let onlineUsers = [];
const handleConnection = (io) => (socket) => {
    

const addNewUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
    console.log(onlineUsers,"scdfa")
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (receiverEmail) => {
  console.log(onlineUsers, "herehere")
  return onlineUsers.find((user) => user.username === receiverEmail);
};

    console.log('A user connected', socket.id);

    socket.on("newServiceProvider", (username) => {
      console.log(username)
      addNewUser(username, socket.id);
    });

    // Example: handle notification event
    socket.on('sendNotification', ({receiverEmail, data}) => {
      console.log(receiverEmail , data)
      const receiver = getUser(receiverEmail);
      console.log(receiver)
      console.log('Notification received:', data);
        // Broadcast the notification to all connected clients
        // let mydata = {data: data, id : socket.id}
        let mydata = data
        io.to(receiver.socketId).emit('receiveNotification', mydata);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
};

export default handleConnection;
