const chatroomService = require('./chatroom.service')

const getChatrooms = async (req, res) => {
    const user = req.session.user;
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



