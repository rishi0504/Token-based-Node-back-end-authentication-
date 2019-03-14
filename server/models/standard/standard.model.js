var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var StandardSchema = new Schema({
    classes: [{ key : {type: String},value : {type:String} }],
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, index: { unique: true },
        ref: 'Board'
    }
});

module.exports = mongoose.model('Standard', StandardSchema);