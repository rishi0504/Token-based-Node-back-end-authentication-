
var Standard = require('../../models/standard/standard.model');



module.exports.addStandard = function (req, res) {

}

module.exports.addStandards = function (req, res) {
    var standard = new Standard();
    standard.classes = req.body.classes;
    standard.boardId = req.body.boardId;
    standard.save(function(err){
        if (err) {
            if (err.code == 11000) {
                return res.json({ message: "Standards already exist." });
            } else {
                return res.json({ message: "Something went wrong. Please try again." });
            }
        } else {
            return res.json(standard);
        }
    });
}

module.exports.deleteStandard = function (req, res) {

}

module.exports.deleteStandards = function (req, res) {

}



module.exports.getStandards = function (req, res) {
    Standard.find({}, function (err, standards) {
        if (err) {
            return res.json({ message: "Something went wrong. Please try again." });
        } else {
            return res.json(standards);
        }
    });
}

module.exports.getStandard = function (req, res) {

    var id = req.params.standardId;
    Standard.findById(id, function (err, standards) {
        if (err) {
            return res.json({ message: "Something went wrong. Please try again." });
        } else {
            return res.json(standards);
        }
    });
}