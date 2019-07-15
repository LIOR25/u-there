const cityService = require('./city.service')

const getCities = async (req, res) => {
    const cities = await cityService.query()
    res.send(cities)
}

async function getCity(req, res) {
    const city = await cityService.getById(req.params.id)
    res.send(city)
}


module.exports = {
    getCity,
    getCities,
}