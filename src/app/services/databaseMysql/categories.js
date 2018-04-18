

const categories = deps => {

    return {
        all: () => {
            return new Promise((resolve, reject) => {

                const { connection, errorHandler } = deps
                const querySql = 'SELECT name,date_format(data_nascimento, "%d/%m/%Y") as data_formatada FROM criancas'

                connection.query(querySql, (error, results) => {

                    if (error) {

                        errorHandler(error, 'Falha ao lista as categorias', reject)
                        return false
                    }
                    resolve({ categories: results })
                })
            })
        },
        buscarNomeData: (req) => {
            return new Promise((resolve, reject) => {


                const { connection, errorHandler } = deps
                const { name, data_nascimento } = req.body.user

                ds = data_nascimento.split('/').reverse().join('/');
                console.log(ds)
                const querySql = 'SELECT name,date_format(data_nascimento, "%d/%m/%Y") as data_formatada FROM criancas WHERE name = ? AND data_nascimento = ?'

                connection.query(querySql, [name, ds], (error, results) => {

                    if (error) {

                        errorHandler(error, 'Falha ao lista as categorias', reject)
                        return false
                    }
                    resolve({ categories: results })
                })
            })
        },
        save: (req) => {
            return new Promise((resolve, reject) => {

                const { connection, errorHandler } = deps
                const { name, data_nascimento } = req.params

                ds = data_nascimento.split('/').reverse().join('/');

                const querySql = 'INSERT INTO criancas (name, data_nascimento) VALUES (?,?)'

                connection.query(querySql, [name, ds], (error, results) => {

                    if (error) {
                        //tanplate string
                        errorHandler(error, `Falha ao salvar a categoria ${name}`, reject)
                        return false
                    }
                    resolve({ category: { name, id: results.insertId } })
                })
            })
        },
        update: (id, name) => {
            return new Promise((resolve, reject) => {

                const { connection, errorHandler } = deps

                connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (error, results) => {
                    console.log(results)
                    if (error || !results.affectedRows) {
                        //tanplate string
                        errorHandler(error, `Falha ao atualizar a categoria ${name}`, reject)
                        return false
                    }
                    resolve({ category: { name, id }, affectedRows: results.affectedRows })
                })
            })

        },
        del: (id) => {
            return new Promise((resolve, reject) => {

                const { connection, errorHandler } = deps

                connection.query('DELETE FROM categories WHERE id = ?', [id], (error, results) => {
                    console.log(error)
                    if (error || !results.affectedRows) {
                        //tanplate string
                        errorHandler(error, `Falha ao remover a categoria de id ${id}`, reject)
                        return false
                    }
                    resolve({ menssage: 'Categoria removida com sucesso!', affectedRows: results.affectedRows })
                })
            })
        },
    }
}

module.exports = categories

