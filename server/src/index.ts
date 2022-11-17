import express from 'express';
import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';

import { findMostVotedOption } from './utils/vote';

const app = express();
const server = new HttpServer(app);
const io = new Server(server);

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ name: 'Time To - Hackaton 2022', version: process.env.npm_package_version });
  io.emit('message', 'Hello World');
});

const store = new Map();
io.on('connection', (socket) => {
  socket.on('createRoom', (roomName, username) => {
    console.log(`Room "${roomName}" joined by ${socket.id} with username "${username}"`);
    socket.join(roomName);
    if (!store.has(roomName)) store.set(roomName, { users: [], vote: [], results: [] });
    store.get(roomName).users.push({ username, id: socket.id });

    io.to(roomName).emit('playerList', store.get(roomName).users);

    socket.on('vote', (value) => {
      if (store.get(roomName).vote.find((v) => v.id === socket.id)) {
        store.get(roomName).vote.find((v) => v.id === socket.id).value = value;
      } else {
        store.get(roomName).vote.push({ id: socket.id, value });
      }
      console.log(store.get(roomName).vote);
      io.to(roomName).emit('voteList', store.get(roomName).vote.length);

      if (store.get(roomName).vote.length === store.get(roomName).users.length) {
        const results = store.get(roomName).vote.map((v) => v.value);
        const mostVotedOption = findMostVotedOption(results);
        io.to(roomName).emit('result', mostVotedOption);
        store.get(roomName).results.push(mostVotedOption);
      }
    });

    socket.on('disconnect', () => {
      console.log(`Client ${socket.id} as known as ${username} disconnected`);
      store.get(roomName).users = store.get(roomName).users.filter((u) => u.id !== socket.id);
      io.to(roomName).emit('playerList', store.get(roomName).users);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
