/**
 * Created by Rishabh on 2/1/2016.
 */

var User = require('../models/user.model');
var jwttoken = require("jsonwebtoken");
var config = require('../../config');

exports.getuser = function (req, res) {
    User.findOne({username: req.body.username}).select('name username password ').exec(function (err, user) {
        if (err)

            throw err;
        if (!user) {
            return res.json({message: "Password not match.",status:false});
        } else {
            var token = jwttoken.sign({
                name: user.name,
                username: user.username
            }, config.secret, {expiresInMinutes: 1440});
            var res_user ={name:user.name,username:user.username,email:user.email};
            return res.json({message: "enjoy token",status:true, user: res_user, token: token});
        }
    });
}


