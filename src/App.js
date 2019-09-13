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
      inventory: []
    }
  }

  getInventory(){
    axios.get('/api/inventory').then((inventory) => {
      this.setState({inventory: inventory.data})
    })
  }

  componentDidMount(){
    this.getInventory()
  }

  formDidChange

  render() {
    return (
      <div className="App">
        <Header />
        <div className="bodySection">
        <Dashboard inventory={this.state.inventory} />
        <Form refreshInventory={() => this.getInventory()}/>
        </div>
      </div>
    );
  }
}

export default App;
