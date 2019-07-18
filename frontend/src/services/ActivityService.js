import HttpService from './HttpService'


export default {
    query
    // getById,
};

async function query(req, res) {
    try {
        const activities = await HttpService.ajax('api/activity')
        console.log('activityservice',activities);
        
        return activities
    } catch (err) {
        res.status(401).send({ error: err })
    }
}


