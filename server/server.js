require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controllers/inventoryController')
const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

// GET '/api/inventory'
// Recieve: Nothing
// Send: Products
app.get('/api/inventory', ctrl.getInventory)
app.get('/api/product/:id', ctrl.getOne)

// POST /api/product
// Recieve: req.body {name: "", price: #, img: URL}
app.post('/api/product', ctrl.addProduct)

// PUT /api/product
app.put('/api/product', ctrl.editProduct)

// DELETE /api/product
app.delete('/api/product/:id', ctrl.deleteProduct)

massive(CONNECTION_STRING)
    .then(databaseConnection => {
        app.set('db', databaseConnection)
        app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} on station!`))
    })
    .catch(err => console.log(err))