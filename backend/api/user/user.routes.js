const express = require('express');
// TODO MIDDLEWARE
const {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  addReview
} = require('./user.controller');
const router = express.Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.put('/addreview/:userId', addReview);
router.delete('/:id', deleteUser);

module.exports = router;
