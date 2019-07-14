import chatRoomsService from '../services/chatRooms.service.js'

export default {
    state: {
        userChats: [],
        loggedInUser: 'u1'
    },
    getters: {
        userChats(state) {
            return state.userChats;
        },
        filterBy(state) {
            return state.filterBy
        },
    },
    mutations: {
        setUserChats(state, { userChats }) {
            state.userChats = userChats;
        }
    },
    actions: {
        loadUserChatRooms(context) {
            chatRoomsService.query(this.state.loggedInUser).then(userChats =>
                context.commit({ type: 'setUserChats', userChats })
            );

        },
        // loadChat(context) {
        //     chatRoomsService.getByIds()
        // },
    }
}