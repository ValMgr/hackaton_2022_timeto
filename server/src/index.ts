import express from 'express';
import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';
import fs from 'fs';

import type { Answer, Question } from 'types';
import { findMostVotedOption } from './utils/vote';
import { createCountdown } from './utils/timer';

const app = express();
const server = new HttpServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const PORT = 3000;

const rawJSON: string = fs.readFileSync(`${__dirname}/utils/questions.json`, 'utf-8');
const flatQST: Question[] = JSON.parse(rawJSON);

const questions: Question[] = flatQST.filter((q) => q.type === 'Core').sort((a, b) => a.order - b.order);
// const events: Question[] = flatQST.filter((q) => q.type === 'Event').sort((a, b) => a.order - b.order);

app.get('/', (req, res) => {
  res.json({ name: 'Time To - Hackaton 2022', version: process.env.npm_package_version });
  io.emit('message', 'Hello World');
});

const store = new Map();

io.on('connection', (socket) => {
  socket.on('createRoom', (roomName, username) => {
    console.log(`Room "${roomName}" joined by ${socket.id} with username "${username}"`);
    socket.join(roomName);
    if (!store.has(roomName)) store.set(roomName, { users: [], vote: [], results: [], countdown: createCountdown(60), stage: 0 });
    store.get(roomName).users.push({ username, id: socket.id });
    socket.emit('setQuestion', questions[store.get(roomName).stage]);
    socket.emit('startCountdown');

    io.to(roomName).emit('playerList', store.get(roomName).users);

    socket.on('startTimer', () => {
      const { countdown } = store.get(roomName);
      console.log(`Timer is running in room "${roomName}: ${countdown.isRunning()}"`);
      if (!countdown.isRunning()) {
        console.log('Timer started');
        countdown.start();
        const interval = setInterval(() => {
          io.to(roomName).emit('setTimer', countdown.getTime());
          if (countdown.isFinished()) {
            clearInterval(interval);
            io.to(roomName).emit('timer', 0);
          }
        }, 1000);
      }
    });

    socket.on('vote', (value: Answer) => {
      if (store.get(roomName).vote.find((v) => v.id === socket.id)) {
        store.get(roomName).vote.find((v) => v.id === socket.id).value = value;
      } else {
        store.get(roomName).vote.push({ id: socket.id, value });
      }
      console.log(`${store.get(roomName).vote.length} / ${store.get(roomName).users.length}`);

      if (store.get(roomName).vote.length === store.get(roomName).users.length) {
        const results = store.get(roomName).vote.map((v) => v.value);
        const mostVotedOption = findMostVotedOption(results);
        io.to(roomName).emit('result', mostVotedOption);
        store.get(roomName).results.push(mostVotedOption);
        store.get(roomName).stage += 1;
        store.get(roomName).vote = [];
        if (store.get(roomName).stage < questions.length) {
          io.to(roomName).emit('setQuestion', questions[store.get(roomName).stage]);
        }
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
