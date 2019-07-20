const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    // getById,
}

async function query(filterBy = {}) {
    const criteria = {};
    // if (filterBy.txt) {
    //     criteria.name = filterBy.txt
    // }
    const collection = await dbService.getCollection('activity')
    try {
        // const activities = await collection.find(criteria).toArray();
        const activities = await collection.find().limit(4).toArray();

        console.log('activities from servback', activities);
    

        return activities
    } catch (err) {
        console.log('ERROR: cannot find activities')
        throw err;
    }
}
