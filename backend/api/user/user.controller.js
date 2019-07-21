const userService = require('./user.service');

const getUsers = async (req, res) => {
  // console.log('req params in get users', req.query);

  const users = await userService.query(req.query);
  res.send(users);
};

async function getUser(req, res) {
  const userId = req.params.userId;
  const user = await userService.getById(userId);
  res.send(user);
}

async function updateUser(req, res) {
  const user = await userService.update(req.body);
  res.send(user);
}

async function deleteUser(req, res) {
  await userService.remove(req.params.id);
  res.send({});
}

// async function getActivities(req,res){
//   console.log('hhhhhhhh plz', req);
//   const activities = await userService.getActivitiesByCity(req);
//   console.log('activitiesactivities', activities)
//   res.send(activities);
// }

async function addReview(req, res) {
  console.log('addReview func user controller req.body ', req.body);

  const addedReview = await userService.addReview(req.body);
  res.send(addedReview);
}

module.exports = {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  addReview
  // getActivities
};
