import chatRoomsService from '../services/chatRooms.service.js'
import userService from '../services/user.service.js'

export default {
    state: {
        userChats: [],
        loggedInUserId: '',
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
        // msgs(state) {
        //     return state.chatRoom.msgs
        // },
        loggedInUserId(state) {
            return state.loggedInUserId;
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
            console.log(context.state.chatRoom._id);
            
            chatRoomsService.addMsg(addedMsg, context.state.chatRoom._id).then(newMsg => {
                context.commit({type: "addMsg", addedMsg})              
                return newMsg;
            })
        },
        createChatRoom(context, {chatDetails}) {
            // console.log(chatDetails);
            // console.log(context.state.userChats);
            let flag = false;
            context.state.userChats.forEach(chat => {
                if (chat.usersIds.includes(chatDetails.usersIds[0] || chatDetails.usersIds[1])) {
                    console.log('chat already exists');
                    flag = true;
                    return;
                }

            })
            if (flag) return;
            console.log('chat doesnt exist');
            
            chatRoomsService.add(chatDetails.usersIds, chatDetails.addedMsg).then(addedChatRoom => {
                context.commit({type: 'addChat', addedChatRoom})
            })
        },
    }
}