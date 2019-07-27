
const socketIO = require('socket.io');
// const roomService = require('./room-service');

var io;
// var activeUsersCount = 0;

function setup(http) {
    io = socketIO(http);
    io.on('connection', function (socket) {
        console.log('a user connected');
        // var room;
        // activeUsersCount++;

        socket.on('disconnect', () => {
            console.log('user disconnected');
            // activeUsersCount--;
        });

        socket.on('chat join', ({user, chatId}) => {
            // room = roomService.placeInRoom(user)
            console.log('Placed', user.firstName, 'in room:', chatId);
            socket.join(chatId);
        });

        socket.on('chat msg', ({msg, chatId}) => {
            console.log('message: ', msg, chatId);
            io.to(chatId).emit('chat newMsg', msg);
        });
    });
}


module.exports = {
    setup
}