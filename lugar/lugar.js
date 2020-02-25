const axios = require('axios')


const getLugarLatLng = async(dir) => {

    const instance = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: {"x-rapidapi-key": "0f7a21ba10mshcb7e5125b97bdf3p1c6829jsn4bad3d0be61e"}
    })
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }

}

    module.exports = {
        getLugarLatLng
    }
