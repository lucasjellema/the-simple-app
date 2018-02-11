
var express = require('express')
    , http = require('http')
    , bodyParser = require('body-parser') 

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
    res.write("About Simple App REST API V3.3:");
    res.write("/simple-app - POST  ");
    res.write("incoming headers" + JSON.stringify(req.headers));
    res.end();
});

app.get('/stuff', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
    var stuff = {
        "squadName": "Raymond Job en Frank",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
              "Radiation resistance",
              "Turning tiny",
              "Radiation blast"
            ]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ]
      }
    res.end(JSON.stringify(stuff));
});

handlePost =
    function (req, res) {
        var input = req.body;
        var result = input;
        result.summary = "result from simple-app - changed version";
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }