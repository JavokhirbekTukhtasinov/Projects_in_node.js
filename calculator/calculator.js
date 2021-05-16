// //jshint esversion:6

// const express = require('express');
// // const bodyParser = require("body-parser");

// const app = express();
// app.use(express.urlencoded());
// // app.use(bodyParser.urlencoded({extended: true }));
// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/", function (req, res) {
//     var num1 = req.num1;
//     var num2 = req.num2;
    
//     console.log(num1);
// })

// app.listen(4000, () => {
//     console.log('the sit started in: 3000 port');
// });


const { urlencoded } = require('express');
const express = require('express');

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/calbmi", (req, res) => {
    res.sendfile(__dirname + "/calculator_bmi.html");
});

app.post("/calbmi", (req, res) => {
    var weight = req.body.weight;
    var height = req.body.height;

    var result = height + weight;
    res.send(result);
});

app.listen(2000, () => {
    console.log('its working');
})


// app.use(urlencoded());

// app.get('/', (req, res) => {
//     res.sendFile(__filename + "/calculator_bmi.html");
// });

// app.post('/', (req, res) => {
//     var weight = req.body.weight;
//     var height = req.body.height;
//     var result;
//     if (weight / (height * 2) == 23) {
//         result = "you are normal";
//     } else {
//         result = "you are not normal";
//     }

//     res.send(result);
// })

app.listen(3000, () => {
    console.log('success');
})