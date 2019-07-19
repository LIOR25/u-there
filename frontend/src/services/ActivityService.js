import HttpService from './HttpService'


export default {
    query
    // getById,
};

// async function query(req, res) {
//     try {
//         const activities = await HttpService.ajax('api/activity')
//         console.log('activityservice',activities);
        
//         return activities
//     } catch (err) {
//         res.status(401).send({ error: err })
//     }
// }


async function query(filterBy = {}) {
    console.log(filterBy);

    const activities = await HttpService.ajax('api/activity/', 'get', null, filterBy);
    return activities;
}