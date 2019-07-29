const meetingService = require('./meeting.service')

async function getMeetings(req, res) {
    const user = req.session.user;
    const meetings = await meetingService.query(user._id)
    if (meetings) {
        return res.json(meetings);
    } else {
        return res.status(500).send('Could Not Find Meetings')
    }
}

async function getMeeting(req, res) {
    const meeting = await meetingService.getById(req.params.id)
    res.send(meeting)
}

async function addMeeting(req, res) {
    const meeting = req.body;
    const meetingWithId = await meetingService.add(meeting)
    if (meetingWithId) return res.json(meetingWithId)
    else return res.status(500).send('Could Not Add Meeting')
}

async function updateMeeting(req, res) {
    const meeting = req.body;
    const updatedMeeting = await meetingService.update(meeting)
    if (updatedMeeting) return res.json(updatedMeeting)
    else res.status(500).send('Could not update meeting')
}

module.exports = {
    getMeetings,
    getMeeting,
    addMeeting,
    updateMeeting
}

/*
const chatroomService = require('./chatroom.service')

async function getChatrooms (req, res) {
    const user = req.session.user;
    // console.log('user from session', user);
    const chatrooms = await chatroomService.query(user._id)
    if (chatrooms) {
        return res.json(chatrooms);
    } else {
        return res.status(500).send('Could Not Find Chatrooms');
    }
}

async function getChatroom(req, res) {
    const chatRoom = await chatroomService.getById(req.params.id)
    res.send(chatRoom)
}

async function addChatroom(req, res) {
    const chatRoom = req.body;
    const chatRoomWithId = await chatroomService.add(chatRoom)
    if (chatRoomWithId) return res.json(chatRoomWithId);
    else res.status(500).send('Could Not Add Chat');
}

async function addMsg(req, res) {
    const newMsg = req.body;
    // {
    //     newMsg,
    //     _id
    // }
    const updatedChat = await chatroomService.addMsg(newMsg);
    if (updatedChat) return res.json(updatedChat);
    else res.status(500).send('Could not add msg')
}

// async function deleteUser(req, res) {
//     await userService.remove(req.params.id)
//     res.send({})
// }

module.exports = {
    getChatroom,
    getChatrooms,
    addChatroom,
    addMsg
}
*/