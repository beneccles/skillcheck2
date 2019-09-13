import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

   

    renderProducts() {
        const { inventory } = this.props;
        return inventory.map((product, index) => {
            return (
                <Product key={product.id} refresh={() => this.props.refresh()} edit={() => this.props.edit()} product={product} />
            )
        })
    }



    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        )
    }
}

export default Dashboard