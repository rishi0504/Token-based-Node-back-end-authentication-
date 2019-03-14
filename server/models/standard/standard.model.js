var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var StandardSchema = new Schema({
    classes: [{ type: String }],
    boardName: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, index: { unique: true },
        ref: 'Board'
    }
});

module.exports = mongoose.model('Standard', StandardSchema);