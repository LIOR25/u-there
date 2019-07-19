const activityService = require('./activity.service')

// const getActivities = async (req, res) => {
//     console.log();
//     const activities = await activityService.query()
    
//     res.send(activities)
// }


const getActivities = async (req, res) => {
    console.log('req params in get activities', req.query);

    const activities = await activityService.query(req.query);
    res.send(activities);
};

async function getActivity(req, res) {
    const activity = await activityService.getById(req.params.id)
    res.send(activity)
}


module.exports = {
    getActivity,
    getActivities,
}