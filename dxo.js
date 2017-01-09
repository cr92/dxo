var express = require('express');
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));



// app.get('/hello',function(request,response)
// {
//     var xxx=require('./routes/handle.js');
//     response.send(xxx.handle());

// });

// app.get('/xcd',function(request,response)
// {
//     var xxx=require('./routes/handle.js');
//     response.send(xxx.handle_jq());
//     //response.sendFile(__dirname + '/views/ind.html');
// });

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

app.post("/", function(request, response) {
	console.log(request);
    // if (!request.body.title || !request.body.body) {
    //     response.status(400).send("Entries must have a title and a body.");
    //     return;
    // }
    response.redirect("/");
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})
