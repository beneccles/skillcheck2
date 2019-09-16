module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then(products => res.status(200).send(products))
        // Return all products to the origin of the .GET call.
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, imgurl} = req.body
        db.create_product([name, price, imgurl]).then(result => {
            res.sendStatus(200)
        }).catch(err => {
            // To Err is Human, to Arr is Pirate
            console.log(err)
            res.status(500).send({errorMessage: 'Something Went Wrong! Our Engineers have been notified.'})
        })
    },
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id, name, price, img} = req.body
        // Pass in the ID  to update_product, so that it can update the server.
        db.update_product([id, name, price, img]).then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.status(500).send({errorMessage: 'Something Went Wrong! Our Engineers have been notified.'})
        })


    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        // Deconstruct the id from params passed in.
        const {id} = req.params

        db.delete_product([id]).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err)
            res.status(500).send({errorMessage: 'Something Went Wrong! Our Engineers have been notified.'})
        })


    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.get_product([id]).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err)
            res.status(500).send({errorMessage: 'Something Went Wrong! Our Engineers have been notified.'})
        })
    }
}