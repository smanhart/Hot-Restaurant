var express = require("express");
var path = require("path"); 

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
    Name: "person",
    Phone: 123,
    Email: 123,
    ID: 123
    }
  ];

 app.get("/api/tables", function(req, res) {
    return res.json(tables);
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });