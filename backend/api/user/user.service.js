const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    // getByEmail,
    // remove,
    // update,
    // add
}


async function query(filterBy = {}) {

    const criteria = {};
    if (filterBy.txt) {
        criteria.name = filterBy.txt
    }
    // if (filterBy.minBalance) {
    //     criteria.balance = { $gte: filterBy.minBalance }
    // }


    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find(criteria).toArray();
        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function getById(userId) {    
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({"_id":ObjectId(userId) })        
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}

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