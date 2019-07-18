const express = require('express');
// TODO MIDDLEWARE
const { getActivity, getActivities } = require('./activity.controller')
const router = express.Router();


router.get('/', getActivities)
router.get('/:id', getActivity)

module.exports = router;