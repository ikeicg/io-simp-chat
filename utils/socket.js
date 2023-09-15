const socketio = require('socket.io');


module.exports = (server) => {
    io = socketio(server);

    io.on('connection', () => {
        console.log("New user connected");
    })

    return io;
}