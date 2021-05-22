//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
var items = ["Buy food", "Cook food"];
var workList = [];
app.get('/', (req, res) => {
    let day = date.getDate();
   
    res.render('list', { listTitle: day, newListItems: items });
})
app.post('/', (req, res) => {
    var item = req.body.newItem;
    if (req.body.list === "Work list") {
        workList.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
    var item = req.body.newItem;
    
})

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work list", newListItems: workList})
})

app.post("/work", (req, res) => {
    
    
})
app.listen(1000, () => console.log("the server is running on port: 1000"));

