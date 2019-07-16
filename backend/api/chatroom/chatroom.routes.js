const express = require('express');
// TODO MIDDLEWARE
const { getChatroom, getChatrooms, } = require('./chatroom.controller')
const router = express.Router();


router.get('/', getChatrooms)
router.get('/:id', getChatroom)
// router.delete('/:id', deleteUser)


module.exports = router;