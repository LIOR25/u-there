const authService = require('./auth.service');
const logger = require('../../services/logger.service');

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await authService.login(email, password);
    req.session.user = user;
    // console.log('got user in session', user);
    
    res.json(user);
  } catch (err) {
    res.status(401).send({ error: err });
  }
}

async function getLoggedUser(req, res) {
  // console.log('auth', req.session.user)
  try {
    const user = req.session.user;
    if (user) return res.send(user);
    // console.log('no user connected');
    
    return res.send();
  } catch(err) {
    res.status(401).send({ error: err})
  }
}

// async function signup(req, res) {
//   try {
//     const { email, password, username } = req.body;
//     logger.debug(email + ', ' + username);
//     const user = await authService.signup(email, password, username);
//     logger.debug(`auth.route - new user created: ` + JSON.stringify(user));
//     req.session.user = user;
//     res.status(200).send(user);
//   } catch (err) {
//     logger.error('[SIGNUP] ' + err);
//     res.status(500).send({ error: 'could not signup, please try later' });
//   }
// }
async function signup(req, res) {
  try {
    const userToSignup = req.body;

    console.log('in signup in auth ctrl', userToSignup);
    //   logger.debug(email + ', ' + username);
    const user = await authService.signup(userToSignup);
    //   logger.debug(`auth.route - new user created: ` + JSON.stringify(user));
    req.session.user = user;
    // console.log(req.session);

    res.status(200).send(user);
  } catch (err) {
    //   logger.error('[SIGNUP] ' + err);
    res.status(500).send({ error: 'could not signup, please try later' });
  }
}

async function logout(req, res) {
  try {
    req.session.destroy();
    res.send({ message: 'logged out successfully' });
  } catch (err) {
    res.status(500).send({ error: err });
  }
}

module.exports = {
  login,
  signup,
  logout,
  getLoggedUser
};
