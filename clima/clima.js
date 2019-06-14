const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2aa7ea82626caa28ea95f666152a0336&units=metric`
    );

    return resp.data.main.temp;
};

module.exports = {
    getClima
};