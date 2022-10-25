const http = require('http');
const express = require('express')
//declare middleware
app.use(logger)
//middleware example 
function logger(req, res, next){
     console.log('log')
     next()
}

const requestListener = function (req, res) {
  res.writeHead(200,{'Content-Type' : 'text/html'});
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8000);