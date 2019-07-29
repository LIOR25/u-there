import chatRoomsService from '../services/chatRooms.service.js'
import userService from '../services/user.service.js'
import socket from '../services/Socket.service.js'


export default {
    state: {
        userChats: [],
        loggedInUserId: '',
        chatsWith: [],
        chatRoom: {},
        chatWith: {},
        msgs: [],
        newMsg: null,
        date: new Date()
        // loggedInUser: {} // temp for chats
        //filterBy:
    },
    getters: {
        userChats(state) {
            return state.userChats;
        },
        filterBy(state) {
            return state.filterBy;
        },
        userChatsWith(state) {
            return state.chatsWith;
        },
        userChatById: state => id => {
            return state.userChats.find(chat => chat._id === id);
        },
        chatRoom(state) {
            return state.chatRoom;
        },
        chatWith(state) {
            return state.chatWith;
        },
        msgs(state) {
            return state.chatRoom.msgs
        },
        loggedInUserId(state) {
            return state.loggedInUserId;
        },
        newMsg(state) {
            return state.newMsg;
        },
        date(state) {
            return state.date;
        }
    },
    mutations: {
        setUserChats(state, { userChats }) {
            state.userChats = userChats;
        },
        setUserChatsWith(state, { usersExceptMe }) {
            state.chatsWith = usersExceptMe;
        },
        changeChatRoom(state, { chatRoom }) {
            state.chatRoom = chatRoom;
            state.msgs = chatRoom.msgs;
        },
        changeChatWith(state, { otherPerson }) {
            state.chatWith = otherPerson
            // state.chatWith = userService.getById(id)
        },
        addChat(state, { addedChatRoom }) {
            state.userChats.unshift(addedChatRoom);
        },
        addMsg(state, { addedMsg }) {
            state.msgs.push(addedMsg)
        },
        setLoggedInUser(state, { loggedUserId }) {
            state.loggedInUserId = loggedUserId;
        },

        clearNew(state) {
            state.newMsg = null;
        }
    },
    actions: {
        async getLoggedUserId(context) {
            const loggedInUser = await userService.getLoggedUser();         
            const loggedUserId = loggedInUser._id;
            context.commit({type: 'setLoggedInUser', loggedUserId});
        },
        async loadUserChatRooms(context) {
            const loggedInUser = await userService.getLoggedUser()            
            const loggedUserId = loggedInUser._id
            context.commit({type: 'setLoggedInUser', loggedUserId})
            const userChats = await chatRoomsService.query()
            context.commit({ type: 'setUserChats', userChats });
            var usersExceptMeIds = userChats.map(chat => chat.usersIds.filter(id => loggedUserId !== id));           
            var usersExceptMe = [];
            await usersExceptMeIds.forEach(async (id) => {
                const user = await userService.getById(id[0])
                usersExceptMe.push(user);
            })            
            context.commit({ type: 'setUserChatsWith', usersExceptMe })
            return usersExceptMe;            
        },
        async loadChat(context, { chatRoomId }) {
            const loggedUserId = context.state.loggedInUserId;
            chatRoomsService.query(loggedUserId).then(userChats =>
                chatRoomsService.getById(chatRoomId).then(chatRoom => {
                    context.commit({ type: 'changeChatRoom', chatRoom });
                    var otherPersonId = context.state.chatRoom.usersIds.filter(id => loggedUserId !== id);
                    var otherPerson = {};
                    userService.getById(otherPersonId[0]).then(user => {
                        return otherPerson = user;
                    })
                    context.commit({ type: 'changeChatWith', otherPerson });
                    // console.log('state msgs if defined:', context.state.msgs);
                    // console.log(context.getters.loggedUser, context.state.chatRoom._id,)
                   socket.emit('chat join', {user: context.getters.loggedUser, chatId: context.state.chatRoom._id}) //don't get chatroomid without getter
                   socket.on('chat newMsg', addedMsg => {
                       console.log(addedMsg);
                       context.commit({type: 'addMsg', addedMsg });
                       
                    })
                }))
        },
        addMsg(context, { addedMsg }) {
            // console.log(context.getters.chatRoom._id);
            
            chatRoomsService.addMsg(addedMsg, context.state.chatRoom._id).then(newMsg => {
                // context.commit({type: "addMsg", addedMsg})
                console.log(context.state.chatRoom._id);
                
                socket.emit('chat msg', {msg: addedMsg, chatId: context.state.chatRoom._id})

                return newMsg;
            })
        },
        createChatRoom(context, {chatDetails}) {
            // console.log(chatDetails);
            // console.log(context.state.userChats);
            let chatExists = false;
            context.state.userChats.forEach(chat => {
                if (chat.usersIds.includes(chatDetails.usersIds[0] || chatDetails.usersIds[1])) {
                    console.log('chat already exists');
                    chatExists = true;
                    return;
                }

            })
            if (chatExists) return;
            console.log('chat doesnt exist');
            
            chatRoomsService.add(chatDetails.usersIds, chatDetails.addedMsg).then(addedChatRoom => {
                context.commit({type: 'addChat', addedChatRoom})
                socket.emit('chat msg', chatDetails.addedMsg, addedChatRoom._id)
            })
        },
        clearNewMsg(context) {
            context.commit({type: 'clearNew'});
        },
        leaveChat(context, {chatId}) {
            socket.emit("user left", {user: context.getters.loggedUser, chatId: chatId});
        }
    }
}