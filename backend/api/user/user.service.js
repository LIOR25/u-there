const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  query,
  getById,
  getByEmail,
  // getActivitiesByCity,
  // remove,
  update,
  add,
  addReview
};

async function query(filterBy = {}) {
  const criteria = {};
  if (filterBy.txt) {
    criteria.name = filterBy.txt;
  }
  // if (filterBy.minBalance) {
  //     criteria.balance = { $gte: filterBy.minBalance }
  // }

  if (filterBy.cityName) {
    criteria.currCity = filterBy.cityName;
  }

  if (filterBy.activityName) {
    criteria.activities = { $in: [filterBy.activityName] };
  }

  const collection = await dbService.getCollection('user');
  try {
    // const users = await collection.find(criteria).toArray();
    const users = await collection.find().limit(4).toArray();
    return users;
  } catch (err) {
    console.log('ERROR: cannot find users');
    throw err;
  }
}

async function getById(userId) {
  const collection = await dbService.getCollection('user');
  try {
    const user = await collection.findOne({ _id: ObjectId(userId) });
    return user;
  } catch (err) {
    console.log(`ERROR: while finding user ${userId}`);
    throw err;
  }
}

// async function getActivitiesByCity(city){
//   console.log('city from 53 ',city)
//   const collection = await dbService.getCollection('user');
//   try {
//     //db.getCollection('user').find({currCity:"Ramat Gan"})
//     const users = await collection.find({ "currCity": city }).toArray();
//     console.log(users)
//     return users;
//   } catch (err) {
//     console.log(`ERROR: while finding citycitycitycity ${city}`);
//     throw err;
//   }
// }

// async function getById(toyId) {
//     const collection = await dbService.getCollection('toy');
//     try {
//         const toy = await collection.findOne({"_id":ObjectId(toyId)})
//         return toy;
//     } catch (err) {
//         console.log(`ERROR: cannot find toy ${toyId}`)
//         throw err;
//     }
// }

async function getByEmail(email) {
  console.log('email', email);

  const collection = await dbService.getCollection('user');
  try {
    const user = await collection.findOne({ email });
    return user;
  } catch (err) {
    console.log(`ERROR: while finding user ${email}`);
    throw err;
  }
}

async function add(user) {
  console.log('before mongo', user);

  const collection = await dbService.getCollection('user');
  try {
    await collection.insertOne(user);
    return user;
  } catch (err) {
    console.log(`ERROR: cannot insert user`);
    throw err;
  }
}

async function update(user) {
  console.log('before mongo', user);

  const collection = await dbService.getCollection('user');
  try {
    await collection.updateOne(
      { _id: ObjectId(user._id) },
      {
        $set: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          currCity: user.currCity,
          img_url: user.newImg
        }
      }
    );
    return user;
  } catch (err) {
    console.log(`ERROR: cannot update user`);
    throw err;
  }
}

async function addReview(theReview) {
  console.log('before mongo addreview the review obj', theReview);

  const collection = await dbService.getCollection('user');
  try {
    await collection.updateOne(
      { _id: ObjectId(theReview.userToReviewId) },
      {
        $push: {
          reviews: theReview.review
        }
      }
    );

    return theReview.review;
  } catch (err) {
    console.log(`ERROR: cannot add review to user`);
    throw err;
  }
}
