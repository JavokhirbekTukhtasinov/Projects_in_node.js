//jshint esversion: 6

const express = require('express');
const bodyPaser = require('body-parser');
const request = require('request');
const https = require("https");
const { response } = require('express');
const app = express();
app.use(bodyPaser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});
app.post('/', (req, res) => {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fieldes: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    }
    var jsonData = JSON.stringify(data);
    const url = "https://us1.mailchimp.com/3/0/lists/2ddf017d58";
    const options = {
        method: "POST",
        auth: "Javohir1:a8dca9b0103c14f7c45e69f3ba5c6e7f-us1"
    }
    
    const request = https.request(url, options, (response) => {
        if (response === 200) {
            res.send('Successfully subsribed!');
        } else {
            res.send("There was an error with signing up, please try again!");
        }
        response.on('data', (data) => {
            const jdata = JSON.parse(data);
            console.log(jdata);
        })
    })
    request.write(jsonData);
    request.end();
})

app.listen(3000, () => {
    console.log("the server is running on port: 3000");
});
//API key 
//a8dca9b0103c14f7c45e69f3ba5c6e7f-us1

//List id
//2ddf017d58