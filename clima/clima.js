
const axios = require('axios')

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=244ea09ca0376aa8b20c3c5168a92921&units=metric`)


    return resp.data.main

}

module.exports = {
    getClima
}
