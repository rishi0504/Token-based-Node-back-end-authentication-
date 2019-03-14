var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SubjectSchema = new Schema({
    subjects: [{ type: String }],
    standard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Standard'
    }
});

module.exports = mongoose.model('Subject', SubjectSchema);