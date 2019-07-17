const express = require('express');
// TODO MIDDLEWARE
const { getChatroom, getChatrooms, addChatroom, addMsg} = require('./chatroom.controller')
const router = express.Router();


router.get('/', getChatrooms)
router.get('/:id', getChatroom)
router.post('/', addChatroom)
router.put('/:id', addMsg)
// router.delete('/:id', deleteUser)

module.exports = router;

// router.get('/', async (req, res) => {
//     const userId = req.query;
//     const chatrooms = await chatroomService.query(userId);
//     if (chatrooms) {
//         return res.json(chatrooms);
//     } else {
//         return res.status(500).send('Could Not Find Toys');
//     }
// })
