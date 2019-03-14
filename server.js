/**
 * Created by Rishabh on 1/31/2016.
 */

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var config = require("./config");
var app = express();
var authInterceptor = require('./server/middleware/auth-interceptor')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.set('useCreateIndex', true);

mongoose.connect(config.database, { useNewUrlParser: true });



app.use(morgan('dev'));

//=============Security related route protections==================
//==============================Start==============================
app.use('**/user/**', authInterceptor('protected'));
app.use('**/service/**', authInterceptor('protected'));
app.use('**/signin', authInterceptor('public'));
app.use('**/signup', authInterceptor('public'));
//==============================End==============================


//Login and signup serivces
require('./server/routes/user/auth.route')(app, express);

//User details specific apis
require('./server/routes/user/user.route')(app, express);



//=============Educational Content related apis==================
//==============================Start==============================
require('./server/routes/board/board.route')(app, express);
require('./server/routes/standard/standard.route')(app, express);

//==============================End==============================


app.get('/', function (req, res) {
    res.json({ method: "Get method is called." });
});

app.listen(config.port, function () {
    console.log("Server is running on " + config.port);
})

