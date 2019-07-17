import chatRoomsService from '../services/chatRooms.service.js'
import userService from '../services/user.service.js'

export default {
    state: {
        userChats: [],
        loggedInUserId: '5d2da4841b871768838cbf76',
        chatsWith: [],
        chatRoom: {},
        chatWith: {},
        msgs: []
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
        }
        // loggedInUser(state) {
        //     return state.loggedInUser;
        // }
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
        // setLoggedInUser(state, { loggedInUser }) {
        //     state.loggedInUser = loggedInUser;
        // }
    },
    actions: {
        async loadUserChatRooms(context) {
            const loggedUserId = context.state.loggedInUserId
            const userChats = await chatRoomsService.query(loggedUserId)
            context.commit({ type: 'setUserChats', userChats });
            var usersExceptMeIds = userChats.map(chat => chat.usersIds.filter(id => loggedUserId !== id));
            var usersExceptMe = [];
            await usersExceptMeIds.forEach(async (id) => {
                const user = await userService.getById(id[0])
                usersExceptMe.push(user);
            })
            context.commit({ type: 'setUserChatsWith', usersExceptMe })
        },
        // loadLoggedInUser(context) {
        //     const loggedUserId = context.state.loggedInUserId
        //     const loggedInUser = {}
        //     userService.getById(loggedUserId).then(user => {
        //         loggedInUser = user;
        //         context.commit({ type: 'setLoggedInUser', loggedInUser })
        //     })
        // }, //temp for chats please delete and replace it to the user store!!!
        loadChat(context, { chatRoomId }) {
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
                }))
        },
        addMsg(context, { addedMsg }) {
            chatRoomsService.addMsg(addedMsg, context.state.chatRoom._id).then(newMsg => {
                context.commit({type: "addMsg", addedMsg})
                return newMsg;
            })
        },


        // createChatRoom(context) {
        //     chatRoomsService.add(this.state.loggedInUser, this.state.chatWith._id).then(addedChatRoom => {
        //         context.commit({type: 'addChat', addedChatRoom})
        //     })
        // },
    }
}