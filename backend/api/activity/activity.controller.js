const activityService = require('./activity.service')

const getActivities = async (req, res) => {
    const activities = await activityService.query()
    res.send(activities)
}

async function getActivity(req, res) {
    const activity = await activityService.getById(req.params.id)
    res.send(activity)
}


module.exports = {
    getActivity,
    getActivities,
}