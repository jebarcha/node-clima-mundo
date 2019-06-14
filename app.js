const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then((resp) => console.log(resp));
// clima.getClima(40.75, -74).then((resp) => console.log(resp)).catch((err) => console.log(err));

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        console.log(`No se pudo determinar el clima de ${direccion}`, e);
    }
};

getInfo(argv.direccion).then((resp) => console.log(resp));