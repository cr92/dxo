var mongoose = require('mongoose');
var albumSchema = mongoose.Schema({
    albumname: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
