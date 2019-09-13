import React, {Component} from 'react';
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

  render() {
  return (
    <div className="App">
      <Header />
    </div>
  );
  }
}

export default App;
