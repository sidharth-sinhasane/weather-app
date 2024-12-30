const axios = require('axios');
require('dotenv').config();

const getCoordinates = async (cityName) => {
    const apiKey = process.env.CO_ORDINATES; // Replace with your API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityName)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        const { lat, lng } = response.data.results[0].geometry;
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        return {lat,lng};
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
    }
};

getCoordinates('Mumbai')
module.exports = { getCoordinates };