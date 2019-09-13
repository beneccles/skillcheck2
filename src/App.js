import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
      editItem: {
        id: 0,
        name: "",
        price: 0,
        img: ""
      }
    }
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

  editProduct(id, name, price, img){
    this.setState({id: id, name: name, price: price, img: img})
    console.log(this.state.editItem)
  }

  putProduct(product) {
    axios({
      method: 'post',
      url: '/api/product',
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img
      }
    }).then((response) => {console.log(response)}).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="bodySection">
        <Dashboard refresh={() => this.getInventory()} edit={() => this.editProduct()}inventory={this.state.inventory} />
        <Form editItem={this.editItem} refreshInventory={() => this.getInventory()}/>
        </div>
      </div>
    );
  }
}

export default App;
