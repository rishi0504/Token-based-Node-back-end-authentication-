
let Board = require('../../models/board/board.model');

module.exports.addBoard = function (req, res) {
    var board = new Board();
    if (!req.body.name) {
        res.json({ message: 'Incorrect data' });
    } else {
        board.name = req.body.name;
        console.log(board);
        board.save(function (err) {
            if (err) {
                if (err.code == 11000) {
                    return res.json({ message: "Board already exists." });
                } else {
                    return res.json({ message: "Something went wrong. Please try again." });
                }
            } else {
                return res.json(board);
            }
        });
    }
}


module.exports.getBoards = function (req, res) {
    Board.find({}, function (err, boards) {
        if (err) {
            return res.send(err);
        } else {
            return res.json(boards);
        }
    });
}


module.exports.getBoard = function (req, res) {
    var id = req.params.boardId;
    Board.findById(id, function (err, board) {
        if (err) {
            return res.json({ message: "Something went wrong. Please try again." });
        } else {
            return res.json(board);
        }
    });
}

module.exports.deleteBoard = function (req, res) {
    var id = req.params.boardId;
    Board.findByIdAndDelete(id, function (err, board) {
        if (err) {
            return res.json({ message: "Something went wrong. Please try again." });
        } else {
            return res.json({ message: "Board deleted successfully." });
        }
    });
}