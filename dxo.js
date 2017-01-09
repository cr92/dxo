var express=require('express');
var app=express();
app.use(express.static(__dirname));

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

app.get('/',function(request,response)
{
    response.sendFile(__dirname + '/views/index.html');
});

var server=app.listen(8081,function()
{
    var host=server.address().address;
    var port=server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})
