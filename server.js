var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

var waitlist = [
    {
        Name: "person2",
        Phone: 123,
        Email: 123,
        ID: 123
    }
];

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});


// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {

    var newTable = req.body;
  
    tables.push(newTable);
  
    res.json(newTable);
  });


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});