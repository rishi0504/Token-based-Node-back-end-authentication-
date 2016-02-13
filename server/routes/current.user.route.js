/**
 * Created by Rishabh on 2/2/2016.
 */

var jwt = require('jsonwebtoken');
var config = require('../../config');

var current_user = require('../controllers/current.user.controller');
module.exports = function (app)
{

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Methods', 'X-Requested-With,Content-Type,Authorization');

        var token = req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.status(403).send({success: false, message: "failed to authenticate."});
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }

    });

        app.post('/user/getdetail' ,current_user.getdetail);
}