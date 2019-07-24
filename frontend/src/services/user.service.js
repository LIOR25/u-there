import HttpService from './HttpService';

export default {
  query,
  getById,
  update,
  queryActivities,

  login,
  logout,
  signup,
  getLoggedUser,
  setLoggedUserSessionStorage,

  addReview
};

var loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

async function update(user) {
  console.log('user log in update userservice front: ', user);

  const updatedUser = await HttpService.ajax(
    `api/user/${user._id}`,
    'put',
    user
  );
  return updatedUser;
}

async function query(filterBy = {}) {
  console.log(filterBy);

  const users = await HttpService.ajax('api/user', 'get', null, filterBy);
  return users;
}

async function queryActivities(city) {
  const users = await HttpService.ajax(
    'api/user/activities',
    'get',
    null,
    city
  );
  return users;
}

async function getById(userId) {
  const user = await HttpService.ajax(`api/user/${userId}`, 'get');
  return user;
}

async function login(userCred) {
  return await HttpService.ajax('api/auth/login', 'post', userCred);
}

async function signup(userCred) {
  console.log(userCred);

  return await HttpService.ajax('api/auth/signup', 'post', userCred);
}
function logout() {
  HttpService.ajax('api/auth/logout', 'post').then(res => console.log(res));
}

async function getLoggedUser() {
  if (loggedUser) return loggedUser;
  else return await HttpService.ajax('/api/auth/getLoggedUser', 'get');
}

function setLoggedUserSessionStorage(loggedUser) {
  console.log(loggedUser);
  if (loggedUser)
    sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
  else {
    sessionStorage.removeItem('loggedUser');
  }
}

async function addReview(theReview) {
  console.log('thereview obj in addreview userservice front: ', theReview);

  const addedReview = await HttpService.ajax(
    `api/user/addreview/${theReview.userToReviewId}`,
    'put',
    theReview
  );
  return addedReview;
}
