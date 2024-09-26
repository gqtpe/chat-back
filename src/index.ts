const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req: any, res:any) => {
    res.send('Hello its websocket!');
});

io.on('connection', (socket: any) => {
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});