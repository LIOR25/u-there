const chatroomService = require('./chatroom.service')


const getChatrooms = async (req, res) => {
    const userChats = await chatroomService.query(loggedInUser)
    res.send(userChats)
}

async function getChatroom(req, res) {
    const chatRoom = await chatroomService.getById(req.params.id)
    res.send(chatRoom)
}


// async function deleteUser(req, res) {
//     await userService.remove(req.params.id)
//     res.send({})
// }

module.exports = {
    getChatroom,
    getChatrooms,
    // deleteUser
}



