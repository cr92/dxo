var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'images'
});


//var data = { album_id: 'jhfjhfhkf', sources: ['fgfg', 'fuhfi', 'ydyu'] };
//insertInDb(data);
//retrieveAlbum('foo')


function insertInDb(data) {
    connection.connect();
    var album_id = data['album_id'];
    var sources = JSON.stringify(data['sources']);

    var data_to_db = { album_id: album_id, stringified_src: sources };

    console.log(data_to_db);

    connection.query('INSERT INTO images_table SET ?', data_to_db, function(error, result) {
        if (error) {
            console.log(error);
            connection.end();
        } else {
            console.log('success' + result);
            connection.end();
        }
    });
}


function retrieveAlbum(album_id) {
    connection.connect();
    var query_string = 'SELECT stringified_src FROM images_table WHERE album_id="' + album_id + '"';
    connection.query(query_string, function(error, result) {
        if (error) {
            console.log(error);
            connection.end();
        } else {
            console.log('success' + JSON.stringify(result));
            connection.end();
        }
    });
}

