var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ChapterSchema = new Schema({
    lessons: [{ type: String }],
    subjectName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }
});

module.exports = mongoose.model('Chapter', ChapterSchema);