const axios = require('axios')
require('dotenv').config();

async function  getInfo (lat,lng) {
    const apiKey=process.env.INFO;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    try{
        const response= await axios.get(url)
        return response.data
    }   
    catch(e){
        console.log(e)
    }

}
export {getInfo};