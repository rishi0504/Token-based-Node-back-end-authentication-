/**
 * Created by Rishabh on 2/2/2016.
 */

var jwt = require('jsonwebtoken');
var config = require('../../../config');
var cors = require('cors');
var current_user = require('../../controllers/user/user.controller');
module.exports = function (app)
{
    app.use(cors(),function(req,res,next){
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'accept');
        next();
    });

    app.get('/user/getdetail' ,current_user.getdetail);
}