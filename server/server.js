require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} on station!`))
})
.catch(err => console.log(err))