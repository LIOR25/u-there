const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;


module.exports = {
    query,
    getById,
    add,
    addMsg
    // update
};

async function query(userId) {
    var criteria = {};
    if (userId) {
        criteria.usersIds = { $in: [userId] }
    }
    
    const collection = await dbService.getCollection('chatroom');
    try {
        var chatrooms = await collection.find(criteria).toArray();
        return chatrooms;
    } catch (err) {
        console.log('ERROR: cannot find chatrooms')
        throw err;
    }
}

async function getById(chatroomId) {
    const collection = await dbService.getCollection('chatroom');
    try {
        const chatroom = await collection.findOne({ "_id": ObjectId(chatroomId) })
        return chatroom;
    } catch (err) {
        console.log(`ERROR: cannot find chat ${chatroomId}`)
        throw err;
    }
}

async function add(chatroom) {
    const collection = await dbService.getCollection('chatroom');
    try {
        await collection.insertOne(chatroom);
        return chatroom;
    } catch (err) {
        console.log(`ERROR: cannot insert chatroom`)
        throw err;
    }
}

async function addMsg(newMsg) {
    const msg = newMsg.msg
    const collection = await dbService.getCollection('chatroom');
    
    try { 
        return await collection.updateOne({"_id":ObjectId(newMsg.chatroomId) }, { $push: { "msgs": msg } })
    } catch (err) {
        throw err;
    }
}

// scores: { $each: [ 90, 92, 85 ]
/*
push new msg

db.students.update(
   { _id: 5 },
   {
     $push: {
       quizzes: {
          $each: [ { wk: 5, score: 8 }, { wk: 6, score: 7 }, { wk: 7, score: 6 } ],
          $sort: { score: -1 },
          $slice: 3
       }
     }
   }
)

{
  "_id" : 5,
  "quizzes" : [
     { "wk" : 1, "score" : 10 },
     { "wk" : 2, "score" : 8 },
     { "wk" : 5, "score" : 8 }
  ]
}
*/