
/**
 * Module dependencies.
 */
var express = require('express')
    , http = require('http');

var bodyParser = require('body-parser') // npm install body-parser

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json()); // for parsing application/json







http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.post('/simple-app', function (req, res) {
    console.log("Received Post request - will handle it now ");
    handlePost(req, res);
});


app.get('/about', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("About Simple App REST API:");
    res.write("/simple-app - POST  ");
    res.write("incoming headers" + JSON.stringify(req.headers));
    res.end();
});


handlePost =
    function (req, res) {
        var input = req.body;
        var result = input;
        result.summary = "result from simple-app - changed version";
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));

    }