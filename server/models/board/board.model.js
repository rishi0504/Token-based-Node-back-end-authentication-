var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BoardSchema = new Schema({
    name: { type: String, required: true, index: { unique: true } }
});

module.exports = mongoose.model('Board', BoardSchema);