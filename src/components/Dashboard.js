import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.renderProducts = this.renderProducts.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id) {
        console.log(id)
        axios.delete(`/api/product/${id}`).then(res => {
            console.log("deleted")
            this.props.getInventory()
        })
    }
    renderProducts() {
        const { inventory } = this.props;
        let result = inventory.map((product) => {
            return (
                <Product key={product.id} editProduct={this.props.editProduct} product={product} delete={this.deleteProduct} />
            )
        })

        return result
    }

    render() {
        return this.renderProducts()
    }
}

export default Dashboard