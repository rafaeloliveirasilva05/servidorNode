const db = require('../services/databaseMysql')

const routesAtendimento = (server) => {

    server.get('/buscarTodos/atendimento', async (req, res, next) => {
        try {
            res.send(await db.categories().all())
        } catch (error) {
            res.send(error)
        }
        next()
    })

    server.post('/procurarNome/atendimento', async (req, res, next) => {
        try {
            res.send(await db.categories().buscarNomeData(req))
        } catch (error) {
            res.send(error)
        }
        next()
    })

    server.post('/cadastrarCrianca/atendimento', async (req, res, next) => {

        try {
            res.send(await db.categories().save(req))

        } catch (error) {
            res.send(error)

        }
        next()
    })


}

module.exports = routesAtendimento