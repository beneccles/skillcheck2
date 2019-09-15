import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inventory: [],
            editItem: {}
          }
      
        this.renderProducts = this.renderProducts.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    getInventory() {
        axios.get('/api/inventory').then((inventory) => {
          this.setState({ inventory: inventory.data })
        })

    
      }
      // Run GET as soon as APP loads.
      componentDidMount() {
        this.getInventory()
      }

      
    deleteProduct(id) {
        console.log(id)
        axios.delete(`/api/product/${id}`).then(res => {
            console.log("deleted")
            this.getInventory()
        })
    }
    renderProducts() {
        const { inventory } = this.state;
        let result = inventory.map((product) => {
            return (
                <Product key={product.id} product={product} delete={this.deleteProduct} />
            )
        })

        return result
    }

    render() {
        return <div>{this.renderProducts()}</div>
    }
}

export default Dashboard