var mongoose = require('mongoose');
var albumSchema = mongoose.Schema({
    albumname: { type: String, required: true, unique: true },
});
