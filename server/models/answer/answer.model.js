var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AnswerSchema = new Schema({
    answerType: { type: String },
    questionName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
});

module.exports = mongoose.model('Answer', AnswerSchema);