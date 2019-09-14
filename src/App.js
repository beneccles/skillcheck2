import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import {HashRouter, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
      editItem: {}
    }

    this.editProduct = this.editProduct.bind(this)
    this.getInventory = this.getInventory.bind(this)
  }
  getInventory(){
    axios.get('/api/inventory').then((inventory) => {
      this.setState({inventory: inventory.data})
    })

  }
  // Run GET as soon as APP loads.
  componentDidMount(){
    this.getInventory()
  }
  

  
  editProduct(product){
    this.setState({editItem:product})
  }

  // putProduct(product) {
  //   axios({
  //     method: 'post',
  //     url: '/api/product',
  //     data: {
  //       id: product.id,
  //       name: product.name,
  //       price: product.price,
  //       img: product.img
  //     }
  //   }).then((response) => {console.log(response)}).catch((error) => {
  //     console.log(error)
  //   })
  // }

  render() {
    {this.getInventory()}
    return (
      <div className="App">
        <Header />
        <div className="bodySection">
        <Dashboard editProduct={this.editProduct} getInventory={this.getInventory} inventory={this.state.inventory} />
        <Form editItem={this.editProduct} refreshInventory={() => this.getInventory()}/>
        </div>
      </div>
    );
  }
}

export default App;
