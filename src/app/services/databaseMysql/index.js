const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'coxinha',
    database: 'conselhotutelar'
})

const errorHandler = (error, msg, rejectFunction) => {
    console.error(error)
    rejectFunction({ error: msg })
}

const categoryModule = require('./categories')({ connection, errorHandler })

module.exports = {
    categories: () => categoryModule
}

/*
host: 'localhost',
user: 'root',
password: 'coxinha',
database: 'restful_ws'
*/