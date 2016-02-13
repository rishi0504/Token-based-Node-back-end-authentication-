/**
 * Created by Rishabh on 2/3/2016.
 */

var User = require('../models/user.model');
var config = require('../../config');
exports.getdetail = function(req,res){

    User.find({username:req.headers['username']},function(err,user){
        if(err)
        {
           return  res.send(err);
        }else{
            return res.json(user);
        }
    });

}