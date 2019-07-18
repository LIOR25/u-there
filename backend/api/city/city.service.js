const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    
}


async function query(filterBy = {}) {

    const criteria = {};
    if (filterBy.txt) {
        criteria.name = filterBy.txt
    }
    const collection = await dbService.getCollection('city')
    try {
        const cities = await collection.find(criteria).toArray();
        return cities
    } catch (err) {
        console.log('ERROR: cannot find cities')
        throw err;
    }
}


async function getById(cityId) {
    const collection = await dbService.getCollection('city')
    try {
        const city = await collection.findOne({ "_id": ObjectId(cityId) })
        return city
    } catch (err) {
        console.log(`ERROR: while finding city ${cityId}`)
        throw err;
    }
}