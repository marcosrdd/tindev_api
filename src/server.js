//importa express
const express = require('express')

//servidor do express
const server = express();

server.get('/', function(req, res) {
    return res.send('Hello Word 2');
})

//servidor passa a escutar essa porta
server.listen(3333)