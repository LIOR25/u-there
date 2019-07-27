const MongoClient = require('mongodb').MongoClient;

const config = require('../config')

const dbName = 'uthere_db';

var dbConn = null;

async function connect() {
    if (dbConn) return Promise.resolve(dbConn);
    try {
        const client = await MongoClient.connect(config.dbURL, { useNewUrlParser: true });
        const db = client.db(dbName);
        dbConn = db;
        client.on('close', () => {
            console.log('MongoDB disconnected!');
            client.close();
            dbConn = null;
            
        })
        return dbConn;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }

}

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

module.exports = {
    connect,
    getCollection
}