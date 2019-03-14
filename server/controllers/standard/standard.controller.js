
var Standard = require('../../models/standard/standard.model');

module.exports.addStandard = function (req, res) {

}

module.exports.addStandards = function (req, res) {

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