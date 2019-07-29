const bcrypt = require('bcrypt');
const userService = require('../user/user.service');
const logger = require('../../services/logger.service');

const saltRounds = 10;

async function login(email, password) {
  if (!email || !password)
    return Promise.reject('email and password are required!');

  const user = await userService.getByEmail(email);

  if (!user) return Promise.reject('Invalid email or password');

  const match = await bcrypt.compare(password, user.password);

  if (!match) return Promise.reject('Invalid email or password');
  delete user.password;

  return user;
}

// async function signup(email, password, username) {
//     logger.debug(`auth.service - signup with email: ${email}, username: ${username}`)
//     if (!email || !password || !username) return Promise.reject('email, username and password are required!')

//     const hash = await bcrypt.hash(password, saltRounds)
//     const user = await userService.add({ email, password: hash, username })
//     delete user.password;
//     return user;
// }
async function signup(userToAdd) {
  // logger.debug(`auth.service - signup with email: ${email}, username: ${username}`)

  if (
    !userToAdd.email ||
    !userToAdd.password ||
    !userToAdd.firstName ||
    !userToAdd.lastName ||
    !userToAdd.currCity ||
    !userToAdd.language
  ) {
    return Promise.reject(
      'email, password, first name, last name, current city and language are required!'
    );
  }

  console.log('signup auth service fhaze2', userToAdd);

  userToAdd.isAdmin = false;
  userToAdd.activities = [userToAdd.activity];
  delete userToAdd.activity;
  userToAdd.userChatRooms = [];
  userToAdd.rank = 0;
  userToAdd.reviews = [];
  userToAdd.meetCount = 0;
  userToAdd.replies = '';
  userToAdd.languages = [userToAdd.language];
  delete userToAdd.language;
  userToAdd.img_url = 'https://www.researchinn.com/uploads/default_user.png';

  const hash = await bcrypt.hash(userToAdd.password, saltRounds);
  userToAdd.password = hash;
  const user = await userService.add(userToAdd);

  delete user.password;
  return user;
}

module.exports = {
  signup,
  login
};
