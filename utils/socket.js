const socketio = require('socket.io');

const socketHub = {};

module.exports = (server) => {
    io = socketio(server);

    io.on('connection', (socket) => {

        socket.on('new-user', data => {
            socketHub[socket.id] = data;
            console.log(`${data} has connected`);

            io.emit('new-message', {
                message: ` joined the chat`,
                sender: data,
                senderId: socket.id,
                botMessage: true
            });

        });


        socket.on('send-message', data => {
            io.emit('new-message', {
                message: data.message,
                sender: socketHub[data.senderId],
                senderId: data.senderId,
                botMessage: false
            });
        });

        socket.on('disconnect', () => {
            console.log(`${socketHub[socket.id]} has disconnected`);

            io.emit('new-message', {
                message: ` left the chat`,
                sender: socketHub[socket.id],
                senderId: null,
                botMessage: true
            });

            delete socketHub[socket.id];    

        });


    })

    return io;
}