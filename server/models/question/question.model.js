var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var QuestionSchema = new Schema({
    questionContent: { 
        questionTitle: {type: String, require: true},
        questionType: { type: String, require: true },
        options: [{ type: String }],
    },
    chapterName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    }
});

module.exports = mongoose.model('Question', QuestionSchema);