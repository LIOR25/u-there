import MeetingService from '../services/chatRooms.service.js'
import userService from '../services/user.service.js'
import socket from '../services/Socket.service.js'

export default {
    state: {
        userMeetings: [],
        loggedInUserId: '',
        meetingsWith: [],
        meeting: {},
        meetingWith: {},
    },
    getters: {
        userMeetings(state) {
            return state.userMeetings
        },
        meetingsWith(state) {
            return state.meetingWith
        },
        meetingsWith(state) {
            return state.meetingsWith
        },
        // loggedInUserId(state) {
        //     return state.loggedInUserId;
        // },
        meeting(state) {
            return state.meeting;
        }
    },
    mutations: {
        setUserMeetings(state, { userMeetings }) {
            state.userMeetings = userMeetings;
        },
        setUserMeetingsWith(state, { usersExceptMe }) {
            state.meetingsWith = usersExceptMe;
        },
        setLoggedInUser(state, { loggedUserId }) {
            state.loggedInUserId = loggedUserId;
        },
    },
    actions: {
        async getLoggedUserId(context) {
            const loggedInUser = await userService.getLoggedUser();
            const loggedUserId = loggedInUser._id;
            context.commit({ type: 'setLoggedInUser', loggedUserId });
        },
        async loadUserMeetings(context) {
            const loggedInUser = await userService.getLoggedUser()            
            const loggedUserId = loggedInUser._id
            context.commit({type: 'setLoggedInUser', loggedUserId})
            const userMeetings = await MeetingService.query()
            context.commit({ type: 'setUserMeetings', userMeetings });
            var usersExceptMeIds = userMeetings.map(meeting => meeting.usersIds.filter(id => loggedUserId !== id));           
            var usersExceptMe = [];
            await usersExceptMeIds.forEach(async (id) => {
                const user = await userService.getById(id[0])
                usersExceptMe.push(user);
            })            
            context.commit({ type: 'setUserMeetingsWith', usersExceptMe })
            return usersExceptMe;            
        },
    }
}