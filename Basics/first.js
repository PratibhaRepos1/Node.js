var http = require('http');
var dt = require('./datatime');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World! Welcome to Node.js world');
}).listen(8080);