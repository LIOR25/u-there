
const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;


module.exports = {
    query,
    getById,
    add,
    update
    //remove
};

async function query(userId) {
    // filterBy = {}
    var criteria = {};
    if (userId) {
        // var temp = [userId]
        criteria.usersIds = { $in: [userId] }
    }
    // console.log(criteria);
    
    const collection = await dbService.getCollection('meeting');
    try {
        // db.getCollection('chatroom').find({usersIds: {$in:['5d2dc044ad1118a7f8aed366']}})
        // console.log('criteria: ',criteria);

        var meetings = await collection.find(criteria).toArray();
        // var chatrooms = await collection.find().toArray();
        // var chatrooms = await collection.find({usersIds: {$in:['5d2dc044ad1118a7f8aed366']}}).toArray();
        // console.log('###########################')
        // console.log(chatrooms)
        // chatrooms.sort(utilService.createSortFuncTxt(filterBy.sortBy, filterBy.sortWay));
        // const userChatrooms = await chatrooms.filter(chatRoom => chatRoom.usersIds.includes(userId))
        return meetings;
    } catch (err) {
        console.log('ERROR: cannot find meetings')
        throw err;
    }
}

async function getById(meetingId) {
    const collection = await dbService.getCollection('meeting');
    try {
        const meeting = await collection.findOne({ "_id": ObjectId(meetingId) })
        return meeting;
    } catch (err) {
        console.log(`ERROR: cannot find chat ${meetingId}`)
        throw err;
    }
}

async function add(meeting) {
    const collection = await dbService.getCollection('meeting');
    try {
        await collection.insertOne(meeting);
        return meeting;
    } catch (err) {
        console.log(`ERROR: cannot insert chatroom`)
        throw err;
    }
}

async function update(meeting) {
    const collection = await dbService.getCollection('meeting');
    try {
        return await collection.updateOne({"_id":ObjectId(meeting.status) }, /*replace */ { $push: { "msgs": msg } })
    } catch(err) {
        throw err;
    }
}