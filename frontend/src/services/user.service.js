import HttpService from './HttpService';

export default {
  query,
  getById,
  add,
  update,
  // getById,
  // update

  login,
  logout,
  signup
  // getUsers
};

// const BASE_URL = 'user/';

//check if to use
// async function query(req, res) {
//   try {
//     const users = await HttpService.ajax('api/user');
//     return users;
//   } catch (err) {
//     res.status(401).send({ error: err });
//   }
// }

async function add(userToAdd) {
  // let res = await httpService.post(`user`, userToAdd)
  // return res.ops[0]
  console.log(usersDB);
  userToAdd._id = makeId();
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
  console.log(userToAdd);
  usersDB.unshift(userToAdd);
  console.log(usersDB);

  return userToAdd;
}

async function update() {}
// from yaron
// query: `${BASE_URL}${_getQueryString(filterBy)}`

async function query(filterBy) {
  const users = await HttpService.ajax('api/user');
  return users;
}

async function getById(userId) {
  const user = await HttpService.ajax(`api/user/${userId}`);
  return user;
}

// async function query(req, res) {
//   try{
// const users =  await HttpService.ajax('api/user')
//   return users
//   }catch (err) {
//     res.status(401).send({ error: err })
//   }
// }

// from yaron

function login(userCred) {
  HttpService.ajax('api/auth/login', 'post', userCred).then(res =>
    console.log(res)
  );
}
function signup(userCred) {
  HttpService.ajax('api/auth/signup', 'post', userCred).then(res =>
    console.log(res)
  );
}
function logout() {
  HttpService.ajax('api/auth/logout', 'post').then(res => console.log(res));
}

// function getUsers() {
//   HttpService.ajax('api/user')
//     .then(res => console.log(res))
// }

// const usersDB = [
//   {
//     _id: 'u1',
//     userName: 'orly@amdadi.com',
//     password: 'cryptedSomething',
//     firstName: 'Orly',
//     lastName: 'Amdadi',
//     isAdmin: true,
//     activities: ['Chess', 'go to the Opera', 'skydiving'],
//     userChatRooms: ['room1', 'room2'],
//     currCity: 'Milano',
//     rank: 5,
//     reviews: [
//       {
//         _id: 'r1',
//         title: 'Greatest Person Alive',
//         addedBy: 'u2',
//         txt: 'I had so much fun omg',
//         createdAt: 1546300800,
//         rating: 5
//       }
//     ],
//     meetCount: 30,
//     replies: 'fast',
//     languages: ['en'],
//     img_url:
//       'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/18813671_10210640201935643_3103328272968250916_n.jpg?_nc_cat=109&_nc_oc=AQm7stF8oWQELbvO4pvKEKae7Jko1Lp0Yzrdi1H7uToDnxFuZ2kaUd8w6RdJ208pvd4&_nc_ht=scontent.fsdv3-1.fna&oh=ddc4981265edca7a527369201519c26d&oe=5DAF9B4D'
//   },
//   {
//     _id: 'u2',
//     userName: 'or@amd.com',
//     password: 'cryptedSomething',
//     firstName: 'Or',
//     lastName: 'Amd',
//     isAdmin: false,
//     activities: ['Chess', 'eat at the beach', 'skydiving'],
//     userChatRooms: ['room1'],
//     currCity: 'Tel Aviv',
//     rank: 3,
//     reviews: [
//       {
//         _id: 'r2',
//         title: 'Greatest Person',
//         addedBy: 'u3',
//         txt: 'I have so much joy',
//         createdAt: 1546300122,
//         rating: 3
//       }
//     ],
//     meetCount: 15,
//     replies: 'slow',
//     languages: ['en', 'he'],
//     img_url:
//       'https://d1jiktx90t87hr.cloudfront.net/223/wp-content/uploads/2016/09/michelle-prince-profile-img.png'
//   },
//   {
//     _id: 'u3',
//     userName: 'ar@amder.com',
//     password: 'cryptedSomething',
//     firstName: 'Ar',
//     lastName: 'Amder',
//     isAdmin: false,
//     activities: ['Run', 'Eat', 'Skydiving'],
//     userChatRooms: ['room2'],
//     currCity: 'Barcelona',
//     rank: 2.5,
//     reviews: [
//       {
//         _id: 'r3',
//         title: 'Greatest',
//         addedBy: 'u6',
//         txt: 'I have joy',
//         createdAt: 1546300121,
//         rating: 2.5
//       }
//     ],
//     meetCount: 2,
//     replies: 'moderate',
//     languages: ['en', 'es'],
//     img_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTVO3MbX4GMDjLkHEMmSs1BRctlclV9xW6wh-qTrLnlClPQsA'
//   },
//   {
//     _id: 'u4',
//     userName: 'air@amderi.com',
//     password: 'cryptedSomething',
//     firstName: 'Air',
//     lastName: 'Amderi',
//     isAdmin: false,
//     activities: ['Run', 'Sleep', 'Skydiving'],
//     userChatRooms: [],
//     currCity: 'Paris',
//     rank: 0,
//     reviews: [],
//     meetCount: 0,
//     replies: '',
//     languages: ['en', 'es'],
//     img_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv_lrM5ORQw9ihviXbvyYsD8JJ290IU8qfLDxprBpNkh9yUbu'
//   },
//   {
//     _id: 'u5',
//     userName: 'aira@amderia.com',
//     password: 'cryptedSomething',
//     firstName: 'Aira',
//     lastName: 'Amderia',
//     isAdmin: false,
//     activities: ['Run', 'Bing', 'Fly', 'Rest'],
//     userChatRooms: [],
//     currCity: 'Rome',
//     rank: 0,
//     reviews: [],
//     meetCount: 0,
//     replies: '',
//     languages: ['en', 'it'],
//     img_url:
//       'https://powerviewltd.com/wp-content/uploads/2018/03/profile-img-1.jpg'
//   },
//   {
//     _id: 'u6',
//     userName: 'ash@air.com',
//     password: 'cryptedSomething',
//     firstName: 'Ash',
//     lastName: 'Air',
//     isAdmin: false,
//     activities: ['Run', 'Drink coffee with a friend', 'Walk', 'Dive'],
//     userChatRooms: [],
//     currCity: 'Rome',
//     rank: 0,
//     reviews: [],
//     meetCount: 0,
//     replies: '',
//     languages: ['en', 'it'],
//     img_url:
//       'http://www.studiosisa.nl/wp-content/uploads/2014/11/profile-img.jpg'
//   },
//   {
//     _id: 'u7',
//     userName: 'rachel@airy.com',
//     password: 'cryptedSomething',
//     firstName: 'Rachel',
//     lastName: 'Airy',
//     isAdmin: false,
//     activities: ['Eat', 'Drive', 'Walk', 'Dive'],
//     userChatRooms: [],
//     currCity: 'Rome',
//     rank: 0,
//     reviews: [],
//     meetCount: 0,
//     replies: '',
//     languages: ['en', 'it'],
//     img_url:
//       'https://wuzzuf.s3.eu-west-1.amazonaws.com/files/upload_pic/thumb_6262fdbca8f8b79392697ca240fe3ac9.jpeg'
//   }
// ];

// async function query(filterBy = {}) {
//   if (filterBy['cityName']) {
//     return Promise.resolve(
//       usersDB.filter(user => {
//         return user.currCity === filterBy.cityName;
//       })
//     );
//   } else return Promise.resolve(usersDB);

//   return await httpService.get('city');
// }

// async function update() {}

//func code for backup only
// async function query(filterBy = {}) {
//   if (filterBy['cityName']) {
//     return Promise.resolve(
//       usersDB.filter(user => {
//         return user.currCity === filterBy.cityName;
//       })
//     );
//   } else return Promise.resolve(usersDB);
//   //   return await httpService.get('city');
// }
//func code for backup only

// async function getById(toyId) {
//   return await httpService.get(`toy/${toyId}`);
// }

//check if to remove
// async function getById(userId) {
//   return await usersDB.find(user => user._id === userId);
// }

// async function getById(userId) {
//   return await usersDB.find(user => user._id === userId);
// }
