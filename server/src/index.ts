import express from 'express';
import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = new HttpServer(app);
const io = new Server(server);

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ name: 'Time To - Hackaton 2022', version: process.env.npm_package_version });
  io.emit('message', 'Hello World');
});

const store = new Map();
let connectedClient: number = 0;
io.on('connection', (socket) => {
  connectedClient += 1;
  console.log(`Client connected: ${connectedClient}`);

  socket.on('disconnect', () => {
    connectedClient -= 1;
    console.log(`Client connected: ${connectedClient}`);
  });

  socket.on('createRoom', (roomName, username) => {
    console.log(`Room joined: ${roomName} by ${socket.id} with username "${username}"`);
    socket.join(roomName);
    if (!store.has(roomName)) store.set(roomName, { count: 0, users: [] });
    store.get(roomName).users.push({ username, id: socket.id });

    io.to(roomName).emit('currentCount', store.get(roomName).count);
    io.to(roomName).emit('playerList', store.get(roomName).users);
    socket.on('increaseCount', () => {
      store.set(roomName, { count: store.get(roomName).count + 1 });
      io.to(roomName).emit('currentCount', store.get(roomName).count);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
