const fs = require('fs');
const http = require('http');

//SERVER: 1. create a server 2. start a server

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the Server!');
});

server.listen(8000, '127.0.0.1', ()=> {
    console.log('Listening to requests on port 8000');

});