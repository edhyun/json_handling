var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var router = express.Router();

app.use(router);

router.get('/', function (request, response, next) {
    fs.readFile('json.html', function (error, data) {
        response.send(data.toString());
    });
});

router.get('/user', function (request, response, next) {
    console.log('user.json called');
    fs.readFile('user.json', function (error, data) {
        response.send(data.toString());
    });
});

router.get('/sample', function (request, response, next) {
    console.log('sample.json called');
    fs.readFile('sample.json', function (error, data) {
        response.send(data.toString());
    });
});


var server = http.createServer(app);
server.listen(52273, function () { console.log('run at port 52273'); });

