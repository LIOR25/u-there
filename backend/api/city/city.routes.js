const express = require('express');
// TODO MIDDLEWARE
const {getCity, getCities} = require('./city.controller')
const router = express.Router();


router.get('/', getCities)
router.get('/:id', getCity)

module.exports = router;