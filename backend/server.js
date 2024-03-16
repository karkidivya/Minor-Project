import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db.js'
import mainRouter from './routes/index.js'
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import handleConnection from './socketFunctions.js';
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
// const io = new SocketServer(server);
dotenv.config();

const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
// Socket.io connection handling
io.on('connection', handleConnection(io));
dotenv.config();

const PORT = 8000;


// app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());
app.use('/', mainRouter);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
