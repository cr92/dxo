var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'images'
});




connection.connect();
var album_name='hello';
var query_string='SELECT stringified_src from images_table where album_id="hellow"';
console.log(query_string)
connection.query(query_string, function(err, rows, fields) 
{
  if (err) throw err;
  console.log(rows);
  console.log('The solution is: ', rows[0]['stringified_src']);
});

connection.end();


function insertInDb(data,callback)
{
	var album_id=data['album_id'];
	var sources=JSON.stringify(data['sources']);

	var insert_query='INSERT INTO images_table (album_id, stringified_src) VALUES ("hooha","fyy")';
}