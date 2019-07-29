const express = require('express');
// TODO MIDDLEWARE
const { getMeeting, getMeetings, addMeeting, updateMeeting} = require('./meeting.controller')
const router = express.Router();


router.get('/', getMeetings)
router.get('/:id', getMeeting)
router.post('/', addMeeting)
router.put('/', updateMeeting)
// router.delete('/:id', deleteMeeting)

module.exports = router;