import socket from '../services/Socket.service.js'

export default {
    state: {
        msgs: []
    },
    getters: {
        msgs(state) {
            return state.msgs; 
        }
    },
    mutations: {
        addMsg(state, {msg}) {
            state.msgs.push(msg);
        }
    },
    actions: {
        chatJoin({commit}) {
            socket.emit('chat join', /*user, chatroomId  */)
            socket.on('chat newMsg', msg=>commit({type: 'addMsg', msg }));
        },
        sendMsg(context, {txt}) {
            socket.emit('chat msg', txt)
        },
        
    }
}