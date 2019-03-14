

var jwt = require('jsonwebtoken');
var config = require('../../../config');
var cors = require('cors');
const StandardController = require('../../controllers/standard/standard.controller');
module.exports = function (app) {
    app.use(cors(), function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'accept');
        next();
    });

    app.post('/service/standard', StandardController.addStandard);
    app.post('/service/standards', StandardController.addStandards);
    app.get('/service/standard', StandardController.getStandards);
    app.get('/service/standard/:standardId', StandardController.getStandard);
    //app.get('/service/board', StandardController.getBoards);
    //app.get('/service/board/:boardId', StandardController.getBoard);
    //app.delete('/service/board/:boardId', StandardController.deleteBoard);
}