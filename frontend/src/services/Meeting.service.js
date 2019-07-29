import HttpService from "./HttpService";

export default {
    query,
    getById,
    add,
    update
};

var meetings;

async function query() {

    const meetings = await HttpService.ajax('api/meeting', 'get')
    // chatRooms = allChatRooms.filter(chatRoom => chatRoom.usersIds.includes(userId))
    return meetings;

}

async function getById(meetingId) {
    const meeting = await HttpService.ajax(`api/meeting/${meetingId}`, 'get');
    return meeting;
}


async function add(usersIds, time) {
    var newMeeting = {
        usersIds: usersIds,
        dateAt: time
    }
    console.log(newMeeting);

    // chatRooms.push(newChat)
    const updatedChatroom = await HttpService.ajax('api/meeting', 'post', newMeeting);
    return updatedChatroom;
}
