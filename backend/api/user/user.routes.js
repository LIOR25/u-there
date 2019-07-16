const express = require('express');
// TODO MIDDLEWARE
const { getUser, getUsers, deleteUser } = require('./user.controller')
const router = express.Router();


router.get('/', getUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)


module.exports = router;