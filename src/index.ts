const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:5173"
    }
});

const PORT = process.env.PORT || 3000;

app.get('/', (req: any, res:any) => {
    res.send('Hello its websocket!');
});

io.on('connection', (socket: any) => {
    console.log('a user connected');
});

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
