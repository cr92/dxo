var express = require('express');
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
//var config = require('./config.js');
var route1 = require('./routes/route1.js');
//var models = require('./model/');
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//mongoose.connect("mongodb://localhost:27017/image_db");

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

app.post("/*", function(request, response) {
    console.log(request.body);
    var data_to_store = request.body;
    route1.insertInDb(data_to_store, function(error, result) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log('--------------added');
            // response.sendFile(__dirname + '/views/index.html');
            // response.redirect("/");
        }
    });
});

app.get("/album/*", function(request, response) {
    console.log('ajax' + request.originalUrl);
    var album_id = request.originalUrl.split('/')[2];
    console.log('+++++' + album_id);

    route1.retrieveAlbum(album_id, function(error, result) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log('-------found ' + JSON.stringify(result));
            //response.send('dsfasfasdsadasdasdsa');
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(result));
        }
    });
    //response.sendFile(__dirname + '/views/index.html');
});

app.get("/*", function(request, response) {
    console.log('page' + request.originalUrl);
    var page_id = request.originalUrl.split('/')[1];
    console.log('xxxxxx' + page_id);
    response.sendFile(__dirname + '/views/index.html');
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at http://%s:%s", host, port)
})
