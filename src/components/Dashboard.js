import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.renderProducts = this.renderProducts.bind(this)
    }

    renderProducts() {
        const { inventory } = this.props;
        let result = inventory.map((product) => {
            return (
                <Product key={product.id} editProduct={this.props.editProduct} product={product} />
            )
        })

        return result
    }

    render() {
        return this.renderProducts()
    }
}

export default Dashboard