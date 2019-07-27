
const socketIO = require('socket.io');
// const roomService = require('./room-service');

var io;
var activeUsersCount = 0;

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

        socket.on('chat join', (user, chatroomId) => {
            // room = roomService.placeInRoom(user)
            console.log('Placed', user, 'in room:', chatroomId);
            socket.join(chatroomId);
        });

        socket.on('chat msg', (msg, chatroomId) => {
            console.log('message: ' + msg);
            io.to(chatroomId).emit('chat newMsg', msg);
        });
    });




}


module.exports = {
    setup
}