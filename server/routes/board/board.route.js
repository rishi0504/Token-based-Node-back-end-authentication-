/**
 * Created by Rishabh on 2/2/2016.
 */

var jwt = require('jsonwebtoken');
var config = require('../../../config');
var cors = require('cors');
const BoardController = require('../../controllers/board/board.controller');
module.exports = function (app) {
    app.use(cors(), function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'accept');
        next();
    });

    app.post('/service/board', BoardController.addBoard);
    app.get('/service/board', BoardController.getBoards);
    app.get('/service/board/:boardId', BoardController.getBoard);
    app.delete('/service/board/:boardId', BoardController.deleteBoard);
}