
/**
 * Module dependencies.
 */
var express = require('express')
    , http = require('http');

var bodyParser = require('body-parser') // npm install body-parser

var app = express();
var server = http.createServer(app);

var PORT = process.env.PORT || 3000;


server.listen(PORT, function () {
    console.log('Server running, Express is listening... at ' + PORT + " for Orders Data API");
});

app.use(bodyParser.json()); // for parsing application/json



app.post('/simple-app', function (req, res) {
    console.log("Received Post request - will handle it now ");
    handlePost(req, res);
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
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