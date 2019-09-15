import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="bodySection">
          <Switch>
            <Route exact path='/' component={() => <Dashboard />} />
            <Route path='/add' component={() => <Form />} />
            <Route path='/edit/:id' component={() => <Form />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
