/**
 * Created by Rishabh on 2/1/2016.
 */

var signin_controller = require('../controllers/signin.controller');

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })
    app.post('/api/signin', signin_controller.getuser);
}