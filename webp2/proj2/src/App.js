import React, { Component } from 'react';
import './App.css';
import Inicijalizacija from './components/inicijalizacija'
import Matrica from './components/matrica'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Inicijalizacija/>
        <Matrica/>
      </div>
    );
  }
}

export default App;
