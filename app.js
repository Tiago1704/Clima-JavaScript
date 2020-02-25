
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const ciudad2 = require('./BaseDatos/BDD')
console.log(clima);
console.log(lugar);

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let CIUDAD10;
const getInfo = async( direccion ) => {


    try {
        const coords = await lugar.getLugarLatLng( direccion );
        console.log(coords.lat);
        const temp   = await clima.getClima( coords.lat, coords.lng );
        console.log(temp);
        let c1 = new ciudad2(direccion,temp.temp,temp.humidity,temp.pressure)
        return c1
        // return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}
function avc(ciudad) {
  console.log("Ciudad : "+ciudad.ciudad);
  console.log("Humedad : "+ciudad.humedad);
  console.log("Presion : "+ciudad.presion);
  console.log("Temperatura : "+ciudad.temp);
}
getInfo( argv.direccion )
    .then(function(data) {
      avc(data)
    })
    .catch( console.log );
