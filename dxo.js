var express = require('express');
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
//var config = require('./config.js');
//var storeInDB = require('./routes/route1.js');
//var models = require('./model/');
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//mongoose.connect("mongodb://localhost:27017/image_db");

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

app.post("/", function(request, response) {
    //console.log(request);
    // if (!request.body.title || !request.body.body) {
    //     response.status(400).send("Entries must have a title and a body.");
    //     return;
    // }
    //response.redirect("/");
    console.log(request.body);
    response.json(request.body);

});

app.get("/ajax/*", function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

app.get("/*", function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})
