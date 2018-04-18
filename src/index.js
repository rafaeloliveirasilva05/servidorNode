
require('dotenv').config()

const server = require('./app/server/index')

server.listen('8080', function () {
    console.log('teste teste');
});
