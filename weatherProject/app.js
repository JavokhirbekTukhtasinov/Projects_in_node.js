const { urlencoded, json, response } = require('express');
const express = require('express');
const app = express();
const https = require('https');
const { brotliDecompressSync } = require('zlib');

app.get('/', (req, res) => {
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=cc5e9234170688b2b8ade18db65b09d8";
    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log("The humadity is " + weatherData.main.humidity);
            console.log("Description: " + weatherData.weather[0].description);
            res.send("The temparature in London is " + temp + " degree");
        })
   

        body.parse()
    })

   
    

}).listen(5000, () => {
    console.log("it's working");
})

