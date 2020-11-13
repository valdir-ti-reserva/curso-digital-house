const http = require('http');
const socketIo = require('socket.io');
const app = require('./app');

const server = http.createServer(app);

const serverIo = socketIo(server, {
  cors: true
});

let messages = [];

//Aguardando a conexão ser realizada pelo cliente
serverIo.on('connection', client => {
  client.on('createConnection', (name) => {
    console.log(`Joined: ${name}`);
  });

  client.on('sendMessage', (name, message) => {
    messages.push({name, message});
    // client.broadcast.emit("chat", name, message);
    serverIo.emit('chat', name, message);
    console.log(`Name: ${name}, message: ${message}`);
    console.log(messages);
  });
});

server.listen(5000, () => console.log('Servidor rodando normalmente!'));
