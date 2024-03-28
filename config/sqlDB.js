const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Baba21/7',
    database: 'test',
})

module.exports = db