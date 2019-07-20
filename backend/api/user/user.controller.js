const userService = require('./user.service');

const getUsers = async (req, res) => {
  // console.log('req params in get users', req.query);

  const users = await userService.query(req.query);
  res.send(users);
};

async function getUser(req, res) {
  const userId = req.params.userId;
  console.log('getUser userId:', userId);
  const user = await userService.getById(userId);
  console.log('user in get user user controller', user);
  res.send(user);
}

async function updateUser(req, res) {
  console.log('updateduser func user controller req.body ', req.body);

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

module.exports = {
  getUser,
  getUsers,
  updateUser,
  deleteUser
  // getActivities
};
