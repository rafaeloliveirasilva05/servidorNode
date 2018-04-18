const restify = require('restify')
const server = restify.createServer()
const routes = require('../controllers/index')(server)
const cors = require('../middlewares/cors')
const jwtMiddleware = require('../middlewares/auth')
const morgan = require('morgan');

server.use(morgan('dev'))
server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())

//server.use(jwtMiddleware({ exclusions }))

module.exports = server