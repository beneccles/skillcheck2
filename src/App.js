import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then((inventory) => {
      this.setState({inventory: inventory.data})
      console.log(this.state.inventory)
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
