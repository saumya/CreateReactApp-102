import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Container, Header } from 'semantic-ui-react'

import AppHome from './comps/AppHome.container'

class App extends Component {
  render() {
    return (
      <div className="App">
      {
        /*
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        */
      }
        <AppHome />
        
      </div>
    );
  }
}

export default App;
