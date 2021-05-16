//jshint esversion:6

const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("<strong>it's workin</strong>");
});

app.get('/about', (req, res) => {
    res.send("Hello! it's Javohir and this site belongs to me");
});

app.get('/hobies', (req, res) => {
    res.send('<ul> <li>Football</li><li>Sleeping</li><li>Driving</li></ul>');
});

app.listen(3000, function () {
    console.log('server started port in 3000');
});

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//     res.write('<h1>Hello World!</h1>'); //write a response to the client
//     res.end(); //end the response
// }).listen(8080);