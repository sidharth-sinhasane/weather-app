const axios = require('axios')
require('dotenv').config();

async function  getInfo (cityName) {
    const apiKey=process.env.INFO;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    try{
        const response= await axios.get(url)
        console.log("request succesfull")
        return response
    }   
    catch(e){
        console.log(e)
    }

}
getInfo('Germany')

module.exports= {getInfo};