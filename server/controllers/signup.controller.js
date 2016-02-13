/**
 * Created by Rishabh on 2/1/2016.
 */

var User = require('../models/user.model');
var jwttoken = require("jsonwebtoken");
var config = require('../../config');

exports.add = function (req, res) {

    var user = new User();

    user.name = req.body.name;
    user.password = req.body.password;
    user.username = req.body.username;
    user.dob = req.body.dob;
    user.email = req.body.email;
    user.save(function (err) {
        if (err) {
            if (err.code == 11000) {
                return res.json({message: "User already exists."});
            } else {
                return res.send(err);
            }
        } else {
            var token = jwttoken.sign({name: user.name, username: user.username}, config.secret, {expires: 1440});
            return res.json({message: "enjoy token.", token: token, user: user});
        }

    });


}