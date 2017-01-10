// Before you start, Create and new DB & table in MySQL
// Change db_config as required


// 1.
/* CREATE DATABASE images; */

// 2.
/* USE images; */

// 3.
/*CREATE TABLE `images_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `album_id` varchar(45) DEFAULT NULL,
  `stringified_src` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;*/


var db_config = {
    "host": "localhost",
    "user": "root",
    "password": "root123",
    "database": "images"
};

module.exports = {
    db_config: db_config
}
