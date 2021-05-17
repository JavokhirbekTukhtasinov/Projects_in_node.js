//jshint jsversion:6
const express = require('express');
const app = express();
const https = require("https");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", (req, res) => {
    const city = req.body.cityName;
    const apiYey = "cc5e9234170688b2b8ade18db65b09d8";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiYey + "&units=" + unit + "";

    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const icon = weatherData.weather[0].icon
            const iconURL = "https://openweathermap.org/img/wn/" + icon + ".png"
            res.write("<p>The weather in "+ city +" is " + temp + "degree</p>")
            res.write("<h1>The weather in " + city +" is " + temp + "degree</h1>")
            res.write("<img src=" + iconURL + ">")
            res.send()
        })
    })
});


app.listen(9000, () => {
    console.log("it's runned successfully");
    });



// const { urlencoded, json, response } = require('express');
// const express = require('express');
// const app = express();
// const https = require('https');
// const { brotliDecompressSync } = require('zlib');

// app.get('/', (req, res) => {
    
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=cc5e9234170688b2b8ade18db65b09d8";
//     https.get(url, (response) => {
//         console.log(response.statusCode);
//         response.on("data", (data) => {
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             console.log("The humadity is " + weatherData.main.humidity);
//             console.log("Description: " + weatherData.weather[0].description);
//             res.send("The temparature in London is " + temp + " degree");
//         })
   

//         body.parse()
//     })

   
    

// }).listen(5000, () => {
//     console.log("it's working");
// })

