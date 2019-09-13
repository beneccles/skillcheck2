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

  componentDidMount(){
    axios.get('/api/inventory').then((inventory) => {
      this.setState({inventory: inventory.data})
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="bodySection">
        <Dashboard inventory={this.state.inventory} />
        <Form />
        </div>
      </div>
    );
  }
}

export default App;
